# Elvis Moreira - Portfolio Website

A modern, responsive portfolio website built with **Astro** and **Tailwind CSS** featuring a beautiful gradient design and smooth animations.

## 🚀 Live Demo

[View Live Website](https://elvisnm.com)

## ✨ Features

- **Modern Design**: Clean, professional portfolio with gradient backgrounds
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Contact Integration**: Direct email and social media links
- **Resume Download**: Easy access to downloadable resume

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Font Awesome](https://fontawesome.com/) - Icon library
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif font
- **Deployment**: Ready for deployment on Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
elvisnm-website-test/
├── src/
│   └── pages/
│       └── index.astro          # Main portfolio page
├── public/
│   ├── elvis-moreira_resume.pdf # Resume file
│   └── favicon.svg              # Website favicon
├── package.json                 # Dependencies
├── tailwind.config.mjs          # Tailwind configuration
├── astro.config.mjs             # Astro configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to red gradient (`#5a4a7c` → `#e85a5a` → `#2c3e5c`)
- **Accent Colors**: Dark blue gradients for buttons and highlights
- **Text**: White text with proper contrast ratios

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Sizing**: Clamp-based responsive typography
- **Hierarchy**: Clear visual hierarchy with different font weights and sizes

### Animations
- **Fade-in Effects**: Staggered content animations
- **Floating Shapes**: Geometric background elements with parallax
- **Hover Effects**: Interactive button and element hover states
- **Smooth Transitions**: CSS transitions for all interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/elvisnm/elvisnm-website-test.git
   cd elvisnm-website-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Mobile Optimizations
- Touch-friendly button sizes
- Optimized typography scaling
- Proper spacing for mobile viewing
- Background attachment adjustments for mobile performance

## 🎯 Customization

### Changing Colors
The color scheme can be customized by modifying the CSS variables in `src/pages/index.astro`:

```css
.hero-gradient {
    background: linear-gradient(135deg, #5a4a7c 0%, #e85a5a 35%, #2c3e5c 100%);
}
```

### Updating Content
- **Personal Information**: Edit the content in `src/pages/index.astro`
- **Resume**: Replace `public/elvis-moreira_resume.pdf` with your resume
- **Social Links**: Update the LinkedIn and GitHub URLs
- **Contact Email**: Change the email address in the contact button

### Adding Sections
To add new sections, simply add them to the main content area in `src/pages/index.astro` following the existing structure.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Astro and build the project
3. Your site will be live at `https://your-project.vercel.app`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Other Platforms
The built `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Any web server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Elvis Moreira**
- LinkedIn: [elvisnm](https://linkedin.com/in/elvisnm)
- GitHub: [elvisnm](https://github.com/elvisnm)
- Email: contact@elvisnm.com

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: contact@elvisnm.com
- LinkedIn: [elvisnm](https://linkedin.com/in/elvisnm)

---

Built with ❤️ using Astro and Tailwind CSS
