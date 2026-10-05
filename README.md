# A7 Group — Dubai Real Estate Platform

A full-stack Next.js 16 web platform for **A7 Group**, a Dubai-based real estate agency. The platform helps buyers, investors, and tenants discover off-plan projects, ready listings, and specialist property services across Dubai's top residential communities.

**Contact:** +971 50 392 8461 · info@a7group.com

---

## What the Platform Covers

### Property Discovery
- **Off-Plan Projects** — New developments by Emaar, Damac, Nakheel, Meraas, Aldar and other leading Dubai developers, with payment plans, handover dates, floor plans, and galleries.
- **Ready Listings** — Resale apartments, villas, townhouses, and penthouses with full detail pages: stats, amenities, transactions, agent contact.
- **Areas Guide** — In-depth profiles of Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, JVC, Dubai Hills Estate, and more.

### Services
| Service | Description |
|---|---|
| Property Management | End-to-end management for landlords |
| List Your Property | Sell or rent through A7 Group agents |
| Mortgages | Finance advisory and mortgage referrals |
| Conveyancing | Legal transfer and title-deed support |
| Short-Term Rentals | Holiday and serviced accommodation |
| Property Snagging | Pre-handover inspection reports |
| Plots | Land acquisition in Dubai |

### Agents
Multilingual agents (Arabic, English, Hindi, Russian, French) across Broker, Consultant, and Director roles, searchable by language, role, and area of expertise.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19, Radix UI, Tailwind CSS 4, Framer Motion |
| State / Hooks | React hooks, custom `use-fetch`, `use-property-search` |
| Architecture | Feature-sliced DDD (domain → data → app layers) |

## Clean Architecture Layers

```
src/
  features/
    core/
      {domain}/
        domain/       ← entities, interfaces, use-cases  (pure TS, zero framework)
        data/         ← repositories, mappers, DTOs       (API ↔ domain translation)
    {feature}/
      services/       ← orchestrates domain use-cases
      hooks/          ← React integration layer
      types/          ← feature-scoped types
  components/         ← UI components (props-in, no direct API calls)
  app/                ← Next.js App Router pages and layouts
```

---

## Scripts

```bash
npm run dev                     # start dev server (Turbopack)
npm run build                   # production build
npm run typecheck               # TypeScript check (no emit)
npm run lint                    # ESLint
npm run check                   # lint + typecheck
```

---

## Project Structure

```
src/
  app/                          # Next.js App Router (public + auth + design-system routes)
  components/                   # Feature-grouped UI components
    agents/  areas/  auth/  home/  layout/  properties/  search/  ui/  ...
  data/                         # Static content and mock data
    agents/  areas/  developers/  events/  properties/  services/
  features/
    core/                       # DDD domain layer
      agent/  property/  search/  user/
    agents/  auth/  property/  search/
  hooks/                        # Shared React hooks
  lib/                          # Shared utilities (routes, utils)
  bootstrap/                    # App bootstrap (API client, config)
```
