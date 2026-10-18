DevLink — Dynamic Developer Resource Hub

DevLink is a developer resource directory that helps developers discover useful tools, libraries, APIs, icons, and AI tools in one place.

Features

* Resource Directory: Explore 12 developer resources across four categories.
* Live Search: Find resources by title, description, or tags.
* Category Filtering: Filter resources by UI Component Libraries, Backend / APIs, Icons & Assets, and AI Tools.
* Bookmarks: Save favorite resources and access them later. Bookmarks persist using localStorage.
* Saved Resources: View only your bookmarked resources.
* Shareable URLs: Search terms and selected categories sync with URL query parameters.
* Quick View Modal: View resource descriptions, pricing information, documentation links, installation commands, tags, and related tools.
* Toast Notifications: Get a brief notification when adding or removing a bookmark.
* Responsive Design: Use the resource directory across different screen sizes.

Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Browser localStorage

Getting Started

Prerequisites

Make sure Node.js and npm are installed.

Installation

Clone the repository and open the project directory:

git clone YOUR_GITHUB_REPOSITORY_URL
cd devlink
npm install

Replace YOUR_GITHUB_REPOSITORY_URL with your actual repository URL.

Run Locally

Start the development server:

npm run dev

Open http://localhost:3000 in your browser.

Production Build

To check the production build, run:

npm run build

Project Structure

devlink/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ResourceCard.tsx
│   └── QuickViewModal.tsx
├── data/
│   └── resources.ts
├── public/
├── types.ts
├── package.json
└── README.md

Project Scope

DevLink is a frontend-only project. It does not use a backend, external database, or authentication system. Resource data is stored in the project, while bookmarks are saved in the browser using localStorage.

Live Demo: https://devlink-ecru-nine.vercel.app/