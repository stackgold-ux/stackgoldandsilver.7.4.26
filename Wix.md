# Wix Headless Deployment & Workflow Guide

This guide details how to manage the **Wix Headless** backend integration for **Stack Your Gold**.

## 1. Prerequisites
- A [Wix Studio](https://www.wix.com/studio) or Wix account.
- The Wix CLI installed on your local machine:
  ```bash
  npm install -g @wix/cli
  ```

## 2. Authentication & Login
Before running any commands, authenticate with your Wix account:
```bash
wix login
```
This will open a browser window for secure authentication.

## 3. Project Initialization
If you are connecting this frontend to a new Wix project:
```bash
wix init
```
Follow the prompts to select your existing Wix site or create a new one to act as your Headless backend.

## 4. API & Key Management
The application interacts with Wix via the credentials located in `src/utils/wixClient.js`. 

### Required Credentials:
- **App ID (Client ID)**: Found in your Wix Dev Center dashboard under "OAuth".
- **API Token**: Generated in the "API Keys" section of your Wix site dashboard.

### Workflow:
1. Generate an API key in the Wix Dashboard.
2. Grant the key permissions for **Wix Stores** (Read/Write) and **Contacts** (Read/Write).
3. Update the `WIX_CONFIG` object in `src/utils/wixClient.js` with your new keys.

## 5. Synchronization Workflow
The frontend is equipped with a **Wix Sync Dashboard** located in the Merchant Portal (`/merchant`).

### Automated Sync:
- **Orders**: Every successful checkout automatically attempts to push order data to Wix Headless.
- **Profiles**: New "Stack Squad" signups are queued for contact synchronization.

### Manual Controls:
- Use the **Merchant Command Center** to:
  - `Fetch Wix Store Orders`: Pulls live data from Wix to verify parity.
  - `Fetch Wix Catalog`: Updates local product metadata from the Wix backend.
  - `Push Local Orders`: Manually sync any orders that were placed while offline.

## 6. Local Development
To run the Wix integration in development mode:
```bash
npm run dev
```
The `wixClient.js` includes built-in mock fallbacks. If your API keys are invalid or missing, the dashboard will still function using high-fidelity mock data, allowing for UI/UX testing without backend dependency.
