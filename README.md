<p align="center">
  <img src="public/main/logoSvg.svg" alt="FRMD Logo" width="80" />
</p>

<h1 align="center">FRMD</h1>

<p align="center">
  <strong>Premium Streetwear — Built for those who refuse to blend in.</strong>
</p>

<p align="center">
  <a href="https://frmd.vercel.app">Live Demo</a> · <a href="https://github.com/3mrmousa/FRMD/issues">Report Bug</a> · <a href="https://github.com/3mrmousa/FRMD/issues">Request Feature</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel" alt="Vercel" />
</p>

---

## ✦ About

**FRMD** is a modern, full-featured e-commerce storefront and admin dashboard for a premium streetwear brand based in Cairo. The project showcases a production-grade UI with dark/light theming, responsive layouts, and a curated design system — all built with the latest Next.js App Router architecture.

> *"You weren't built to blend in."*

---

## ✦ Features

### 🛍️ Storefront
- **Hero Landing** — Full-bleed hero with theme-aware background imagery
- **Product Catalog** — Accordion-style product display with advanced filtering
- **Shop by Category** — Visual category browsing with hover animations
- **New Arrivals** — Marquee ticker + product showcase section
- **Cart** — Fully designed shopping cart with quantity controls
- **Wishlist** — Save-for-later product gallery
- **Authentication** — Polished Login & Register pages with form validation UI
- **Dark / Light Mode** — Seamless theme switching via `next-themes`

### 🔧 Admin Dashboard
- **Sidebar Navigation** — Collapsible, mobile-friendly sidebar with route groups
- **Dashboard** — Responsive header with adaptive action buttons
- **8 Admin Sections** — Dashboard, Analytics, Products, Orders, Customers, Discounts, Settings, Notifications
- **Reusable Components** — Button, Header, Tag, ProgressBar with variant/size systems

### 🎨 Design System
- Semantic color tokens (background, foreground, muted, border, card, primary)
- Dark mode tokens with automatic class-based switching
- Custom typography scale — Inter, Poppins, Bebas Neue, Geist
- Custom scrollbar styling and marquee animations

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| **Language** | [TypeScript 5](https://typescriptlang.org) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) |
| **UI Libraries** | [MUI Icons](https://mui.com/material-ui/material-icons/), [Font Awesome](https://fontawesome.com) |
| **State** | [Redux Toolkit](https://redux-toolkit.js.org) + React Redux |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Animations** | [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee), CSS transitions |
| **Deployment** | [Vercel](https://vercel.com) |

---

## ✦ Project Structure

```
frmd/
├── app/
│   ├── (main)/                  # Storefront route group
│   │   ├── page.tsx             # Homepage (Hero + Ticker + Categories + CTA)
│   │   ├── products/            # Product catalog with filters
│   │   ├── cart/                # Shopping cart
│   │   ├── wishlist/            # Wishlist gallery
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   ├── contact/             # Contact page
│   │   ├── privacy/             # Privacy policy
│   │   └── returns/             # Returns policy
│   │
│   ├── (admin)/                 # Admin route group
│   │   ├── layout.tsx           # Admin layout (sidebar + main)
│   │   └── admin/               # /admin/* routes
│   │       ├── dashboard/       # Admin dashboard
│   │       ├── analytics/       # Analytics page
│   │       ├── products/        # Product management
│   │       ├── orders/          # Order management
│   │       ├── customers/       # Customer management
│   │       ├── discounts/       # Discount management
│   │       ├── settings/        # Settings page
│   │       └── notifications/   # Notifications page
│   │
│   ├── components/
│   │   ├── shared/              # Nav, Footer, Logo, SearchBar
│   │   ├── homePage/            # Ticker, ShopByCategory, NewArrivals, CTA
│   │   ├── products/            # ProductAccordion, Filter
│   │   ├── admin_components/    # Button, Header, Tag, ProgressBar
│   │   │   └── sidebar/         # Sidebar, OverviewLinks, StoreLinks, SystemLinks
│   │   └── theme/               # ThemeToggle
│   │
│   ├── providers/               # ThemeProvider
│   ├── globals.css              # Design tokens + theme variables
│   └── layout.tsx               # Root layout (fonts, metadata)
│
├── store/                       # Redux store
│   ├── store.ts
│   ├── provider.tsx
│   └── slices/
│
├── public/                      # Static assets (hero images, logo)
└── package.json
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/3mrmousa/FRMD.git
cd FRMD

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the storefront.  
Open [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard) to view the admin panel.

### Build

```bash
npm run build
npm start
```

---

## ✦ Routes

### Storefront

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, ticker, categories, new arrivals, CTA |
| `/products` | Product catalog with filters |
| `/products/[id]` | Single product page |
| `/cart` | Shopping cart |
| `/wishlist` | Saved items |
| `/login` | Sign in |
| `/register` | Create account |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/returns` | Return policy |
| `/profile` | User profile |

### Admin

| Route | Description |
|-------|-------------|
| `/admin/dashboard` | Admin dashboard |
| `/admin/analytics` | Analytics overview |
| `/admin/products` | Product management |
| `/admin/orders` | Order management |
| `/admin/customers` | Customer management |
| `/admin/discounts` | Discount management |
| `/admin/settings` | System settings |
| `/admin/notifications` | Notifications |

---

## ✦ Design Tokens

The project uses a semantic token system defined in `globals.css`:

```
Light                          Dark
──────────────────────────     ──────────────────────────
background   #ffffff           background   #09090b
foreground   #09090b           foreground   #fafafa
primary      #18181b           primary      #fafafa
muted        #f4f4f5           muted        #27272a
border       #e4e4e7           border       #27272a
```

---

## ✦ Deployment

The project is deployed on **Vercel** with automatic deployments from the `main` branch.

```bash
# Deploy via Vercel CLI
npx vercel
```

---

## ✦ License

This project is for educational and portfolio purposes.

---

<p align="center">
  <sub>Crafted in Cairo 🇪🇬 · Designed & developed by <a href="https://github.com/3mrmousa">@3mrmousa</a></sub>
</p>
