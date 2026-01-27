# Payflo.dev - Astro 5.7 Implementation

This is a modern reimplementation of the [salsa.dev](https://www.salsa.dev/) website using Astro 5.7, following the latest best practices.

## Features

- Built with Astro 5.7
- Responsive design using Tailwind CSS
- Smooth & subtle micro-interactions
- Optimized images with Astro's built-in image optimization
- Modern SEO practices
- Accessibility-friendly components
- Fast page transitions with View Transitions API

[<img width="609" height="500" alt="home-page" src="https://github.com/user-attachments/assets/1e311553-3314-4c40-96f6-50daa5cf36f0" />](https://payflo.corytrimm.com)

## Project Structure

```
/
├── public/               # Static assets like images and favicons
├── src/
│   ├── assets/           # Images processed by Astro
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components and routes
│   ├── scripts/          # Client-side JavaScript
│   └── styles/           # Global CSS and utility styles
├── .gitignore
├── astro.config.mjs      # Astro configuration
├── package.json          # Project dependencies
├── tailwind.config.mjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ctrimm/astro-payroll-solution-theme.git
cd astro-payroll-solution-theme
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Building for Production

To build the site for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the styles by modifying:

- `tailwind.config.mjs` - For theme configuration
- `src/styles/global.css` - For global styles and custom utility classes

### Content

Update the content of the site by modifying the components in the `src/components/` directory and the pages in the `src/pages/` directory.

### Images

- Place static images that don't need processing in the `public/` directory
- Place images that need optimization in the `src/assets/` directory

## Adding New Pages

To add a new page, create a new `.astro` file in the `src/pages/` directory. The file path will determine the route.

For example:
- `src/pages/blog.astro` will be accessible at `/blog`
- `src/pages/blog/[slug].astro` will create dynamic routes for blog posts

## Animations

The site uses a combination of:

1. CSS animations defined in `src/styles/global.css`
2. Intersection Observer for triggering animations on scroll, implemented in `src/scripts/animations.js`

## Deployment

This Astro site can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Follow the respective platform's documentation for deployment instructions.

## License

This project is open source and available under the [MIT License](LICENSE).
