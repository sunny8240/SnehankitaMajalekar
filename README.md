# Dr. Snehankita Majalekar - Academic Portfolio Website

A modern, responsive single-page application (SPA) showcasing the academic profile, research, publications, and professional achievements of Dr. Snehankita Majalekar, Assistant Professor at Pimpri Chinchwad University's School of Computer Applications.

## Features

### 🎨 Modern Design
- Vibrant gradient-based theme (purple, pink, blue)
- Glassmorphism effects and floating animations
- Professional Lucide React icons
- Modern card layouts across all pages
- Smooth transitions and hover effects

### 📱 Fully Responsive
- Mobile-first design approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation
- Optimized for tablets and desktop

### 🚀 Single Page Application (SPA)
- Client-side routing with hash navigation
- Smooth page transitions
- No page reloads
- Browser back/forward button support

### 📄 Comprehensive Content

#### 8 Main Pages:
1. **Home** - Hero section with introduction, stats, expertise, and research highlights
2. **About** - Biography, research interests, education, and employment history
3. **Research** - Research focus areas, patents, copyrights, publications, and editorial board memberships
4. **Books** - Published textbooks and academic publications
5. **Teaching** - Subjects taught, guest lectures, workshops, FDPs, and certifications
6. **Responsibilities** - Key roles, programs coordinated, and achievements
7. **Events** - Major events, workshops, and gallery
8. **Contact** - Contact information, WhatsApp integration, academic profiles, and contact form

### 💬 WhatsApp Integration
- Direct messaging functionality
- One-click chat feature
- Pre-filled message template
- Opens in new tab/WhatsApp app

### 🎯 Key Highlights
- 3+ Patents
- 10+ Publications
- 100+ Students Guided
- 15+ Years Experience
- Ph.D. holder
- NET Qualified

## Technologies Used

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript** - No frameworks, pure JavaScript for SPA functionality

### External Libraries
- **Lucide Icons** - Professional icon library (CDN)

## File Structure

```
/
├── index.html          # Main HTML file with navigation and footer
├── styles.css          # Complete CSS styles with animations and responsive design
├── pages.js            # All page content as JavaScript template literals
├── app.js              # Main application logic, navigation, and interactions
└── README.md           # Documentation
```

## Setup and Installation

### Option 1: Direct Browser Opening
1. Download all files to a local folder
2. Open `index.html` in any modern web browser
3. The website will work immediately with full functionality

### Option 2: Local Web Server
For best performance and testing:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Browser Compatibility

### Supported Browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Minimum Requirements:
- ES6 JavaScript support
- CSS3 support (Flexbox, Grid, Gradients)
- HTML5 support

## Responsive Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: ≥ 1024px
```

## Color Palette

```css
Primary Purple: #9333ea
Primary Pink: #ec4899
Primary Blue: #3b82f6
Accent Cyan: #06b6d4
Accent Green: #10b981
Accent Orange: #f97316
Accent Red: #ef4444

Text Dark: #1f2937
Text Gray: #6b7280
Background: #ffffff
Background Gradient: #faf5ff to #fce7f3 to #eff6ff
```

## Key CSS Classes

```css
.gradient-text       - Gradient text effect
.card                - Card container with glassmorphism
.animate-float       - Floating animation
.hero-section        - Hero/banner section
.section-header      - Page section header
.grid-2, .grid-3, .grid-4 - Responsive grid layouts
```

## JavaScript Functions

```javascript
navigateToPage(pageName)     - Navigate to a specific page
handleWhatsAppClick()        - Open WhatsApp chat
handleFormSubmit(event)      - Handle contact form submission
initializeApp()              - Initialize the application
initializeNavigation()       - Setup navigation event listeners
```

## Customization

### Changing Colors
Edit the color values in `styles.css`:
```css
/* Find and replace these gradient values */
background: linear-gradient(to right, #9333ea, #ec4899);
```

### Adding New Pages
1. Add page content to `pages.js`:
```javascript
pages.newpage = `<div class="page" id="newpage">...</div>`;
```

2. Add navigation link in `index.html`:
```html
<a href="#newpage" class="nav-link" data-page="newpage">New Page</a>
```

### Modifying Content
Edit the page content directly in `pages.js` - each page is a template literal string.

## Performance Optimizations

- Lazy loading for images
- CSS animations with GPU acceleration
- Minimal JavaScript dependencies
- Efficient DOM manipulation
- Optimized for mobile devices
- Intersection Observer for scroll animations

## Accessibility

- Semantic HTML5 markup
- ARIA labels where needed
- Keyboard navigation support
- High contrast text
- Focus indicators
- Screen reader friendly

## WhatsApp Integration

The WhatsApp button opens a chat with the pre-filled message:
```
"Hello Dr. Snehankita, I would like to connect with you."
```

Phone number: +91 7057371098

## Contact Form

The contact form is currently a demo. To make it functional:

1. **Backend Integration**: Connect to a backend API
2. **Email Service**: Use services like EmailJS, FormSubmit, or Formspree
3. **Database**: Store submissions in a database

## SEO Optimization

The website includes:
- Meta description
- Meta keywords
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Structured data potential

## Future Enhancements

Potential additions:
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Blog/News section
- [ ] Photo gallery with lightbox
- [ ] PDF resume download
- [ ] Animation on scroll
- [ ] Progressive Web App (PWA) features
- [ ] Multi-language support
- [ ] Analytics integration

## Credits

**Design & Development**: Academic Portfolio System
**Content**: Dr. Snehankita Majalekar
**Icons**: Lucide Icons
**Fonts**: System fonts

## License

© 2024 Dr. Snehankita Majalekar. All rights reserved.

## Contact

For questions or support regarding this website:

- **Email**: snehankitamajalekar@yahoo.com
- **Phone**: +91 7057371098
- **WhatsApp**: [Click to Chat](https://wa.me/917057371098)

---

**Made with ❤️ for Education**
