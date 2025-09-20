# 🎮 Guess The Number - Squid Game Edition

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.0.3-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/PWA-Enabled-purple?style=for-the-badge" alt="PWA">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
</div>

<div align="center">
  <h3>🎯 Test your luck and intuition in this thrilling number guessing game inspired by Squid Game!</h3>
  <p>Built with modern web technologies for an immersive gaming experience</p>
</div>

---

## ✨ Features

### 🎨 **Immersive Experience**
- 🎭 **Squid Game Theme**: Authentic UI/UX design inspired by the hit Netflix series
- 🎵 **Background Music**: Atmospheric soundtrack that enhances gameplay
- 🌟 **Smooth Animations**: Built with Framer Motion for fluid transitions
- 📱 **Responsive Design**: Perfect experience on desktop, tablet, and mobile

### 🎮 **Game Features**
- 🎲 **Three Difficulty Levels**: 
  - Easy Peasy (3 attempts, 0-10 range)
  - Umm Medium (5 attempts, 0-50 range) 
  - Damn Hard (7 attempts, 0-120 range)
- 🧠 **Smart Algorithm**: Adaptive difficulty based on performance
- 🏆 **Scoring System**: Points based on attempts taken
- 💡 **Intelligent Hints**: Get directional feedback for your guesses

### 📱 **Progressive Web App (PWA)**
- 📲 **Installable**: Add to home screen on any device
- 🔄 **Offline Support**: Play without internet connection
- ⚡ **Fast Loading**: Optimized for performance
- 🔔 **Native App Feel**: Full-screen experience

### 🛠️ **Technical Excellence**
- ⚡ **Next.js 14**: Latest App Router with RSC
- 🎯 **TypeScript**: Full type safety
- 🎨 **Tailwind CSS**: Modern styling
- 🌐 **Static Export**: Fast deployment anywhere
- 🔊 **Audio Context**: Smart music management

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Xeven777/guess-the-num.git
   cd guess-the-num
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### 🏗️ Build for Production

```bash
# Build static export
npm run build

# Preview production build
npm start
```

---

## 🎯 How to Play

1. **Choose Your Difficulty**: Select from three challenging levels
2. **Enable Music** (Optional): Toggle background music for immersion
3. **Start Guessing**: Enter numbers within the given range
4. **Follow Hints**: Use "higher" or "lower" feedback
5. **Win or Lose**: Beat the game within your attempt limit!
6. **Track Your Score**: Points awarded based on efficiency

---

## 📱 PWA Installation

### Desktop (Chrome, Edge, Safari)
1. Visit the game URL
2. Look for the install icon in the address bar
3. Click "Install" and confirm

### Mobile (iOS/Android)
1. Open in Safari (iOS) or Chrome (Android)
2. Tap the share button
3. Select "Add to Home Screen"
4. Confirm installation

### Features After Installation
- 📲 App icon on home screen
- 🔄 Offline gameplay
- ⚡ Faster loading
- 📱 Native app experience

---

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: React Context API
- **Build**: Static Export
- **Deployment**: Vercel

### Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── game/[id]/            # Dynamic game routes
├── components/
│   ├── AudioProvider.tsx     # Audio context
│   ├── MusicBtn.tsx          # Music toggle
│   ├── Level.tsx             # Difficulty selector
│   ├── Logo.tsx              # Game logo
│   └── Footer.jsx            # Footer component
├── context/
│   └── AudioContext.ts       # Audio state management
public/
├── manifest.json             # PWA configuration
├── music sg.m4a              # Background music
├── squidgamebg.webp          # Background image
└── *.png, *.ico              # Icons and assets
```

---


## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Auto-deployment on push

### Other Platforms
```bash
# Build static files
npm run build




## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push and create a Pull Request**



## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---


## 🎉 Enjoy the Game!

<div align="center">
  <p>Have fun testing your guessing skills!</p>
  <p>⭐ Star this repo if you enjoyed the game!</p>
  
  <a href="#">🎮 Play Now</a> • 
  <a href="#">🐛 Report Bug</a> • 
  <a href="#">💡 Request Feature</a>
</div>

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/coderkeshav-yt">Keshav Singh </a></p>
</div>
