/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 🎨 MAIN THEME COLORS - Change these to switch themes
        theme: {
          primary: '#00d4ff',      // Main accent color (highlights, buttons)
          primaryDark: '#0099cc',  // Darker version for hover states
          bgPrimary: '#1a1a2e',    // Main background color
          bgSecondary: '#16213e',  // Secondary background
          bgTertiary: '#0f3460',   // Tertiary background
        },
        
        // 🎨 ACCENT COLORS - For different sections
        accent: {
          success: '#22c55e',      // Green for success states
          warning: '#f59e0b',      // Orange for warnings
          error: '#ef4444',        // Red for errors
          info: '#3b82f6',         // Blue for info
        },
        
        // 🎨 TECHNOLOGY COLORS - For tech badges
        tech: {
          ruby: '#dc2626',
          rails: '#cc0000',
          nodejs: '#339933',
          vue: '#4fc08d',
          react: '#61dafb',
          typescript: '#3178c6',
          docker: '#2496ed',
          aws: '#ff9900',
          php: '#777bb4',
          go: '#00add8',
        },
      },
      
      // 🎨 CUSTOM GRADIENTS - Uses theme colors
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      
      // 🎨 CUSTOM ANIMATIONS
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
      },
      
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      // 🎨 CUSTOM SHADOWS
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 212, 255, 0.3)',
        'card-hover': '0 25px 50px -12px rgba(0, 212, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
