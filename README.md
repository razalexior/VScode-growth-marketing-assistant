# Growth Marketing Assistant 🧠📈

> A simple SaaS starter to help startups get a complete marketing growth plan by entering just their website URL. Built using Next.js, mock data, and PDF generation.

## 🔥 Features

- URL input field
- Auto-generated marketing plan with:
  - Business summary
  - Recommended marketing channels
  - Budget allocation
  - Suggested influencers
- Shareable PDF download

## 🧱 Tech Stack
- **Frontend:** React + Next.js
- **Backend:** API Routes (Node.js)
- **PDF:** PDFKit + get-stream
- **Optional:** Supabase for logging inputs

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/growth-marketing-assistant.git
cd growth-marketing-assistant
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables
Create a `.env.local` file:
```
OPENAI_API_KEY=your-key-here
SUPABASE_URL=optional
SUPABASE_ANON_KEY=optional
```

### 4. Run the dev server
```bash
npm run dev
```
Then go to `http://localhost:3000`

## 🚀 Deploying

### On Vercel:
1. Push the code to GitHub
2. Import your repo on [vercel.com](https://vercel.com/)
3. Add environment variables via the dashboard
4. Click **Deploy**

## 📥 Future Add-ons
- Real influencer scraping from TikTok/IG/YouTube
- AI-generated summary using GPT-4
- Budget optimization engine
- API logging to Supabase
- Add Stripe for monetization