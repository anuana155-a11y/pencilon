# Pencilon Portfolio - Digital Flagship

A premium, high-end digital portfolio for creatives and agencies.

## 🚀 Features
- **Sophisticated Design:** Custom "Warm Paper" palette and high-contrast typography.
- **Micro-Interactions:** Smooth motion using `motion/react`.
- **Responsive:** Optimized for ultra-wide, desktop, and mobile displays.
- **Zero-Config Contact:** Integrated `mailto:` enquiry system for instant delivery.

## 🛠️ Tech Stack
- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Deployment to Vercel

### Option 1: Vercel Dashboard (Easiest)
1. Push this project to a **GitHub** repository.
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite** and configure the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option 2: Vercel CLI
If you have the [Vercel CLI](https://vercel.com/download) installed:
```bash
npm install -g vercel
vercel
```

## 💻 Local Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure
- `src/components`: UI components (Marquee, Process, Services, Works)
- `src/App.tsx`: Main application assembly
- `src/index.css`: Global styles and Tailwind configuration
