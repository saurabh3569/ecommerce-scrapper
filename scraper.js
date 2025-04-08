const puppeteer = require("puppeteer");
const Product = require("./models/Product");

async function scrapeProducts() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Using Flipkart as an example
    await page.goto(
      "https://www.flipkart.com/search?q=laptop&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off",
      { waitUntil: "networkidle2" }
    );

    const products = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll(".DOjaWF"));
      return items
        .map((item) => {
          const name = item.querySelector(".KzDlHZ")?.textContent.trim() || "";
          const price =
            item.querySelector(".Nx9bqj")?.textContent.trim() || "0";
          const rating =
            item.querySelector(".XQDdHH")?.textContent.trim() || "0";
          const features = document.querySelectorAll(".G4BRas");
          const description = features[0]?.textContent.trim() || "";
          return { name, price: price, rating, description };
        })
        .filter((item) => item.name);
    });

    for (const product of products) {
      await Product.findOneAndUpdate({ name: product.name }, product, {
        upsert: true,
        new: true,
      });
    }

    console.log(`Scraped and stored ${products.length} products`);
    await browser.close();
  } catch (error) {
    console.error("Scraping error:", error);
  }
}

module.exports = { scrapeProducts };
