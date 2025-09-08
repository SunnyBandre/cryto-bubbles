import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "../pages/CryptoBubbles.css";

import SparklineChart from "../components/SparklineChart";

const CryptoBubbles = ({
  height,
  width,
  data,
  setData,
  timeRange,
  setTimeRange,
  positionsRef,
}) => {
  const svgRef = useRef(null);
  const simulationRef = useRef(null);
  const repelPointRef = useRef(null);
  // const sparklineRef = useRef(null);
  // const graphRef = useRef(null);
  const animationFrameRef = useRef(null);

  // const [selectedCoin, setSelectedCoin] = useState(null);
  const [tooltipData, setTooltipData] = useState({
    visible: false,
    x: 0,
    y: 0,
    coinId: null,
  });
  // const [tooltipTimeRange, setTooltipTimeRange] = useState();
  const [isRepelling, setIsRepelling] = useState(false);
  // const [hoverIndex, setHoverIndex] = useState(null);
  const dimensionsRef = useRef({ width, height });

  console.log("data", data);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;

    // const width = svgRef.current.clientWidth;
    dimensionsRef.current = { width, height };

    const svg = d3.select(svgRef.current);

    const { width: currentWidth, height: currentHeight } =
      dimensionsRef.current;

    data.forEach((d) => {
      if (!d.x) d.x = Math.random() * width;
      if (!d.y) d.y = Math.random() * height;
      if (!d.vx) d.vx = (Math.random() - 0.5) * 2;
      if (!d.vy) d.vy = (Math.random() - 0.5) * 2;
    });

    function animate() {
      const damping = 1;
      const repulsionStrength = 0.05;

      data.forEach((d) => {
        const r = radiusScale(Math.abs(d.price_change || 0));

        // Update position
        d.x += d.vx;
        d.y += d.vy;

        // Apply mild damping (friction)
        d.vx *= damping;
        d.vy *= damping;

        // Bounce from walls — full direction-aware bounce
        if (d.x - r < 0) {
          d.x = r;
          d.vx = Math.abs(d.vx);
        } else if (d.x + r > width) {
          d.x = width - r;
          d.vx = -Math.abs(d.vx);
        }

        if (d.y - r < 0) {
          d.y = r;
          d.vy = Math.abs(d.vy);
        } else if (d.y + r > height) {
          d.y = height - r;
          d.vy = -Math.abs(d.vy);
        }
      });

      // Apply repulsion between overlapping bubbles
      for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          const a = data[i];
          const b = data[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy;

          const rA = radiusScale(Math.abs(a.price_change || 0));
          const rB = radiusScale(Math.abs(b.price_change || 0));
          const minDist = rA + rB + 2;

          const dist = Math.sqrt(distSq) || 0.1;
          const overlap = minDist - dist;

          if (overlap > 0) {
            const fx = (dx / dist) * overlap * repulsionStrength;
            const fy = (dy / dist) * overlap * repulsionStrength;

            a.vx -= fx;
            a.vy -= fy;
            b.vx += fx;
            b.vy += fy;
          }
        }
      }

      // Update DOM positions
      d3.select(svgRef.current)
        .selectAll(".node")
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    svg.selectAll("defs").remove();
    const defs = svg.append("defs");

    // Green gradient
    const greenGradient = defs
      .append("radialGradient")
      .attr("id", "greenGradient")
      .attr("cx", "50%")
      .attr("cy", "50%");

    greenGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgba(7,19,7,1)");

    greenGradient
      .append("stop")
      .attr("offset", "75%")
      .attr("stop-color", "rgba(29,62,29,0.4)");

    greenGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgba(9,234,6,1)");

    // Red gradient
    const redGradient = defs
      .append("radialGradient")
      .attr("id", "redGradient")
      .attr("cx", "50%")
      .attr("cy", "50%");

    redGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgba(19,9,7, 1)");

    redGradient
      .append("stop")
      .attr("offset", "75%")
      .attr("stop-color", "rgba(61,29,28, 0.4)");

    redGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgba(207,51,29,1)");

    data.forEach((d) => {
      const change = Math.abs(d.price_change || 0);
      const blur = Math.min(12, 2 + change * 0.5); // adjust glow intensity

      const glow = defs
        .append("filter")
        .attr("id", `glow-${d.id}`)
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%");

      glow
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", blur)
        .attr("result", "blur");

      glow.append("feMerge").html(`
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        `);
    });

    svg
      .attr("viewBox", [0, 0, currentWidth, currentHeight])
      .attr("preserveAspectRatio", "xMidYMid meet")
      .on("click", function (event) {
        const [clickX, clickY] = d3.pointer(event);

        // Remove any existing repel force first
        simulationRef.current.force("repel", null);

        // Add a new force that pushes nodes away from the clicked point
        simulationRef.current.force(
          "repel",
          d3.forceManyBody().strength(-300).distanceMin(50).distanceMax(100)
        );

        simulationRef.current.force(
          "x_repel",
          d3
            .forceX((d) => {
              const dx = d.x - clickX;
              return d.x + (dx || Math.random() - 0.5);
            })
            .strength(0.1)
        );

        simulationRef.current.force(
          "y_repel",
          d3
            .forceY((d) => {
              const dy = d.y - clickY;
              return d.y + (dy || Math.random() - 0.5);
            })
            .strength(0.1)
        );

        simulationRef.current.alpha(0.7).restart();

        // Optionally after 2 seconds, remove repel forces to let bubbles settle again
        setTimeout(() => {
          simulationRef.current.force("repel", null);
          simulationRef.current.force("x_repel", null);
          simulationRef.current.force("y_repel", null);
          simulationRef.current.alpha(0.3).restart();
        }, 2000);
      });

    let forceStrength;
    const collisionStrength = timeRange === "month" ? 1 : 0.7;
    let jiggle;
    if (timeRange === "month") {
      jiggle = () => 0;
    } else {
      jiggle = () => (Math.random() - 0.5) * 3;
    }

    if (timeRange === "1d") forceStrength = 0.015;
    else if (timeRange === "1w") forceStrength = 0.02;
    else if (timeRange === "month") forceStrength = 0.008;

    // 1. Determine base radius
    let baseMinRadius = 25;
    let baseMaxRadius = 100;

    if (currentWidth <= 600) {
      baseMinRadius = 10;
      baseMaxRadius = 40;
    } else if (currentWidth <= 1024) {
      baseMinRadius = 15;
      baseMaxRadius = 70;
    } else if (currentWidth <= 1536) {
      baseMinRadius = 25;
      baseMaxRadius = 90;
    } else if (currentWidth <= 1920) {
      baseMinRadius = 35;
      baseMaxRadius = 120;
    } else {
      baseMinRadius = 50;
      baseMaxRadius = 150;
    }

    // 2. Calculate price changes
    const priceChanges = data.map((d) => Math.abs(d.price_change || 0));

    // 3. Count high price change entries
    const highChangeCount = priceChanges.filter(
      (change) => change >= 10
    ).length;
    const highChangeRatio = highChangeCount / data.length;

    // 4. Adjust radius scale based on market activity
    let volatilityFactor;
    if (highChangeRatio < 0.3) {
      volatilityFactor = 1.3; // more volatility → bigger bubbles
    } else if (highChangeRatio < 0.6) {
      volatilityFactor = 1.0;
    } else {
      volatilityFactor = 0.7; // less volatility → smaller bubbles
    }

    const minRadius = baseMinRadius * volatilityFactor;
    const maxRadius = baseMaxRadius * volatilityFactor;

    // 5. Set domain based only on fixed range or timeRange
    let domainMax;
    if (timeRange === "1d") domainMax = 0.5;
    else if (timeRange === "1w") domainMax = 0.5;
    else if (timeRange === "month") domainMax = 70;
    else if (timeRange === "1y") domainMax = 120;
    else domainMax = 10;

    domainMax = Math.max(domainMax, 5);

    // 6. Create the scale
    const radiusScale = d3
      .scaleSqrt()
      .exponent(1.3)
      .domain([0, domainMax])
      .range([minRadius, maxRadius])
      .clamp(true);

    let collisionRadius = (d) => {
      const base = radiusScale(Math.abs(d.price_change || 0));
      const buffer = 20; // Add consistent spacing around all bubbles
      return base + buffer;
    };

    const node = svg
      .selectAll(".node")
      .data(data, (d) => d.id)
      .join(
        (enter) => {
          const g = enter.append("g").attr("class", "node");

          g.append("circle")
            .attr("r", (d) => {
              const base = radiusScale(Math.abs(d.price_change || 0));
              return Math.abs(d.price_change) <= 0.01
                ? base * 0.7
                : base * 1.15;
            })
            .style("fill", (d) =>
              d.price_change >= 0 ? "url(#greenGradient)" : "url(#redGradient)"
            )

            .style("stroke", (d) => {
              const change = Math.abs(d.price_change || 0);
              const isGainer = d.price_change >= 0;

              if (change < 1) return isGainer ? "#234F23" : "#4A1E1E";
              if (change < 5) return isGainer ? "#379E3C" : "#ad3333";
              if (change < 10) return isGainer ? "#4CA94E" : "#f00f0f";
              return isGainer ? "#00FF00" : "#FF0000";
            });

          g.append("image")
            .attr("xlink:href", (d) => d.image)
            .attr("width", (d) =>
              radiusScale(Math.abs(d.price_change / 2 || 0))
            )
            .attr("height", (d) =>
              radiusScale(Math.abs(d.price_change / 2 || 0))
            )
            .attr("class", (d) => {
              return Math.abs(d.price_change) <= 0.1
                ? "bubble-logo center"
                : "bubble-logo top";
            })
            // .attr("clip-path", "circle()")
            .attr("clip-path", (d) => {
              const isDualFlag = d.image.includes("USD"); // Or any identifier you use
              return isDualFlag ? "circle(100%)" : "circle()";
            })

            .style("pointer-events", "none");

          // SYMBOL — only if price_change > ±1%
          g.append("text")
            .attr("class", "symbol")
            .attr("text-anchor", "middle")
            .attr("dy", "1em")
            .style("fill", "#fff")
            .style("font-weight", "bold")
            .style(
              "font-size",
              (d) =>
                `${Math.min(
                  radiusScale(Math.abs(d.price_change || 0)) / 3.2,
                  15
                )}px`
            )
            .style("pointer-events", "none")
            .text((d) => d.symbol?.toUpperCase())
            .style("display", (d) =>
              Math.abs(d.price_change) <= 0.1 ? "none" : "block"
            );

          // ALWAYS SHOW % CHANGE
          g.append("text")
            .attr("class", "change")
            .attr("text-anchor", "middle")
            .attr("dy", "2.7em")
            .style("fill", "#fff")
            .style(
              "font-size",
              (d) =>
                `${Math.min(
                  radiusScale(Math.abs(d.price_change || 0)) / 4,
                  16
                )}px`
            )
            .style("pointer-events", "none")
            .text((d) => {
              const change = d.price_change;
              return change !== undefined && change !== null
                ? `${change.toFixed(1)}%`
                : "–";
            });

          return g;
        },
        (update) => {
          update
            .select("circle")
            .transition()
            .duration(500)
            .attr("r", (d) => {
              const base = radiusScale(Math.abs(d.price_change || 0));
              return Math.abs(d.price_change) <= 0.1 ? base * 0.7 : base * 1.15;
            })
            .style("stroke", (d) => {
              const change = Math.abs(d.price_change || 0);
              const isGainer = d.price_change >= 0;

              if (change < 1) return isGainer ? "#234F23" : "#4A1E1E";
              if (change < 5) return isGainer ? "#379E3C" : "#ad3333";
              if (change < 10) return isGainer ? "#4CA94E" : "#f00f0f";
              return isGainer ? "#00FF00" : "#FF0000";
            })
            .style("fill", (d) =>
              d.price_change >= 0 ? "url(#greenGradient)" : "url(#redGradient)"
            );

          update.select("text.symbol").text((d) => d.symbol?.toUpperCase());

          update.select("text.change").text((d) => {
            const change = d.price_change;
            return change !== undefined && change !== null
              ? `${change.toFixed(1)}%`
              : "–";
          });

          update
            .select("image")
            .transition()
            .duration(500)
            .attr("width", (d) =>
              radiusScale(Math.abs(d.price_change / 2 || 0))
            )
            .attr("height", (d) =>
              radiusScale(Math.abs(d.price_change / 2 || 0))
            );
          // .style("display", (d) =>
          //   Math.abs(d.price_change) <= 0.1 ? "none" : "block"
          // );
          // .attr("x", (d) => {
          //   const r = radiusScale(Math.abs(d.price_change || 0));
          //   return -r * 0.25;
          // })
          // .attr("y", (d) => {
          //   const r = radiusScale(Math.abs(d.price_change || 0));
          //   return -r * 0.25;
          // });

          return update;
        },
        (exit) => exit.remove()
      );
    animationFrameRef.current = requestAnimationFrame(animate);

    const drag = d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    node.on("click", async (event, d) => {
      event.stopPropagation();
      // setSelectedCoin(d);

      d3.select(event.currentTarget).select("circle").classed("blink", true);
      const svg = d3.select(svgRef.current);
      svg.selectAll("circle").classed("blink", false);
      d3.select(event.currentTarget).select("circle").classed("blink", true);

      const coin = data.find((c) => c.id === d.id);

      // if (!coin.sparkline_365d || !coin.sparkline_24h_hourly) {
      //   try {
      //     // 1. Get 1-year daily sparkline from CoinGecko
      //     const res = await axios.get(
      //       `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`,
      //       {
      //         params: {
      //           vs_currency: "usd",
      //           days: 365,
      //           interval: "daily",
      //         },
      //       }
      //     );
      //     const prices365d = res.data.prices;

      //     // 2. Get 24h hourly sparkline from CryptoCompare
      //     const symbol = coin.symbol.toUpperCase(); // CryptoCompare expects upper-case symbols
      //     const hourlyRes = await axios.get(
      //       `https://min-api.cryptocompare.com/data/v2/histohour`,
      //       {
      //         params: {
      //           fsym: symbol,
      //           tsym: "USD",
      //           limit: 24,
      //         },
      //         headers: {
      //           authorization: `f6585a6bc678cd650b41wb2eb2df6ba3eeedb0b4a582109a15775cde620e2f9e`,
      //         },
      //       }
      //     );

      //     const prices24h = hourlyRes.data.Data.Data.map((point) => [
      //       point.time * 1000,
      //       point.close,
      //     ]);

      //     setData((prev) =>
      //       prev.map((c) =>
      //         c.id === coin.id
      //           ? {
      //               ...c,
      //               sparkline_365d: prices365d,
      //               sparkline_24h_hourly: prices24h,
      //             }
      //           : c
      //       )
      //     );
      //   } catch (err) {
      //     console.warn(`Sparkline fetch failed for ${coin.id}:`, err.message);
      //   }
      // }

      setTooltipData({
        visible: true,
        x: event.pageX,
        y: event.pageY - 100,
        coinId: coin.id,
      });
    });

    if (!simulationRef.current) {
      simulationRef.current = d3
        .forceSimulation(data)
        // .force("x", d3.forceX(currentWidth / 2).strength(forceStrength))   //SUNNY
        // .force("y", d3.forceY(currentHeight / 2).strength(forceStrength))
        .force("collision", d3.forceCollide(collisionRadius).strength(0.7))
        .force("jiggle", d3.forceManyBody().strength(1))
        .force("charge", d3.forceManyBody().strength(-5))
        .velocityDecay(0.92)
        .alpha(0.4)
        .alphaMin(0.001)
        .alphaDecay(0.012)
        .on("tick", ticked);
    } else {
      simulationRef.current.nodes(data);
      // simulationRef.current.alphaTarget(0.02).restart();
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    function ticked() {
      node.each(function (d) {
        const r = radiusScale(Math.abs(d.price_change || 0));

        if (d.x - r <= 0 || d.x + r >= currentWidth) {
          d.vx *= -1;
          d.x = Math.max(r, Math.min(currentWidth - r, d.x));
        }
        if (d.y - r <= 0 || d.y + r >= currentHeight) {
          d.vy *= -1;
          d.y = Math.max(r, Math.min(currentHeight - r, d.y));
        }

        positionsRef.current.set(d.id, {
          x: d.x,
          y: d.y,
          vx: d.vx,
          vy: d.vy,
        });
      });

      if (isRepelling && repelPointRef.current) {
        const { x, y } = repelPointRef.current;
        const repelRadius = 200;
        const repelStrength = 8;

        data.forEach((d) => {
          const dx = d.x - x;
          const dy = d.y - y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          if (dist < repelRadius && dist > 0) {
            const force = repelStrength * (1 - dist / repelRadius);
            d.vx += (dx / dist) * force;
            d.vy += (dy / dist) * force;
          }
        });
      }

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    }
  }, [data, dimensionsRef, timeRange]);

  useEffect(() => {
    console.log("Size cahnged", dimensionsRef);
  }, [dimensionsRef]);

  useEffect(() => {
    const handleClickOutside = () => {
      setTooltipData({ ...tooltipData, visible: false });
      // Remove blinking effect from all bubbles
      d3.select(svgRef.current).selectAll("circle").classed("blink", false);
    };
    if (tooltipData.visible)
      window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [tooltipData.visible]);

  useEffect(() => {
    dimensionsRef.current = { width, height };

    const { width: currentWidth, height: currentHeight } =
      dimensionsRef.current;

    const handleResize = () => {
      if (!svgRef.current) return;
      // const width = svgRef.current.clientWidth;
      d3.select(svgRef.current)
        .attr("viewBox", [0, 0, currentWidth, currentHeight])
        .attr("preserveAspectRatio", "xMidYMid meet"); //rohit make change

      // Restart simulation with new dimensions
      if (simulationRef.current) {
        simulationRef.current
          .force("x", d3.forceX(currentWidth / 2).strength(0.02))
          .force("y", d3.forceY(currentHeight / 2).strength(0.02))
          .alphaTarget(0.3)
          .restart();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dimensionsRef]);

  return (
    <div className="bg-[#030B20] relative">
      <svg ref={svgRef} className="bubbles-canvas w-full" />
      {/* <div className="controls">
        <div className="time-range">
          {["1d", "1w", "month"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? "active" : ""}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div> */}

      {tooltipData.visible &&
        tooltipData.coinId &&
        (() => {
          const currentCoin = data.find((c) => c.id === tooltipData.coinId);
          if (!currentCoin) return null;
          // const fullSparkline = currentCoin.sparkline_365d || [];
          // let slicedSparkline = [];

          // if (tooltipTimeRange === "1y") slicedSparkline = fullSparkline;
          // else if (tooltipTimeRange === "month")
          //   slicedSparkline = fullSparkline.slice(-30);
          // else if (tooltipTimeRange === "1w")
          //   slicedSparkline = fullSparkline.slice(-14);
          // else if (tooltipTimeRange === "1d")
          //   slicedSparkline = currentCoin.sparkline_24h_hourly || [];

          // const timestamp = slicedSparkline[hoverIndex]?.[0];
          // const date = new Date(timestamp);
          // console.log("timestamp", timestamp);
          // console.log("date", date);

          // const formatted =
          //   tooltipTimeRange === "1d"
          //     ? date.toLocaleTimeString([], {
          //         hour: "2-digit",
          //         minute: "2-digit",
          //         hour12: true,
          //         timeZone: "Asia/Kolkata",
          //       })
          //     : date.toLocaleDateString(undefined, {
          //         day: "numeric",
          //         month: "short",
          //         year: "numeric",
          //       });
          const sparklineData = currentCoin.timestamps
            .map((t, i) => ({
              x: t * 1000, // convert seconds → milliseconds
              y: currentCoin.closes[i],
            }))
            .filter((point) => point.y !== null && !isNaN(point.y));
          console.log(currentCoin.timestamps);
          console.log("sparklineValues", sparklineData);

          return (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute z-50 bg-[#1a1c1f] text-white shadow-2xl rounded-2xl p-6 max-w-lg w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all fade-slide-in"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="relative flex items-center justify-between gap-3">
                  <div className="relative w-12 h-12">
                    <img
                      src={currentCoin.image}
                      alt={currentCoin.image}
                      className="w-12 h-12  absolute top-0 left-0"
                    />
                  </div>
                  <div className="text-lg font-bold flex">
                    {currentCoin.fullName}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTooltipData({ ...tooltipData, visible: false });
                    d3.select(svgRef.current)
                      .selectAll("circle")
                      .classed("blink", false);
                  }}
                  className="text-gray-400 hover:text-red-500 text-xl cursor-pointer"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-400">Price</p>
                  <p className="font-semibold">
                    ${currentCoin.price.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Volume</p>
                  <p className="font-semibold">
                    ${currentCoin.volume.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-sm mb-3">
                <p className="text-gray-400">Change</p>
                <p
                  className={`font-semibold ${
                    currentCoin.price_change >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {typeof currentCoin.price_change === "number"
                    ? `${currentCoin.price_change.toFixed(2)}%`
                    : "–"}
                </p>
              </div>
              <SparklineChart
                data={sparklineData}
                color={currentCoin.price_change >= 0 ? "#00FF00" : "#FF4444"}
              />
              <div className="flex gap-5 text-sm">
                <p>
                  Day Low :{" "}
                  <span className="text-red-400">${currentCoin.dayLow}</span>{" "}
                </p>
                <p>
                  Day High :{" "}
                  <span className="text-green-400">${currentCoin.dayHigh}</span>{" "}
                </p>
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default CryptoBubbles;
