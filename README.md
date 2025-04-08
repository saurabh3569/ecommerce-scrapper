# 🏍️ Node.js eCommerce Scraper

This project is a web scraper built with **Node.js**, **Express**, and **Puppeteer**, designed to scrape laptop listings from Flipkart and store/update the data in a MongoDB database.

## 🚀 Features

- Scrapes product name, price, rating, and description from Flipkart.
- Stores or updates product data in MongoDB using Mongoose.
- RESTful API to interact with product data.
- Scraping scheduled every 1 hours using `node-schedule`.

---

## 💠 Tech Stack

- **Node.js**
- **Express.js**
- **Puppeteer**
- **MongoDB + Mongoose**
- **node-schedule**

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/nodejs-ecommerce-scraper.git
cd nodejs-ecommerce-scraper
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment**

Create a `.env` file in the root directory and add your MongoDB URI:

```
MONGODB_URI=mongodb://localhost:27017/scraperDB
```

4. **Run the server**

```bash
node index.js
```

---

## ⏰ Scheduled Scraping

The scraper is scheduled to run every **15 seconds** using `node-schedule`. You can customize this cron expression in `index.js`:

```js
schedule.scheduleJob("*/15 * * * * *", scrapeProducts);
```

---

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api/products`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | `/`      | Add a new product |
| GET    | `/`      | List all products |
| GET    | `/:id`   | Get a product     |
| PUT    | `/:id`   | Update a product  |
| DELETE | `/:id`   | Delete a product  |

---

## 📁 Project Structure

```
.
├── configs/
│   └── db.js             # MongoDB connection setup
├── controllers/
│   └── product.controller.js
├── models/
│   └── Product.js        # Mongoose schema
├── routes/
│   ├── index.route.js
│   └── product.route.js
├── scraper.js            # Puppeteer scraping logic
├── index.js              # Main server entry
└── README.md
```

---

## 🧪 Example Product Schema

```json
{
  "name": "HP Victus Gaming Ryzen 5",
  "price": "₹55,999",
  "rating": "4.3",
  "description": "16 GB RAM | 512 GB SSD | NVIDIA GeForce RTX 3050"
}
```
