# Sleek React Resume Site

A beautiful, single-file React resume page built with Tailwind CSS, shadcn/ui components, and Framer Motion for subtle animations.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🎨 shadcn/ui component system for consistent styling
- 🚀 Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- 🎯 Single-file component architecture
- 🌙 Built-in dark mode support (CSS variables ready)

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Production-ready motion library
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── ResumeSite.jsx    # Main resume component
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind + CSS variables
├── index.html             # HTML entry point
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Customization

### Personal Information

Edit the `DATA` object in `src/ResumeSite.jsx` to update:
- Personal details (name, title, location)
- Contact information
- Experience, skills, education
- Projects and certifications

### Styling

- **Colors**: Modify CSS variables in `src/index.css`
- **Layout**: Adjust Tailwind classes in the component
- **Animations**: Customize Framer Motion transitions

### Adding New Sections

The component is modular - simply add new `motion.div` sections following the existing pattern.

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting provider

### Export as Static HTML

The build process creates a fully static site that can be deployed anywhere.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this for your own resume!

---

Built with ♥ using modern web technologies.
# resume-site
