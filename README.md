# Dynamic Blog Platform
A blog platform built with TypeScript, Next.js, Zustand, and Tailwind CSS. It includes a blog list,
search functionality, dark/light mode toggle

## DEMO: https://blog-app-gold-one.vercel.app/

## Features
- **Blog List**: Displays blog posts fetched from an external API
- **Search Bar**: Allows searching by title or body with debouncing
- **Theme Toggle**: Switch between dark and light modes
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Aria Labels**: Aria Labels for accessibility
- **Image Optimization**: Uses Next.js `Image` component for faster loading

## Setup and Running Locally
1. Clone the repo:

    ```bash
    git clone https://github.com/webmagedev/blog-app
   cd blog-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

   or

   ```bash
    yarn
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

   or
    ```bash
       next
    ```

4. Open the app at `http://localhost:3000`.

## API Integration
- Fetches blog posts from `jsonplaceholder.typicode.com` using `axios`
- Data is fetched client-side into Zustand for search functionality

## Limitations
- Can't be implemented with infinity scroll because of `jsonplaceholder.typicode.com` API search query limitations with search

## Tools Used
- **TypeScript** for static type checking and improved code quality
- **Next.js** for SSR
- **Zustand** for state management
- **Tailwind CSS** for styling
- **Axios** for API requests
- **use-debounce** for optimizing searchbar