# FastCtl AI Website

This repository contains the source code for the FastCtl AI website (https://fastctl.ai).

## Repository Structure

This repository uses a special structure for GitHub Pages deployment:

- **`dev` branch**: Contains the source code for the website (React, TypeScript, etc.)
- **`main` branch**: Contains only the built static site files (HTML, CSS, JS)

## Development Workflow

1. All development happens in the `dev` branch
2. When changes are pushed to the `dev` branch, a GitHub Actions workflow automatically:
   - Builds the static site
   - Deploys it to the `main` branch
3. GitHub Pages serves the contents of the `main` branch

## Local Development

```bash
# Clone the repository
git clone https://github.com/fastctlai/fastctlai.github.io.git
cd fastctlai.github.io

# Switch to the dev branch
git checkout dev

# Install dependencies
npm install

# Start the development server
npm run dev

# Build the static site
npm run build
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
