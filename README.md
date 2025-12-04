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
-   **Slugify-based URL sanitization**

``` js
meal.slug = slugify(meal.title, { lower: true })
```

-   **XSS protection for user input**

``` js
meal.instructions = xss(meal.instructions)
```

-   **Safe image handling & normalized filenames**

``` js
const extension = meal.image.name.split('.').pop()
const fileName = `${meal.slug}.${extension}`
```

-   Static + dynamic metadata generation\
-   Server-side validation

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

## 🛠️ Installation

``` bash
git clone <repo-url>
cd project-folder
pnpm install
pnpm run dev
```

---

## 🗄️ Database Setup

The database (meals.db) file is **not pushed**.\
Create your own: Below command will generate meals.db 

``` bash
node init.db.js 
```

---

## 🔧 Environment Variables

    NEXT_PUBLIC_IMAGE_DOMAIN="your-bucket-name"
    AWS_ACCESS_KEY_ID="create-your-own"
    AWS_SECRET_ACCESS_KEY="create-your-own"

---