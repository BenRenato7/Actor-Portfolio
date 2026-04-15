# Ben Renato - Actor Portfolio

Professional actor portfolio website featuring gallery, showreel, resume, and contact information.

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Website (Easiest)

1. **Go to**: https://vercel.com/signup
2. **Sign up** with GitHub (it's free)
3. **Click**: "Add New Project" 
4. **Import** this repository or upload the `/app/frontend` folder
5. **Configure**:
   - Framework Preset: `Create React App`
   - Root Directory: Leave as is (or select `frontend` if needed)
   - Build Command: `yarn build`
   - Output Directory: `build`
6. **Click**: "Deploy"

Your site will be live at: `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend folder
cd /app/frontend

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? benrenato (or your choice)
# - Directory? ./ 
# - Override settings? No

# Your site will be deployed!
```

## 📁 Project Structure

```
/app/frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Gallery.jsx
│   │   ├── Showreel.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── mock.js          # Edit this to update content
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── .env                      # Environment variables
```

## ✏️ Updating Content

To update your portfolio content, edit `/app/frontend/src/data/mock.js`:

- **Personal Info**: name, email, phone, location, bio
- **Headshots**: Add/remove photos
- **Resume**: Training, credits, skills
- **Social Media**: Update links
- **Showreel**: Change video URL

## 🎨 Design

- **Colors**: Dark slate with rose/burgundy accents
- **Fonts**: Oswald (headings) + Poppins (body)
- **Style**: Bold & dramatic actor portfolio

## 📧 Contact Form

Currently opens user's email client with pre-filled message. 
To enable database storage, backend deployment is needed (optional).

## 🔧 Local Development

```bash
cd /app/frontend
yarn install
yarn start
```

Site runs at: http://localhost:3000

## 📝 License

© 2025 Ben Renato. All rights reserved.
