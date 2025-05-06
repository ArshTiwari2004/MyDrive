<div align="center">

# 📁 MyDrive

A powerful, elegant, and user-focused file storage application built from scratch using **Next.js**, **Clerk**, **Neon**, **Drizzle**, and **ImageKit**.  
Inspired by cloud storage platforms, but designed to solve real-world pain points with a modern and developer-friendly stack.

![GitHub stars](https://img.shields.io/github/stars/ArshTiwari2004/MyDrive?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/ArshTiwari2004/MyDrive?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/ArshTiwari2004/MyDrive?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ArshTiwari2004/MyDrive?style=flat-square)

</div>

---

##  Features

- 🔐 **User authentication** with [Clerk](https://clerk.dev)
- 📤 **File uploads** and **CDN optimization** with [ImageKit](https://imagekit.io)
- ⭐ **File starring**,  **trashing**, and 🧹 **auto-deletion**
- ⚡ **Responsive UI** with [HeroUI](https://tailwindui.com/components)
- 🗂️ **Custom tagging and search** to keep your files organized
- 🧠 Smart backend logic for **cleanup, previews, and metadata handling**

---


## ✨ Why I am building MyDrive

While using popular cloud storage tools, I noticed two major gaps:

> While platforms like Google Drive and Dropbox are popular, they fail to address some critical UX and backend limitations.  
> MyDrive focuses on solving **real-world user pain points** with clear **technical innovations**.

---

### 1. 🧹 **No Real Control Over Deleted or Trashed Files**

**Problem:** Mainstream drives keep trashed files indefinitely unless manually deleted, leading to clutter and storage overuse.

**MyDrive Fix:**  
- Introduced **auto-deletion logic** (customizable N-day expiration).
- Optional **pre-deletion alerts** and cleanup notifications.

**Tech Stack:**  
- PostgreSQL + CRON jobs + Drizzle ORM  
- Scheduled cleanup using timestamps and server background tasks.

---

### 2. 🚀 **Slow or Unreliable File Previews**

**Problem:** Large file previews are delayed, unsupported, or limited in default drives.

**MyDrive Fix:**  
- **Instant previews and thumbnails** using ImageKit’s real-time transformation.
- Better UX on slow networks or mobile devices.

**Tech Stack:**  
- ImageKit CDN  
- Preview generation handled via dynamic query parameters.

---

### 3. 🔍 **Inflexible Search & Poor File Organization**

**Problem:** Limited control over how files are organized or searched in platforms like Drive.

**MyDrive Fix:**  
- Support for **custom file tags** (`work`, `notes`, `urgent`).
- **Advanced search filters** (by tags, type, starred status, dates).

**Tech Stack:**  
- PostgreSQL full-text search + Drizzle  
- Tag schema & file metadata indexing

---

## So what is Mydrive ?

MyDrive is a lightweight, modern file storage application designed to address key limitations found in mainstream cloud platforms. Built from scratch using technologies like Next.js, Clerk, Drizzle ORM, Neon (PostgreSQL), and ImageKit, it emphasizes backend functionality over flashy UI. MyDrive offers features such as secure user authentication, efficient file uploads, smart file organization with tags, instant file previews, and an intelligent trash system with auto-deletion logic. It’s built for users who want a clean, reliable, and transparent file management experience.

## 🛠 Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=nextjs,nodejs,postgres,vercel" height="30" />
  <img src="https://skillicons.dev/icons?i=js,ts" height="30" />
  <img src="https://skillicons.dev/icons?i=react" height="30" />
</p>

| Layer         | Tools Used                                       |
|---------------|--------------------------------------------------|
| **Frontend**      | [Next.js](https://nextjs.org/), [HeroUI](https://www.heroui.dev/)                          |
| **Auth**          | [Clerk](https://clerk.dev/)                                        |
| **Backend**       | Node.js, Next.js (API routes)                    |
| **Database**      | [Neon PostgreSQL](https://neon.tech/), [Drizzle ORM](https://orm.drizzle.team/)             |
| **File Storage**  | [ImageKit CDN](https://imagekit.io/)                                   |
| **Deployment**    | [Vercel](https://vercel.com/) (Frontend), Neon (DB), ImageKit (Media)   |


---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js 18+
- Clerk account
- Neon PostgreSQL database
- ImageKit account

---

### 📦 Installation

```bash
git clone https://github.com/ArshTiwari2004/MyDrive.git
cd MyDrive


# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

Create a .env.local file in the root directory:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Fallback URLs
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL=your_neon_database_url
```


Running the Application

```bash
# Development
npm run dev
# or
yarn dev
# or
pnpm dev
```

Building for Production

```bash
# Build the application
npm run build
# or
yarn build
# or
pnpm build

# Start the production server
npm start
# or
yarn start
# or
pnpm start
```


## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.







