// Game data configuration
// This file contains all game information that can be easily updated

const gameData = {
    frostpeak: {
        title: "Frostpeak Chronicles",
        description: "Embark on an epic journey through the mystical Frostpeak Mountains, where ancient secrets lie buried beneath layers of pristine snow.",
        longDescription: "Set in a world where winter magic flows through crystalline peaks, Frostpeak Chronicles tells the story of Aria, a young ice-weaver who must master her powers to save her mountain village from an eternal blizzard. Navigate through treacherous ice caves, solve intricate frost puzzles, and uncover the truth behind the ancient curse that threatens to freeze the world forever. The game features a revolutionary ice-physics system that makes every puzzle unique, with solutions that emerge naturally from the magical properties of ice and snow.",
        features: [
            "Revolutionary ice-physics puzzle system with realistic snow mechanics",
            "Stunning hand-painted winter landscapes across 12 unique regions",
            "Epic 25+ hour single-player campaign with multiple story paths",
            "Dynamic weather system that affects gameplay and story progression",
            "Over 50 mystical creatures and ancient snow spirits to discover",
            "Original orchestral soundtrack recorded with the Winter Symphony Orchestra",
            "Multiple endings based on your choices and relationships with characters",
            "Accessibility features including colorblind support and difficulty options"
        ],
        specs: {
            "Release Date": "Winter 2025",
            "Platforms": "PC, Steam Deck, PlayStation 5, Xbox Series X/S",
            "Genre": "Adventure Puzzle RPG",
            "Players": "Single Player",
            "ESRB Rating": "E10+ (Everyone 10+) - Fantasy Violence, Mild Language",
            "Languages": "12 Fully Supported (Voice & Text)",
            "Controller": "Full Controller Support + Keyboard/Mouse",
            "Achievements": "50+ Steam Achievements & Console Trophies",
            "System Requirements": "DirectX 12, 8GB RAM, GTX 1060 or equivalent"
        },
        media: [
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Frostpeak Chronicles - Official Gameplay Trailer' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/64b5f6/ffffff?text=Frostpeak+Mountain+Vista+Screenshot', 
                title: 'The Majestic Frostpeak Mountains' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/90caf9/ffffff?text=Ice+Cave+Puzzle+Gameplay', 
                title: 'Intricate Ice Cave Puzzle Mechanics' 
            },
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Developer Commentary - Creating Winter Magic' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/bbdefb/ffffff?text=Character+Aria+Concept+Art', 
                title: 'Aria - The Ice Weaver Character Design' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/e3f2fd/333333?text=Snow+Spirits+Artwork', 
                title: 'Mystical Snow Spirits Concept Art' 
            }
        ],
        platforms: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/your-game-id', class: 'steam', icon: '🎮' },
            { name: 'Itch.io', url: 'https://snowberrygames.itch.io/frostpeak-chronicles', class: 'itch', icon: '🎯' }
        ]
    },
    
    blizzard: {
        title: "Blizzard Rush",
        description: "Experience the ultimate arctic action game where lightning-fast reflexes meet the fury of winter storms.",
        longDescription: "In Blizzard Rush, you play as Storm, an elite arctic racer equipped with cutting-edge winter gear designed for extreme conditions. Navigate through procedurally generated blizzards that create unique challenges with every run. Master the art of momentum, timing, and environmental awareness as you slide, jump, and dash through crystalline obstacle courses that reshape themselves based on real-time weather simulation. Compete against players worldwide or team up in local co-op mode to tackle the most challenging storms together.",
        features: [
            "Advanced procedural storm generation creates infinite replayability",
            "Buttery-smooth 120fps gameplay optimized for competitive play",
            "Global online leaderboards with seasonal tournaments",
            "Deep customization system with 100+ gear combinations",
            "60+ hand-crafted levels plus endless procedural challenges",
            "Multiple game modes: Time Attack, Survival, Storm Chase, and Co-op",
            "Spectacular real-time particle effects with thousands of snowflakes",
            "Adaptive difficulty system that learns your playstyle"
        ],
        specs: {
            "Release Date": "Spring 2025",
            "Platforms": "PC, Steam Deck, Nintendo Switch, PlayStation 5, Xbox Series X/S",
            "Genre": "Fast-Paced Action Arcade",
            "Players": "1-4 Players (Local Co-op + Online Leaderboards)",
            "ESRB Rating": "E (Everyone) - No Objectionable Content",
            "Languages": "8 Supported Languages",
            "Controller": "Controller Highly Recommended",
            "Online Features": "Leaderboards, Ghost Data, Community Challenges",
            "Performance": "4K/120fps on PC, 1440p/60fps on consoles"
        },
        media: [
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Blizzard Rush - High-Octane Action Trailer' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/42a5f5/ffffff?text=High+Speed+Action+Screenshot', 
                title: 'Lightning-Fast Arctic Racing Action' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/1976d2/ffffff?text=Storm+Effects+Showcase', 
                title: 'Dynamic Storm Weather Effects' 
            },
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Multiplayer Mayhem - 4-Player Co-op Gameplay' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/1565c0/ffffff?text=Character+Customization', 
                title: 'Extensive Gear Customization System' 
            }
        ],
        platforms: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/your-game-id', class: 'steam', icon: '🎮' },
            { name: 'Epic Games Store', url: 'https://store.epicgames.com/your-game', class: 'epic', icon: '⚡' },
            { name: 'Nintendo eShop', url: 'https://nintendo.com/your-game', class: 'nintendo', icon: '🎮' }
        ]
    },
    
    frozen: {
        title: "Frozen Realms",
        description: "Dive into magical winter wonderlands where mystery and adventure await at every frozen corner.",
        longDescription: "Journey through the Frozen Realms, a collection of five mystical winter kingdoms, each governed by different aspects of ice magic and seasonal wonder. As a Realm Walker, you possess the unique ability to traverse between these interconnected worlds, gathering powerful allies, learning ancient frost spells, and uncovering the cosmic threat that seeks to merge all realms into eternal winter. Experience a deep, narrative-driven RPG that combines classic storytelling with innovative seasonal mechanics, where your choices shape not only the story but the very climate of each realm you visit.",
        features: [
            "Five massive, unique winter realms with 40+ hours of exploration each",
            "Deep character progression with branching skill trees for each season",
            "Revolutionary seasonal magic system affects combat, exploration, and story",
            "Rich, branching storyline with 12 possible endings based on your choices",
            "Collect and bond with over 100 unique ice spirits as battle companions",
            "Comprehensive crafting system using materials from all five realms",
            "New Game+ mode with additional content, harder challenges, and secret areas",
            "Photo mode to capture the breathtaking beauty of winter landscapes"
        ],
        specs: {
            "Release Date": "Holiday 2025",
            "Platforms": "PC, Steam Deck, PlayStation 5, Xbox Series X/S",
            "Genre": "Fantasy Action RPG with Seasonal Mechanics",
            "Players": "Single Player Campaign + 2-Player Online Co-op",
            "ESRB Rating": "T (Teen) - Fantasy Violence, Suggestive Themes, Mild Language",
            "Languages": "15 Fully Supported (12 with Voice Acting)",
            "Estimated Playtime": "60-120 Hours (200+ Hours for Completionists)",
            "Save System": "Cloud Save + Multiple Character Slots",
            "Accessibility": "Full Subtitle Support, Colorblind Options, Remappable Controls"
        },
        media: [
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/e3f2fd/333333?text=Five+Realms+World+Map', 
                title: 'The Five Frozen Realms - World Overview' 
            },
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Frozen Realms - Epic Story Reveal Trailer' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/bbdefb/333333?text=Seasonal+Magic+System', 
                title: 'Seasonal Magic Combat System' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/90caf9/333333?text=Epic+Boss+Battle', 
                title: 'Epic Boss Battle in the Glacier Citadel' 
            },
            { 
                type: 'youtube', 
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
                title: 'Gameplay Deep Dive - Combat & Exploration' 
            },
            { 
                type: 'image', 
                url: 'https://via.placeholder.com/800x450/64b5f6/ffffff?text=Spirit+Companions', 
                title: 'Ice Spirit Companions & Bonding System' 
            }
        ],
        platforms: [
            { name: 'Steam', url: 'https://store.steampowered.com/app/your-game-id', class: 'steam', icon: '🎮' },
            { name: 'Itch.io', url: 'https://snowberrygames.itch.io/frozen-realms', class: 'itch', icon: '🎯' },
            { name: 'Epic Games Store', url: 'https://store.epicgames.com/your-game', class: 'epic', icon: '⚡' },
            { name: 'PlayStation Store', url: 'https://store.playstation.com/your-game', class: 'playstation', icon: '🎮' }
        ]
    }
};

// Platform icon mapping
const platformIcons = {
    steam: '🎮',
    itch: '🎯',
    epic: '⚡',
    playstation: '🎮',
    xbox: '🎮',
    nintendo: '🎮',
    gog: '🎮'
};

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gameData, platformIcons };
}