# Quote Generator Web App

This is **Assignment 1** for the Nexium AI-First Web Development Internship. Code is contained in the `internship/assignment-1/` folder.

---

## 📋 Assignment Requirements

- **Form**: ShadCN UI form to enter a topic.
- **Quotes**: Displays 3 motivational quotes from a local JSON file.
- **Deployment**: Deployed to Vercel.

---

## 🚀 Live Demo

[See the live app on Vercel](https://nexium-hamza-assign1.vercel.app/)

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Language**: TypeScript
- **Data**: Local `quotes.json`
- **Hosting**: Vercel

---

## 📂 Project Structure

```
internship/assignment-1/
├── public/
├── src/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   ├── QuoteSearchForm.tsx
│   │   ├── QuoteList.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── quotes.json
│   └── styles/
├── .env.example
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.ts
```

---

## 📥 Installation & Running Locally

1. **Clone the repo**:

   ```bash
   git clone https://github.com/Hamza-Zahoor157/Nexium_Hamza_Zahoor_Assign1.git
   cd Nexium_Hamza_Zahoor_Assign1/internship/assignment-1
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   pnpm dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deploy

To build the production version:

```bash
pnpm build
```

Vercel will handle deployment automatically on each push to `main`.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

