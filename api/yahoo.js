export default async function handler(req, res) {
  const { symbol } = req.query;
  const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
    symbol
  )}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
