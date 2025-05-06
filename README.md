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



## 🛠 Tech Stack

| Layer         | Tools Used                                       |
|---------------|--------------------------------------------------|
| Frontend      | Next.js, HeroUI                                  |
| Auth          | Clerk                                            |
| Backend       | Node.js, Next.js (API routes)                    |
| Database      | Neon (PostgreSQL), Drizzle ORM                   |
| File Storage  | ImageKit CDN                                     |
| Deployment    | Vercel (Frontend), Neon (DB), ImageKit (Media)   |


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


