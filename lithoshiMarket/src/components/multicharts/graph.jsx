import { useEffect } from "react";

const TradingViewWidget = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: "COINBASE:BTCUSD",
            width: 350,
            height: 250,
            locale: "en",
            dateRange: "12M",
            colorTheme: "dark",
            isTransparent: true,
            autosize: false,
            largeChartUrl: "",
            chartOnly: true,
            noTimeScale: true,
        });
        document.getElementById("tradingview-widget-container__widget").appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div id="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TradingViewWidget;
