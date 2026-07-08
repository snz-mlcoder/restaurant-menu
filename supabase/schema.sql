-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).

create table if not exists menu_items (
  id text primary key,
  page text not null,
  category text not null,
  category_label text not null,
  name text not null,
  price text not null,
  sort_order integer not null,
  is_custom boolean not null default false,
  is_deleted boolean not null default false,
  last_edited_by text,
  updated_at timestamptz not null default now()
);

create table if not exists price_history (
  id bigserial primary key,
  item_id text not null,
  old_price text,
  new_price text,
  edited_by text,
  edited_at timestamptz not null default now()
);

alter table menu_items enable row level security;

drop policy if exists "public read" on menu_items;
create policy "public read" on menu_items
  for select using (true);

-- No insert/update/delete policy for the anon role is created on purpose.
-- That means the public site (which only uses the anon key) can read but
-- never write. Only the service-role key -- used exclusively inside the
-- /api serverless functions, never sent to the browser -- can write, and
-- it bypasses RLS entirely.
