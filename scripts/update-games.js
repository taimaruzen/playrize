import fs from "fs";

const urls = [
  "https://rss.gamemonetize.com/rssfeed.php?format=json&category=All&type=mobile&popularity=newest&company=All&amount=All",
  "https://rss.gamemonetize.com/rssfeed.php?format=json&category=All&type=mobile&popularity=mostplayed&company=All&amount=All",
  "https://rss.gamemonetize.com/rssfeed.php?format=json&category=All&type=mobile&popularity=bestgames&company=All&amount=All",
  "https://rss.gamemonetize.com/rssfeed.php?format=json&category=All&type=mobile&popularity=branding&company=All&amount=All",
];

let allGames = [];

for (const url of urls) {
  const response = await fetch(url);
  const games = await response.json();

  allGames.push(...games);
}
fs.writeFileSync(
  "./public/games.json",
  JSON.stringify(allGames, null, 2)
);

console.log("ゲーム一覧を保存しました！");