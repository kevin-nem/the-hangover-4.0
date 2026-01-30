# The Hangover 4.0

Bachelor party website — built with Next.js and deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect to Vercel

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "Initial commit — The Hangover 4.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-hangover-4.0.git
git push -u origin main
```

Create a new repository named **the-hangover-4.0** on [GitHub](https://github.com/new) first, then run the commands above (replace `YOUR_USERNAME` with your GitHub username).

### 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub).
2. Click **Add New…** → **Project**.
3. Import the **the-hangover-4.0** repository.
4. Leave the defaults (Vercel will detect Next.js).
5. Click **Deploy**.

Your site will be live at `https://the-hangover-4.0.vercel.app` (or a custom domain you add in the Vercel project settings).

### 3. Optional: deploy from the CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to link this folder to a new or existing Vercel project named **the-hangover-4.0**.
