# Michael Gallegos — Portfolio

This is the source code for my engineering portfolio built with **Next.js**, showcasing my work across software development, robotics, embedded systems, AI integration, CAD design, and 3D printing.

## 📂 Project Structure

```
michael-g-portfolio-next/          # Main Next.js application
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx               # Home page
│   │   ├── resume/
│   │   ├── cover-letter/
│   │   └── globals.css            # Global styles
│   ├── components/                 # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   └── Footer.tsx
│   ├── sections/                   # Page sections
│   │   ├── Software.tsx
│   │   ├── Robotics.tsx
│   │   ├── Embedded.tsx
│   │   ├── Additive.tsx
│   │   ├── AI.tsx
│   │   ├── Systems.tsx
│   │   ├── Projects.tsx
│   │   ├── Roadmap.tsx
│   │   ├── Contact.tsx
│   │   └── About.tsx
│   └── theme/
│       ├── ThemeContext.tsx        # Dark/Light theme provider
│       └── colors.ts              # Color palette
├── public/                         # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd michael-g-portfolio-next
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Features

- **Dark/Light Theme Toggle** — Context-based theme switching with persistent storage
- **Smooth Animations** — Framer Motion for fade-in and slide-up effects
- **Responsive Design** — Mobile-optimized layout
- **TypeScript** — Type-safe components
- **Static Pages** — Resume and Cover Letter routes

## 🛠️ Technology Stack

- **Framework:** Next.js 16 with TypeScript
- **Styling:** CSS (with Tailwind CSS support)
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Build Tool:** Turbopack

## 📄 Pages

- **Home** (`/`) — Portfolio overview with all sections
- **Resume** (`/resume`) — Professional resume
- **Cover Letter** (`/cover-letter`) — Cover letter

## 🧹 Repository Cleanup

The old Vite/React project files have been removed. This directory now only contains:
- `michael-g-portfolio-next/` — The active Next.js application
- `.git/` — Version control
- `.gitignore` — Git configuration
- `README.md` — This file

To remove the lingering `node_modules/` folder on Windows, run:
```powershell
Remove-Item node_modules -Recurse -Force
```

Or use an external tool if permissions are restricted.

## 📧 Contact

Email: [your-email@example.com](mailto:your-email@example.com)  
Location: Colorado Springs, CO  
Portfolio: [This site](https://michael-gallegos.dev)
