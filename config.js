// ============================================
// 💝 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Natalia",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine, Sweetheart? 🖤",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '🖤', '💗', '💓'],  // Heart emojis
        bears: ['🍫', '🐇']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me sweetie?",                                    // First interaction
            yesBtn: "Po",                                             // Text for "Yes" button
            noBtn: "Jo",                                               // Text for "No" button
            secretAnswer: "I don't "like" you, I LOVE you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me, Natalia?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine? 🌹", // The big question!
            yesBtn: "PO!",                                             // Text for "Yes" button
            noBtn: "Jo"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "DAMN You love me that much sweetheart?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "7 more million-minutes with you! 🚀💝",              // Shows when they go past 1000%
        normal: "7 more minutes please?"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift(me), a big warm hug and a huge kiss!(end of the year hopefully)",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#B2AC88",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#F4C2C2",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#c5e9fa",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#faf296"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "12s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "55px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.7s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.7         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dexui2zwu/video/upload/v1770852097/MOMENT_SONG_fxhzun.mp3", // Music streaming URL
        startText: "🔊Music",        // Button text to start music
        stopText: "🔈Music",         // Button text to stop music
        volume: 0.7                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
