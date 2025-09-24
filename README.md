# Company Management Platform

A modern Next.js application for managing companies, promotions, and business analytics.

## Features

- **Dashboard** - Comprehensive analytics and performance tracking
- **Company Management** - Efficient portfolio management and organization
- **Promotions** - Create and manage promotional campaigns
- **Modern UI** - Clean, responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

- `NEXT_PUBLIC_PROJECT_TOKEN` - Your MockAPI project token

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Forms**: Formik
- **Icons**: Custom SVG icons
- **Font**: Plus Jakarta Sans

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── (admin)/        # Admin dashboard routes
│   ├── components/     # Reusable components
│   └── globals.css     # Global styles
└── lib/                # Utilities and API
    └── api.ts          # API functions
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
