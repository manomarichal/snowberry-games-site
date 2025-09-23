# Snowberry Games Website - Game Modal System

## 🎮 Features

Your website now includes a comprehensive game modal system with the following features:

### ✨ Modal Popup System
- **Interactive Game Cards**: Click any game card to open a detailed modal
- **Beautiful Animations**: Smooth fade-in effects with winter-themed styling
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Keyboard Navigation**: Press `ESC` to close modals

### 🎬 Media Carousel
- **Mixed Media Support**: Images and YouTube videos in the same carousel
- **Navigation Controls**: Arrow buttons and dot indicators
- **Touch/Swipe Support**: Native mobile swipe gestures
- **Auto-resize**: Media automatically fits the container

### 🔗 Platform Links
- **Customizable Platforms**: Steam, Itch.io, Epic Games Store, PlayStation, Xbox, etc.
- **Optional Links**: Only show the platforms where your game is available
- **Branded Styling**: Each platform has its own color scheme and icon
- **External Links**: All links open in new tabs

## 🛠️ How to Customize Your Games

### 1. Edit Game Information

Open `js/game-data.js` and modify the game objects. Here's the structure:

```javascript
gameName: {
    title: "Your Game Title",
    description: "Short description for the game card",
    longDescription: "Detailed description for the modal (2-3 paragraphs)",
    
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
        // Add as many features as you want
    ],
    
    specs: {
        "Release Date": "When it releases",
        "Platform": "Where it's available",
        "Genre": "Game genre",
        // Add any specs you want
    },
    
    media: [
        // See media section below
    ],
    
    platforms: [
        // See platforms section below
    ]
}
```

### 2. Add Your Media (Images & Videos)

Replace the placeholder media with your actual game media:

```javascript
media: [
    {
        type: 'youtube',
        url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        title: 'Your Video Title'
    },
    {
        type: 'image',
        url: 'images/your-screenshot.jpg', // or full URL
        title: 'Screenshot Description'
    }
    // Add as many media items as you want
]
```

**YouTube URLs**: 
- Use the embed format: `https://www.youtube.com/embed/VIDEO_ID`
- Get the VIDEO_ID from the regular YouTube URL after `watch?v=`

**Image URLs**:
- Use local files: `images/screenshot1.jpg`
- Or external URLs: `https://your-cdn.com/image.jpg`

### 3. Configure Platform Links

Add your actual game store links:

```javascript
platforms: [
    {
        name: 'Steam',
        url: 'https://store.steampowered.com/app/YOUR_STEAM_ID',
        class: 'steam',
        icon: '🎮'
    },
    {
        name: 'Itch.io',
        url: 'https://yourusername.itch.io/your-game',
        class: 'itch',
        icon: '🎯'
    }
    // Only include platforms where your game is actually available
]
```

**Available Platform Classes**:
- `steam` - Steam (dark blue/gray theme)
- `itch` - Itch.io (red/pink theme)
- `epic` - Epic Games Store (blue theme)
- `playstation` - PlayStation Store (blue theme)
- `xbox` - Xbox Store (green theme)
- `nintendo` - Nintendo eShop (red theme)
- `gog` - GOG.com (purple theme)

### 4. Add New Games

To add a completely new game:

1. **Add the game data** to `js/game-data.js`:
```javascript
const gameData = {
    // ... existing games ...
    
    newgame: {  // Use lowercase, no spaces for the key
        title: "My New Winter Game",
        description: "Brief description...",
        // ... rest of the game data
    }
};
```

2. **Add the game card** to `index.html`:
```html
<div class="game-card" data-game="newgame">
    <div class="game-image">🆕</div>
    <div class="game-content">
        <h3 class="game-title">My New Winter Game</h3>
        <p>Brief description that matches your game data.</p>
        <button class="game-details-btn">View Details</button>
    </div>
</div>
```

The `data-game` attribute must match the key in your game data object.

## 📁 File Organization

```
your-project/
├── index.html                 # Main page
├── css/
│   └── styles.css            # All styles including modal styles
├── js/
│   ├── game-data.js          # 🎯 Edit this to update game info
│   └── main.js               # Main functionality
├── images/                   # Put your game screenshots here
│   ├── game1-screenshot1.jpg
│   ├── game1-screenshot2.jpg
│   └── ...
└── README.md                 # This file
```

## 🎨 Customization Tips

### Change Modal Colors
Edit the CSS variables in `css/styles.css`:
```css
/* Change the blue theme to your preferred colors */
.modal-title {
    color: #your-color; /* Change title color */
}

.platform-link {
    background: linear-gradient(135deg, #color1, #color2);
}
```

### Adjust Modal Size
```css
.game-modal {
    max-width: 1200px; /* Make wider */
    max-height: 95vh;  /* Make taller */
}
```

### Add Custom Platform
1. Add to your game data:
```javascript
platforms: [
    {
        name: 'Your Platform',
        url: 'https://yourplatform.com/game',
        class: 'custom',
        icon: '🎮'
    }
]
```

2. Add CSS styling:
```css
.platform-link.custom {
    background: linear-gradient(135deg, #yourcolor1, #yourcolor2);
}
```

## 🔧 Advanced Features

### Auto-Playing Carousel
Uncomment this line in `main.js` to enable auto-advance:
```javascript
// Auto-advance carousel every 5 seconds
// startCarouselAutoplay(5000);
```

### Image Lazy Loading
Images automatically use lazy loading for better performance:
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Responsive Breakpoints
The modals automatically adapt to different screen sizes:
- **Desktop**: Full-width modal with side-by-side layout
- **Tablet**: Adjusted spacing and button sizes
- **Mobile**: Single-column layout with optimized touch targets

## 🚀 Going Live

### Before Launch:
1. **Replace all placeholder content** in `game-data.js`
2. **Add real screenshots** to the `images/` folder
3. **Update YouTube URLs** with your actual trailers
4. **Verify all platform links** are correct
5. **Test on mobile devices**

### Performance Tips:
1. **Optimize images**: Use WebP format when possible
2. **Compress videos**: YouTube handles this automatically
3. **Use CDN**: Consider using a CDN for faster image loading
4. **Enable gzip**: Configure your web server to compress files

## 🎮 Example Game Data Structure

Here's a complete example for reference:

```javascript
mygame: {
    title: "Winter Quest Adventures",
    description: "An epic journey through frozen landscapes filled with mystery and magic.",
    longDescription: "Embark on the adventure of a lifetime in Winter Quest Adventures. Play as Elena, a brave explorer who discovers an ancient artifact that controls the seasons. Navigate through 50+ levels of challenging puzzles, battle ice monsters, and uncover the secrets of the Eternal Winter. With stunning hand-drawn artwork and an original orchestral soundtrack, this game delivers an unforgettable gaming experience.",
    
    features: [
        "50+ handcrafted levels with unique challenges",
        "Beautiful hand-drawn art style",
        "Original orchestral soundtrack",
        "Challenging puzzle mechanics",
        "Epic boss battles",
        "Multiple difficulty settings",
        "Achievement system with 30+ unlockables"
    ],
    
    specs: {
        "Release Date": "December 2025",
        "Platforms": "PC, Mac, Steam Deck",
        "Genre": "Adventure Puzzle",
        "Players": "Single Player",
        "Rating": "E10+ (Everyone 10+)",
        "Languages": "English, Spanish, French, German",
        "Playtime": "15-20 Hours",
        "System Requirements": "Windows 10+, 4GB RAM, DirectX 11"
    },
    
    media: [
        {
            type: 'youtube',
            url: 'https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID',
            title: 'Winter Quest Adventures - Launch Trailer'
        },
        {
            type: 'image',
            url: 'images/winter-quest-screenshot1.jpg',
            title: 'Exploring the Frozen Forest'
        },
        {
            type: 'image',
            url: 'images/winter-quest-screenshot2.jpg',
            title: 'Puzzle Mechanics in Action'
        },
        {
            type: 'image',
            url: 'images/winter-quest-screenshot3.jpg',
            title: 'Epic Boss Battle Scene'
        }
    ],
    
    platforms: [
        {
            name: 'Steam',
            url: 'https://store.steampowered.com/app/1234567/winter_quest_adventures',
            class: 'steam',
            icon: '🎮'
        },
        {
            name: 'Itch.io',
            url: 'https://snowberrygames.itch.io/winter-quest-adventures',
            class: 'itch',
            icon: '🎯'
        }
    ]
}
```

## 🆘 Troubleshooting

### Modal Not Opening
- Check that `data-game` attribute matches the key in `gameData`
- Ensure `game-data.js` is loaded before `main.js`
- Check browser console for JavaScript errors

### YouTube Videos Not Loading
- Verify the URL uses the embed format: `/embed/VIDEO_ID`
- Check that the video allows embedding
- Ensure the video is public or unlisted (not private)

### Images Not Displaying
- Check file paths are correct
- Verify image files exist in the specified location
- Check file extensions match (jpg, png, webp)
- Ensure images are optimized for web (not too large)

### Platform Links Not Working
- Verify URLs are complete and correct
- Check that platform class names match CSS styles
- Ensure links open in new tabs with `target="_blank"`

---

## 🎉 Your Modal System is Ready!

You now have a professional game showcase system that's:
- ✅ **Fully responsive** for all devices
- ✅ **Easy to customize** with your own content
- ✅ **Performance optimized** with lazy loading
- ✅ **Accessible** with keyboard navigation
- ✅ **Professional looking** with winter theming

Just update the game data with your real information and you're ready to showcase your games! ❄️🎮