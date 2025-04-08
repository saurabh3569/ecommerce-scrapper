const express = require("express");
const connectDB = require("./configs/db");
const schedule = require("node-schedule");
const { scrapeProducts } = require("./scraper");
const router = require("./routes/index.route");

const app = express();
app.use(express.json());

app.use("/api", router);

// Schedule scraping every hour
schedule.scheduleJob("0 * * * * *", () => {
  console.log("Starting scheduled scrape...");
  scrapeProducts();
});

const port = 5000;
app.listen(port, async () => {
  await connectDB();
  console.log("server started");
});
