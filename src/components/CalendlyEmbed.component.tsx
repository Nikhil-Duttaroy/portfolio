"use client";

import React, { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
  text: string | React.ReactNode;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyEmbed = ({ url, text }: CalendlyEmbedProps) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://assets.calendly.com/assets/external/widget.css"
    );
    link.setAttribute("rel", "stylesheet");
    head?.appendChild(link);

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "true");
    head?.appendChild(script);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({ url });
  };

  return (
    <a href="#" onClick={handleClick}>
      {text}
    </a>
  );
};

export default CalendlyEmbed;
