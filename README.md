# Ralph Vincent Rodriguez - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student and aspiring software engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized performance with lazy loading and code splitting
- **SEO Optimized**: Complete SEO setup with meta tags and structured data
- **Accessible**: Built with accessibility best practices
- **PWA Ready**: Progressive Web App capabilities with offline support

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React, Material-UI Icons
- **UI Components**: Material-UI
- **Fonts**: Custom font family (Incognito) + Inter

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, fonts, icons)
├── components/       # Reusable React components
├── pages/           # Page components
├── styles/          # CSS and styling files
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rappykyun/My_2025_Portfolio.git
   cd My_2025_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## 🌐 Deployment

This portfolio is ready for deployment on various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

### Other Platforms

The `dist` folder contains all static files needed for deployment on any static hosting service.

## 📱 Pages & Features

### Home Page
- Hero section with introduction
- Skills and experience showcase
- Animated elements and smooth transitions

### Projects Page
- Showcase of key projects
- Detailed project information
- Links to live demos and source code

### Project Details
- In-depth project descriptions
- Technology stack information
- Features and timeline details

### Contact Page
- Contact form with validation
- Contact information
- Social media links

## 🎨 Customization

### Updating Personal Information

1. Edit `src/components/Hero.tsx` for personal introduction
2. Update contact information in `src/pages/Contact.tsx`
3. Modify project data in `src/components/ProjectDetails.tsx`

### Styling

- Primary color: `#059669` (Green-600)
- Dark mode support via Tailwind CSS
- Custom fonts defined in `src/styles/fonts.css`

### Adding New Projects

1. Add project data to `src/components/ProjectDetails.tsx`
2. Create a new component in `src/components/`
3. Add the project to the projects list in `src/pages/Projects.tsx`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Known Issues

- None currently reported

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Contact

- **Email**: ralphvincentrodriguez@sksu.edu.ph
- **LinkedIn**: [Ralph Vincent Rodriguez](https://www.linkedin.com/in/ralph-vincent-rodriguez-205a6b241/)
- **GitHub**: [Rappykyun](https://github.com/Rappykyun)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Icons by [Lucide](https://lucide.dev/)
- Fonts and design inspiration from various sources

---

Built with ❤️ by Ralph Vincent Rodriguez
