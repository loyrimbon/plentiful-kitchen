# Plentiful Kitchen — React Template

Clean, modern React + TypeScript + Tailwind CSS + Supabase template inspired by [plentifulkitchen.com](https://plentifulkitchen.com/).

## Features

- Vite + React 18 + TypeScript
- Tailwind CSS with custom sage / cream palette
- React Router
- Supabase (contact form ready)
- Responsive design
- Pages: Home, Package/Plans, About, Postpartum, Contact

## Local development

```bash
npm install
cp .env.example .env
# Fill in your Supabase credentials
npm run dev
```

## Deploy on Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Framework Preset: **Vite**
4. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy

## Supabase setup

Create a table named `contacts`:

```sql
create table contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  location text,
  family_size text,
  dietary text,
  plan_interest text,
  preferred_contact text,
  source text,
  message text
);

-- Allow public inserts (for contact form)
alter table contacts enable row level security;

create policy "Allow public inserts"
  on contacts for insert
  to anon
  with check (true);
```

## Notes

- The "Continue to Menu" button links to the real GoPrep menu of Plentiful Kitchen.
- Update pricing, text, and images as needed.
- Replace placeholder email and add real assets.
