import { useEffect } from "react";

const ChatButton = () => {
  useEffect(() => {
    const loadProvideSupport = () => {
      function createScript(src) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
      }
      
      const timestamp = Date.now();
      createScript(`https://image.providesupport.com/js/0hlun7dw53d2x0ge244p58jzy4/safe-standard-sync.js?ps_h=KtCX&ps_t=${timestamp}`);
      createScript("https://image.providesupport.com/sjs/static.js");
    };

    if (document.readyState === "complete") {
      loadProvideSupport();
    } else {
      window.addEventListener("load", loadProvideSupport);
    }
    
    return () => {
      window.removeEventListener("load", loadProvideSupport);
    };
  }, []);

  return (
    <div>
      <noscript>
        <div style={{ display: "inline" }}>
          <a href="https://vm.providesupport.com/0hlun7dw53d2x0ge244p58jzy4">Live Chat</a>
        </div>
      </noscript>
    </div>
  );
};

export default ChatButton;
