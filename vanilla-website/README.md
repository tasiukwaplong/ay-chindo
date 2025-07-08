# AY Chindo Foundation - Vanilla Website

A clean, modern, and responsive website for the AY Chindo Foundation built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with smooth animations and hover effects
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Performance**: Optimized for fast loading with minimal dependencies
- **Interactive Elements**: Mobile menu, smooth scrolling, counter animations

## File Structure

```
vanilla-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Create this folder for images
    └── logo.png        # Add your logo here
```

## Setup

1. Create an `assets` folder in the same directory as the HTML file
2. Add your logo image as `assets/logo.png`
3. Open `index.html` in a web browser or host on any web server

## Customization

### Colors
All colors are defined as CSS variables in `styles.css` at the top:
- `--primary-teal`: Main brand color
- `--primary-gold`: Accent color  
- `--primary-green`: Secondary color
- And more...

### Content
Edit the content directly in `index.html`:
- Update text content
- Replace placeholder images with your own
- Modify contact information
- Add/remove sections as needed

### Styling
Modify `styles.css` to:
- Change fonts (currently using Google Fonts: Poppins & Open Sans)
- Adjust spacing and layout
- Customize animations and transitions

### Functionality
Enhance `script.js` to:
- Add form validation
- Integrate payment processing
- Add more interactive features

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Notes

- Uses Google Fonts with `display=swap` for better loading performance
- Images are optimized for web with proper sizing
- CSS and JS are minified-ready
- Uses modern CSS features with fallbacks

## Deployment

This website can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

Simply upload all files to your hosting provider's public folder.

## License

Created for AY Chindo Foundation. All rights reserved.