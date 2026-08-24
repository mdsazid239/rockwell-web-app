# 11:11 Business Park — Website (React + Node.js + MySQL)

Rockwell Developer ke "11:11 Business Park" brochure ke layout par based full-stack
website. Frontend React (Vite) + Tailwind CSS me hai, backend Node.js (Express) +
MySQL me hai. Contact Us popup form frontend se backend API ke through MySQL
database me save hota hai. Poora website mobile, tablet, laptop aur desktop —
sabhi devices ke liye responsive hai.

```
rockwell/
├── frontend/     → React + Vite + Tailwind website
└── backend/      → Node.js + Express API + MySQL
```

---

## Prerequisites (pehle ye install hone chahiye)

- **Node.js** v18 ya usse upar — [nodejs.org](https://nodejs.org)
- **MySQL Server** (v8 recommended) — local machine par running hona chahiye
- **VS Code** (ya koi bhi code editor)

Check karne ke liye terminal me:
```bash
node -v
npm -v
mysql --version
```

---

## Step 1 — Zip extract karke VS Code me open karo

Zip file extract karo, phir VS Code me `rockwell` folder ko open karo
(`File → Open Folder`). VS Code me do terminal khulenge — ek backend ke liye,
ek frontend ke liye.

---

## Step 2 — Backend setup (Node.js + MySQL)

Terminal 1 (backend ke liye):

```bash
cd backend
npm install
```

### 2a. `.env` file banao

`backend` folder me `.env.example` file ko copy karke `.env` naam se save karo,
aur apna MySQL password daalo:

```bash
cp .env.example .env      # Mac/Linux
copy .env.example .env    # Windows
```

`.env` file kholo aur `DB_PASSWORD` apne MySQL root password se replace karo:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=rockwell_1111
```

### 2b. Database aur table banao

Ye command database `rockwell_1111` aur `contacts` table apne aap bana degi:

```bash
npm run seed
```

Agar successful hua to ye message dikhega:
```
✔ Database "rockwell_1111" and table "contacts" are ready.
```

> Alternative: agar `npm run seed` kaam na kare, to `backend/db/schema.sql` file
> ko MySQL Workbench ya `mysql -u root -p < backend/db/schema.sql` se manually
> run kar sakte ho.

### 2c. Backend server start karo

```bash
npm run dev
```

Terminal me ye dikhna chahiye:
```
🚀 11:11 Business Park API running at http://localhost:5000
```

Backend ko test karne ke liye browser me kholo: `http://localhost:5000/api/health`

---

## Step 3 — Frontend setup (React + Tailwind)

Terminal 2 (frontend ke liye, naya terminal kholo — backend wala chalta rehne do):

```bash
cd frontend
npm install
```

### 3a. `.env` file banao

```bash
cp .env.example .env      # Mac/Linux
copy .env.example .env    # Windows
```

Default value already sahi hai (`VITE_API_URL=http://localhost:5000/api`) —
agar backend port change nahi kiya to isse touch karne ki zaroorat nahi.

### 3b. Frontend start karo

```bash
npm run dev
```

Terminal me ek local URL dikhega, generally:
```
http://localhost:5173
```

Ye link Ctrl+Click (ya Cmd+Click) karo, browser me website khul jayegi.

---

## Testing the Contact Us form

1. Website par kisi bhi page se "Contact Us" button (navbar, hero, footer, ya
   bottom-right floating button) par click karo — popup form khulega.
2. Name, email, phone bharke submit karo.
3. Data seedha MySQL ke `contacts` table me save ho jayega.
4. Verify karne ke liye browser me kholo: `http://localhost:5000/api/contact`
   (ye saari submissions JSON format me dikhayega), ya MySQL Workbench me query
   chalao:
   ```sql
   SELECT * FROM rockwell_1111.contacts;
   ```

---

## Production build (optional)

Frontend ka production-ready static build banane ke liye:
```bash
cd frontend
npm run build
```
Output `frontend/dist` folder me milega, jise kisi bhi static host (Netlify,
Vercel, Nginx, etc.) par deploy kar sakte ho. Backend ko Railway, Render, EC2,
ya kisi bhi Node hosting par deploy kar sakte ho — bas `.env` me production
MySQL credentials daal dena.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `Error: connect ECONNREFUSED` (backend) | MySQL server chal nahi raha — usse start karo |
| `Access denied for user 'root'` | `.env` me `DB_PASSWORD` galat hai — sahi password daalo |
| Contact form submit hone par error aata hai | Backend terminal (`npm run dev`) chal raha hai ya nahi check karo |
| Images nahi dikh rahi | `frontend/public/images` folder me saari images maujood hain, isse delete mat karna |
| CORS error browser console me | `backend/.env` me `CORS_ORIGIN=http://localhost:5173` set hai ya nahi check karo |

---

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** Node.js, Express, mysql2, express-rate-limit
- **Database:** MySQL 8
- **Design:** Navy (#0A1F3D) / Cream (#F5F3E8) / Gold (#C9A24B) — matched from
  the original Rockwell 11:11 brochure
