const { verifyToken, supabaseRequest } = require("./_lib");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body || {};

  if (!verifyToken(body.token)) {
    res.status(401).json({ error: "Session expired, please log in again" });
    return;
  }

  const editedBy = String(body.editedBy || "").trim();
  if (!editedBy) {
    res.status(400).json({ error: "Your name is required" });
    return;
  }

  try {
    if (body.action === "update") {
      await handleUpdate(body, editedBy);
    } else if (body.action === "delete") {
      await handleDelete(body, editedBy);
    } else if (body.action === "add") {
      await handleAdd(body, editedBy);
    } else {
      res.status(400).json({ error: "Unknown action" });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
};

async function handleUpdate(body, editedBy) {
  const id = String(body.id || "").trim();
  const name = String(body.name || "").trim();
  const price = String(body.price || "").trim();
  if (!id || !name || !price) throw new Error("Missing id, name, or price");

  await supabaseRequest("/rest/v1/menu_items?id=eq." + encodeURIComponent(id), {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      name,
      price,
      last_edited_by: editedBy,
      updated_at: new Date().toISOString(),
    }),
  });

  const oldPrice = String(body.oldPrice || "").trim();
  if (oldPrice && oldPrice !== price) {
    await supabaseRequest("/rest/v1/price_history", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        item_id: id,
        old_price: oldPrice,
        new_price: price,
        edited_by: editedBy,
      }),
    });
  }
}

async function handleDelete(body, editedBy) {
  const id = String(body.id || "").trim();
  if (!id) throw new Error("Missing id");

  await supabaseRequest("/rest/v1/menu_items?id=eq." + encodeURIComponent(id), {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      is_deleted: true,
      last_edited_by: editedBy,
      updated_at: new Date().toISOString(),
    }),
  });
}

async function handleAdd(body, editedBy) {
  const page = String(body.page || "").trim();
  const category = String(body.category || "").trim();
  const categoryLabel = String(body.categoryLabel || "").trim();
  const name = String(body.name || "").trim();
  const price = String(body.price || "").trim();
  if (!page || !category || !categoryLabel || !name || !price) {
    throw new Error("Missing required fields");
  }

  const id = page + "-" + category + "-custom-" + Date.now();

  await supabaseRequest("/rest/v1/menu_items", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({
      id,
      page,
      category,
      category_label: categoryLabel,
      name,
      price,
      sort_order: Math.floor(Date.now() / 1000),
      is_custom: true,
      last_edited_by: editedBy,
      updated_at: new Date().toISOString(),
    }),
  });
}
