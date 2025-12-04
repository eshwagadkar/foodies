# 🍽️ Meals App — Full-Stack Next.js Application

A full-stack **Next.js (App Router)** application for browsing, sharing, and managing meals.  
This project demonstrates server components, dynamic metadata, server actions, image uploads, AWS S3 integration, Suspense streaming, and robust error handling.

---

## 🚀 Features

### 🔹 Core Functionality
- Browse meals with **dynamic routes** (`/meals/[slug]`)
- View individual meal details with loading & error states
- Share meals using a responsive form with image upload
- Custom UI components such as image picker and slideshow

### 🔹 Full-Stack & Server Features
- **SQLite database** for storing meals
- **Server Actions** for form submission & data handling
- **Cache revalidation** for fresh updated content
- Suspense & **streamed responses** for granular loading states
- Custom `notFound()` and `error.js` pages

### 🔹 Image Handling
- Custom image picker with live preview
- Images stored in **AWS S3** (not local filesystem)
- Next.js `<Image>` optimization even for unknown dimensions

### 🔹 Security & SEO
- Sanitize the input before meals creation (saving into db)
- Static + **dynamic metadata** generation
- Server-Side Input Validation for missing input data

---

## 🧩 Tech Stack

| Area | Technology |
|------|------------|
| Framework | Next.js 14 — App Router |
| UI | React Server/Client Components, CSS Modules |
| Database | SQLite |
| Storage | AWS S3 (image uploads) |
| Features | Server Actions, Suspense, Dynamic Routes |

---
