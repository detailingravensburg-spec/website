# Car Detailing Website

A modern, professional website for car detailing services built with Next.js 15, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Git** - [Download here](https://git-scm.com/)

## Getting Started

### Step 1: Download the Project

1. Download the project ZIP file from v0
2. Extract the ZIP file to your desired location (e.g., `Desktop/car-detailing-website`)

### Step 2: Open in VS Code

1. Open VS Code
2. Click `File` → `Open Folder`
3. Navigate to and select your extracted project folder
4. Click `Select Folder`

### Step 3: Install Dependencies

1. Open the integrated terminal in VS Code:
   - Press `Ctrl + `` (backtick) on Windows/Linux
   - Press `Cmd + `` (backtick) on Mac
   - Or go to `Terminal` → `New Terminal`

2. Install the project dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Step 4: Run the Development Server

1. In the terminal, start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Wait for the server to start (you'll see output like "Ready - started server on 0.0.0.0:3000")

3. Open your web browser and navigate to:
   \`\`\`
   http://localhost:3000
   \`\`\`

Your car detailing website should now be running locally!

## Project Structure

\`\`\`
car-detailing-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── services.tsx      # Services showcase
│   ├── gallery.tsx       # Before/after gallery
│   ├── process.tsx       # Process steps
│   ├── testimonials.tsx  # Customer testimonials
│   └── contact.tsx       # Contact form
├── lib/                  # Utility functions
└── public/               # Static assets (images, icons)
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Updating Content

1. **Services**: Edit `components/services.tsx` to modify service offerings
2. **Contact Info**: Update contact details in `components/contact.tsx` and `components/header.tsx`
3. **Colors**: Modify the color scheme in `app/globals.css`
4. **Images**: Replace placeholder images in the `public/` folder

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file in that folder
3. The route will be automatically available at `/folder-name`

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   - Try running on a different port: `npm run dev -- -p 3001`
   - Or kill the process using port 3000

2. **Module not found errors**:
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **Styling issues**:
   - Make sure Tailwind CSS is properly configured in `app/globals.css`
   - Clear browser cache and refresh

### Getting Help

If you encounter any issues:
1. Check the terminal for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js version compatibility
4. Restart the development server

## Deployment

To deploy your website:

1. **Vercel** (Recommended):
   - Push code to GitHub
   - Connect repository to Vercel
   - Deploy automatically

2. **Build locally**:
   \`\`\`bash
   npm run build
   npm run start
   \`\`\`

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

**Need help?** Check the Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs)
