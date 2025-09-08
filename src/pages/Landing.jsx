import { useEffect, useLayoutEffect, useRef, useState } from "react";

import CryptoBubbles from "../pages/CryptoBubbles";
import axios from "axios";

import BubbleLoader from "../components/animations/BubbleLoader";

function Landing() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const [timeRange, setTimeRange] = useState("7d"); //24h 1w
  const [data, setData] = useState([]);
  // const [apiSource, setApiSource] = useState("public");
  const positionsRef = useRef(new Map());

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function calculatePercentageDifference(oldPrice, newPrice) {
    if (oldPrice === 0) {
      throw new Error("Old price cannot be zero.");
    }
    const difference = newPrice - oldPrice;
    const percentageDifference = (difference / oldPrice) * 100;
    return percentageDifference;
  }

  // function cleanName(name) {
  //   if (!name) return undefined;
  //   return name
  //     .replace(/,|\.\s*com/gi, "") // Remove "," and ".com" or ". com"
  //     .trim(); // Clean up extra spaces
  // }
  function cleanName(name) {
    if (!name) return undefined;
    let cleaned = name.replace(/,|\.\s*com/gi, "").trim();
    const words = cleaned.split(" ");
    if (words[0]?.toLowerCase() === "the") {
      return words[1] || cleaned;
    }
    return words[0];
  }

  // useEffect(() => {
  //   const fetchMarketData = async () => {
  //     try {
  //       // Use the public URL or the signed URL here
  //       const url =
  //         "https://fastone-market-data-storage.s3.eu-north-1.amazonaws.com/market-data.json";
  //       const response = await axios.get(url);
  //       // setData(response.data);
  //       console.log(response.data);

  //       const result = response.data.map((symbol) => {
  //         const cached = positionsRef.current.get(symbol);

  //         const pricechanged = calculatePercentageDifference(
  //           symbol.meta.previousClose,
  //           symbol.price
  //         );

  //         const symbolName =
  //           cleanName(symbol.meta.longName)?.split(" ")[0] ||
  //           cleanName(symbol.meta.shortName)?.split(" ")[0] ||
  //           symbol.symbol;

  //         return {
  //           id: symbol.id,
  //           symbol: symbolName,
  //           name: symbol.name,
  //           price: symbol.price,
  //           // image: `./images/symbols/${symbolName}.png`, // e.g., BTC-USD => btc-usd.png
  //           image: `./images/symbols/${symbolName.replace(/\//g, "")}.png`,
  //           // image: `./images/symbols/NASDAQ.png`, // e.g., BTC-USD => btc-usd.png
  //           // market_cap: symbol.market_cap,
  //           // market_cap_rank: symbol.market_cap_rank,
  //           price_change: pricechanged,
  //           // price_change_24h: symbol.price_change_percentage_24h_in_currency,
  //           // price_change_7d: symbol.price_change_percentage_7d_in_currency,
  //           // price_change_30d: symbol.price_change_percentage_30d_in_currency,
  //           // price_change_1y: symbol.price_change_percentage_1y_in_currency,
  //           volume: symbol.meta.regularMarketVolume,
  //           // sparkline: symbol.sparkline_in_7d?.price,
  //           // url: `https://www.coingecko.com/en/coins/${symbol.id}`,
  //           // image: symbol.image,
  //           x: cached?.x ?? Math.random() * window.innerWidth,
  //           y: cached?.y ?? Math.random() * window.innerHeight,
  //           vx: cached?.vx ?? 0,
  //           vy: cached?.vy ?? 0,
  //           fx: null,
  //           fy: null,
  //           // Preserve existing sparkline_365d if available
  //           // sparkline_365d: existingCoin?.sparkline_365d,
  //           // sparkline_24h_hourly: existingCoin?.sparkline_24h_hourly,
  //         };
  //       });

  //       setData(result);
  //       // console.log(data);
  //       console.log(result);

  //       // return {
  //       //             id: symbol.id,
  //       //             symbol: coin.symbol,
  //       //             name: coin.name,
  //       //             price: coin.current_price,
  //       //             market_cap: coin.market_cap,
  //       //             market_cap_rank: coin.market_cap_rank,
  //       //             price_change:
  //       //               coin[`price_change_percentage_${timeRange}_in_currency`],
  //       //             price_change_24h: coin.price_change_percentage_24h_in_currency,
  //       //             price_change_7d: coin.price_change_percentage_7d_in_currency,
  //       //             price_change_30d: coin.price_change_percentage_30d_in_currency,
  //       //             price_change_1y: coin.price_change_percentage_1y_in_currency,
  //       //             volume: coin.total_volume,
  //       //             sparkline: coin.sparkline_in_7d?.price,
  //       //             url: `https://www.coingecko.com/en/coins/${coin.id}`,
  //       //             image: coin.image,
  //       //             x: cached?.x ?? Math.random() * window.innerWidth,
  //       //             y: cached?.y ?? Math.random() * window.innerHeight,
  //       //             vx: cached?.vx ?? 0,
  //       //             vy: cached?.vy ?? 0,
  //       //             fx: null,
  //       //             fy: null,
  //       //             // Preserve existing sparkline_365d if available
  //       //             sparkline_365d: existingCoin?.sparkline_365d,
  //       //             sparkline_24h_hourly: existingCoin?.sparkline_24h_hourly,
  //       //           };
  //     } catch (error) {
  //       console.error("Error fetching market data:", error);
  //     } finally {
  //       setLoading(false); // Hide loader
  //     }
  //   };

  //   fetchMarketData();
  //   const interval = setInterval(fetchMarketData, 100000); // Fetch every minute
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const results = await Promise.all(
  //         symbols.map(async (symbol) => {
  //           try {
  //             const res = await axios.get(
  //               `http://localhost:5000/api/market-data`
  //             );
  //             // const response = await axios.get("http://localhost:5000/api/market-data");

  //             const result = res.data.chart?.result?.[0]?.meta;
  //             console.log(res.data);
  //             const price = result?.regularMarketPrice;
  //             const changePercent = result?.regularMarketChangePercent;

  //             const cached = positionsRef.current.get(symbol);

  //             return {
  //               id: symbol,
  //               symbol,
  //               name: symbol,
  //               price: parseFloat(price),
  //               price_change: parseFloat(changePercent),
  //               image: null, // Add image if needed like in forex case
  //               url: `https://finance.yahoo.com/quote/${symbol}`,
  //               x: cached?.x ?? Math.random() * window.innerWidth,
  //               y: cached?.y ?? Math.random() * window.innerHeight,
  //               vx: cached?.vx ?? 0,
  //               vy: cached?.vy ?? 0,
  //               fx: null,
  //               fy: null,
  //             };
  //           } catch (err) {
  //             console.error(`Error fetching data for ${symbol}:`, err);
  //             return null;
  //           }
  //         })
  //       );

  //       // Filter out any null entries caused by failed requests
  //       const validData = results.filter((item) => item !== null);
  //       setData(validData);
  //     } catch (error) {
  //       console.error("Error fetching market data:", error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 60000);
  //   return () => clearInterval(interval);
  // }, [timeRange]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://fcsapi.com/api-v3/forex/latest?symbol=${symbols}`, //&period=${timeRange}
  //         {
  //           params: {
  //             access_key: "PW97M1pUEFTcjM0CrC2VyZI",
  //             period: timeRange,
  //             // symbols: "EUR/USD,USD/JPY", // Add desired currency pairs
  //           },
  //         }
  //       );

  //       console.log("API response:", response.data);

  //       const forexData = response.data.response.map((item) => {
  //         const [base, quote] = item.s.split("/"); // Correctly split the pair
  //         const cached = positionsRef.current.get(item.s);

  //         return {
  //           id: item.s,
  //           symbol: item.s,
  //           name: item.name || item.s,
  //           price: parseFloat(item.c),
  //           price_change: parseFloat(item.cp),
  //           image: {
  //             base: `https://flagcdn.com/224x168/${base
  //               .slice(0, 2)
  //               .toLowerCase()}.png`,
  //             quote: `https://flagcdn.com/224x168/${quote
  //               .slice(0, 2)
  //               .toLowerCase()}.png`,
  //           },
  //           url: `https://www.example.com/forex/${item.s}`,
  //           x: cached?.x ?? Math.random() * window.innerWidth,
  //           y: cached?.y ?? Math.random() * window.innerHeight,
  //           vx: cached?.vx ?? 0,
  //           vy: cached?.vy ?? 0,
  //           fx: null,
  //           fy: null,
  //         };
  //       });

  //       setData(forexData);
  //     } catch (error) {
  //       console.error("Error fetching forex data:", error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 60000);
  //   return () => clearInterval(interval);
  // }, [timeRange]);

  // Use both resize observer and window resize

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // const response = await axios.get(
    //     //   // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=24h,7d,30d`
    //     //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=24h,7d,30d&x_cg_demo_api_key=CG-7AbQRHEkb37BAAFt4qDVSE68`
    //     // );
    //     let response;

    //     // First attempt: Free public API (no API key required)
    //     try {
    //       response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets",
    //         {
    //           params: {
    //             vs_currency: "usd",
    //             order: "market_cap_desc",
    //             per_page: 100,
    //             price_change_percentage: "24h,7d,30d,1y",
    //             sparkline: true,
    //           },
    //         }
    //       );
    //     } catch (primaryError) {
    //       console.warn(
    //         "Public API failed. Trying demo API...",
    //         primaryError.message
    //       );

    //       // Fallback: demo API with demo key
    //       response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets",
    //         {
    //           params: {
    //             vs_currency: "usd",
    //             order: "market_cap_desc",
    //             per_page: 100,
    //             price_change_percentage: "24h,7d,30d,1y",
    //             x_cg_demo_api_key: "CG-7AbQRHEkb37BAAFt4qDVSE68",
    //             sparkline: true,
    //           },
    //         }
    //       );
    //     }
    //     const nodes = response.data.map((coin) => {
    //       const cached = positionsRef.current.get(coin.id);
    //       return {
    //         id: coin.id,
    //         symbol: coin.symbol,
    //         name: coin.name,
    //         price: coin.current_price,
    //         market_cap: coin.market_cap,
    //         market_cap_rank: coin.market_cap_rank,
    //         price_change:
    //           coin[`price_change_percentage_${timeRange}_in_currency`],
    //         price_change_24h: coin.price_change_percentage_24h_in_currency,
    //         price_change_7d: coin.price_change_percentage_7d_in_currency,
    //         price_change_30d: coin.price_change_percentage_30d_in_currency,
    //         price_change_1y: coin.price_change_percentage_1y_in_currency,
    //         volume: coin.total_volume,
    //         sparkline: coin.sparkline_in_7d?.price,
    //         url: `https://www.coingecko.com/en/coins/${coin.id}`,
    //         image: coin.image,
    //         x: cached?.x ?? Math.random() * window.innerWidth,
    //         y: cached?.y ?? Math.random() * window.innerHeight,
    //         vx: cached?.vx ?? 0,
    //         vy: cached?.vy ?? 0,
    //         fx: null,
    //         fy: null,
    //       };
    //     });

    //     setData(nodes);

    //     nodes.forEach((coin) => {
    //       positionsRef.current.set(coin.id, {
    //         x: coin.x,
    //         y: coin.y,
    //         vx: coin.vx,
    //         vy: coin.vy,
    //       });
    //     });
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const fetchData = async () => {
      try {
        let response;

        // First attempt: Free public API (no API key required)
        try {
          response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                price_change_percentage: "24h,7d,30d,1y",
                sparkline: true,
              },
            }
          );
          console.log("Public API");
        } catch (primaryError) {
          console.warn(
            "Public API failed. Trying demo API...",
            primaryError.message
          );

          // Fallback: demo API with demo key
          response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                price_change_percentage: "24h,7d,30d,1y",
                x_cg_demo_api_key: "CG-7AbQRHEkb37BAAFt4qDVSE68",
                sparkline: true,
              },
            }
          );
          console.log("Demo API");
        }

        console.log(response);

        setData((prevData = []) => {
          const prevDataMap = new Map(prevData.map((coin) => [coin.id, coin]));

          const nodes = response.data.map((coin) => {
            const cached = positionsRef.current.get(coin.id);
            const existingCoin = prevDataMap.get(coin.id);

            // return {
            //           id: symbol.id,
            //           symbol: symbolName,
            //           name: symbol.name,
            //           fullName: symbol.meta.longName || symbol.meta.shortName,
            //           price: symbol.price,
            //           image: `./images/symbols/${symbolName.replace(/\//g, "")}.png`,
            //           price_change: calculatePercentageDifference(
            //             symbol.meta.previousClose,
            //             symbol.price
            //           ),
            //           volume: symbol.meta.regularMarketVolume,
            //           timestamps,
            //           closes,
            //           dayLow: symbol.meta.regularMarketDayLow,
            //           dayHigh: symbol.meta.regularMarketDayHigh,
            //           x: existing?.x ?? Math.random() * window.innerWidth,
            //           y: existing?.y ?? Math.random() * window.innerHeight,
            //           vx: existing?.vx ?? 0,
            //           vy: existing?.vy ?? 0,
            //           fx: null,
            //           fy: null,
            //         };

            //             {
            //     "id": "bitcoin",
            //     "symbol": "btc",
            //     "name": "Bitcoin",
            //     "price": 111809,
            //     "market_cap": 2226651219589,
            //     "market_cap_rank": 1,
            //     "price_change_24h": 0.48109454018430897,
            //     "price_change_7d": 2.1218109097925564,
            //     "price_change_30d": -4.87007480511995,
            //     "price_change_1y": 104.79863355718446,
            //     "volume": 28262825243,
            //     "url": "https://www.coingecko.com/en/coins/bitcoin",
            //     "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            //     "x": 515.9964168408989,
            //     "y": 410.7767150724992,
            //     "vx": 0.004077620978245778,
            //     "vy": -0.0023854061771790545,
            //     "fx": null,
            //     "fy": null,
            //     "index": 0
            // }

            return {
              id: coin.id,
              symbol: coin.symbol,
              name: coin.name,
              fullName: coin.name,
              price: coin.current_price,
              market_cap: coin.market_cap,
              market_cap_rank: coin.market_cap_rank,
              price_change:
                coin[`price_change_percentage_${timeRange}_in_currency`],
              price_change_24h: coin.price_change_percentage_24h_in_currency,
              price_change_7d: coin.price_change_percentage_7d_in_currency,
              price_change_30d: coin.price_change_percentage_30d_in_currency,
              price_change_1y: coin.price_change_percentage_1y_in_currency,
              volume: coin.total_volume,
              sparkline: coin.sparkline_in_7d?.price,
              url: `https://www.coingecko.com/en/coins/${coin.id}`,
              image: coin.image,
              x: cached?.x ?? Math.random() * window.innerWidth,
              y: cached?.y ?? Math.random() * window.innerHeight,
              vx: cached?.vx ?? 0,
              vy: cached?.vy ?? 0,
              fx: null,
              fy: null,
              timestamps: [],
              closes: [],
              dayLow: 0,
              dayHigh: 0,
              // Preserve existing sparkline_365d if available
              sparkline_365d: existingCoin?.sparkline_365d,
            };
          });

          // Update positionsRef with new positions
          nodes.forEach((coin) => {
            positionsRef.current.set(coin.id, {
              x: coin.x,
              y: coin.y,
              vx: coin.vx,
              vy: coin.vy,
            });
          });

          return nodes;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [timeRange]);

  // useEffect(() => {
  //   const fetchMarketData = async () => {
  //     try {
  //       const url =
  //         "https://fastone-market-data-storage.s3.eu-north-1.amazonaws.com/market-data.json";
  //       const response = await axios.get(url);
  //       const newData = response.data;
  //       console.log("response", response);

  //       // Create a Map of current data by id for quick lookup
  //       const currentPositionsMap = new Map();
  //       if (positionsRef.current) {
  //         positionsRef.current.forEach((value, key) => {
  //           currentPositionsMap.set(key, value);
  //         });
  //       }

  //       const updatedData = newData.map((symbol) => {
  //         // Clean up name for image

  //         const symbolName =
  //           cleanName(symbol.meta.longName)?.split(" ")[0] ||
  //           cleanName(symbol.meta.shortName)?.split(" ")[0] ||
  //           symbol.symbol;

  //         // Find existing positions, if any
  //         const existing = currentPositionsMap.get(symbol.id);

  //         const timestamps = symbol.all?.chart?.result?.[0]?.timestamp || [];
  //         const closes =
  //           symbol.all?.chart?.result?.[0]?.indicators?.quote?.[0]?.close || [];

  //         return {
  //           id: symbol.id,
  //           symbol: symbolName,
  //           name: symbol.name,
  //           fullName: symbol.meta.longName || symbol.meta.shortName,
  //           price: symbol.price,
  //           image: `./images/symbols/${symbolName.replace(/\//g, "")}.png`,
  //           price_change: calculatePercentageDifference(
  //             symbol.meta.previousClose,
  //             symbol.price
  //           ),
  //           volume: symbol.meta.regularMarketVolume,
  //           timestamps,
  //           closes,
  //           dayLow: symbol.meta.regularMarketDayLow,
  //           dayHigh: symbol.meta.regularMarketDayHigh,
  //           x: existing?.x ?? Math.random() * window.innerWidth,
  //           y: existing?.y ?? Math.random() * window.innerHeight,
  //           vx: existing?.vx ?? 0,
  //           vy: existing?.vy ?? 0,
  //           fx: null,
  //           fy: null,
  //         };
  //       });

  //       console.log("updatedData", updatedData);

  //       // Update data
  //       setData(updatedData);

  //       // Update positionsRef for future reference
  //       const updatedPositionsMap = new Map();
  //       updatedData.forEach((item) => {
  //         updatedPositionsMap.set(item.id, {
  //           x: item.x,
  //           y: item.y,
  //           vx: item.vx,
  //           vy: item.vy,
  //         });
  //       });
  //       positionsRef.current = updatedPositionsMap;

  //       console.log("Updated data:", response);
  //     } catch (error) {
  //       console.error("Error fetching market data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMarketData();
  //   const interval = setInterval(fetchMarketData, 100000);
  //   return () => clearInterval(interval);
  // }, []);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Initial measurement
    updateDimensions();

    // Set up listeners
    window.addEventListener("resize", updateDimensions);
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="scrollbar-hidden">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4575FF" />
            <stop offset="100%" stopColor="#92AEFF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-h-screen bg-[#0A0F2C] overflow-hidden">
        <div className="relative" style={{ height: `calc(95vh - ${10}px)` }}>
          <CryptoBubbles
            key={`${windowSize.width}-${windowSize.height}-${headerHeight}`} // Force re-render on dimension changes
            height={windowSize.height - 50}
            width={windowSize.width}
            data={data}
            setData={setData}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            positionsRef={positionsRef}
          />
          {loading && <BubbleLoader />}
        </div>
      </div>
    </div>
  );
}

export default Landing;
