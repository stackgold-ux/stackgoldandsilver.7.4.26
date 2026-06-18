# Vercel Deployment Guide for Stack Your Gold

To ensure a successful, one-click deployment of the 'Stack Your Gold' React application to Vercel, follow these steps:

## 1. Import Repository
- Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
- Click **Add New** > **Project**.
- Select the `stack-your-gold` repository (or the name of your repo).

## 2. Configure Project Settings
During the "Configure Project" step, ensure the following settings are applied:

- **Framework Preset**: Select `Vite`.
- **Root Directory**: Select `/code` (or leave as `.` if you are deploying from within the `code` folder itself).
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 3. Node.js Version
- Vercel automatically detects the `engines` field in `package.json`.
- The project is configured to use **Node.js 20.x or higher**. 
- Ensure that the **Node.js Version** in the Project Settings (under the "General" tab after creation) is set to **20.x**.

## 4. Environment Variables (Optional)
If you add any external API keys in the future (e.g., Slack Webhooks, Twilio), add them in the **Environment Variables** section of the Vercel project settings.

## 5. Deploy
- Click **Deploy**.
- Once finished, Vercel will provide a production URL (e.g., `stack-your-gold.vercel.app`).

---

### Technical Notes for Owners:
- **Tailwind CSS v4 & Vite v8**: This project uses the latest versions of Tailwind and Vite, which require Node 20+.
- **PWA/Static Support**: The application is built as a highly performant Single Page Application (SPA).
- **Client-Side Sync**: Orders and profiles are stored in `localStorage` for demo purposes and synced to Wix Headless via the background API client.
