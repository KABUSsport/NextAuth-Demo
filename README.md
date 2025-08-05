# NextAuth Demo

This is a full-stack authentication demo built with Next.js and NextAuth.js. It demonstrates how to implement email/password and GitHub OAuth login flows with Prisma and MongoDB as the database.

---

## Demo

Check out the live demo here: [https://authjs.netlify.app/](https://authjs.netlify.app/)

![Project Screenshot](https://s34.picofile.com/file/8486287876/Untitled.png)

---

## Features

- Email and password authentication  
- GitHub OAuth login  
- User data stored securely in MongoDB  
- Prisma ORM for database access and migrations  
- NextAuth.js for handling authentication flows  
- Next.js 15 with App Router and TypeScript  
- Tailwind CSS for styling  
- Session management and protected routes  
- Simple and clean UI for login and registration  

---

## Tech Stack

- ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white) **Next.js 15** — React framework with App Router  
- ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-333?style=flat&logo=nextauth&logoColor=white) **NextAuth.js** — Authentication library for Next.js  
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) **Prisma ORM** — Type-safe database client  
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB** — NoSQL database  
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** — Utility-first CSS framework  
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) **TypeScript** — Static typing for JavaScript  
- ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white) **Netlify** — Deployment platform  

---

## Notes

- Make sure to update OAuth redirect URLs in your GitHub app settings to match `NEXTAUTH_URL` + `/api/auth/callback/github`  
- This project focuses on authentication logic, so the UI is kept simple and minimal  
- User sessions are handled securely using NextAuth.js  
- Prisma client must be generated on build (important for deployment)  

---


## Contact

Created by [Joodi](https://www.linkedin.com/in/joodi)
