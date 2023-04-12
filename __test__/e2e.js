import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

const likes = ".xr1yuqi > span:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)";

const username = "h2._a9zc > div:nth-child(1) > a:nth-child(1)";

const description = "._a9z5 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"

await page.goto('https://www.instagram.com/reel/CqwW0GgOwmV/?igshid=MDJmNzVkMjY=');

// Set screen size
await page.setViewport({width: 1080, height: 1024});

// Wait for username
const usernameSelect = await page.waitForSelector(username);
const likeSelect = await page.waitForSelector(likes);
const deSelect = await page.waitForSelector(description);

let ob = {
  username: await usernameSelect.evaluate(el => el.innerText),
  likes: await likeSelect.evaluate(el => el.innerText),
  description: await deSelect.evaluate(el => el.innerText)
};

// Print the full title
console.log('The title of this blog post is "%s".', ob);

await browser.close();