"use client";

import { useEffect, useState } from "react";

export default function FundraisingBanner() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="sec1">
      <div className={`sec11 ${showText ? "typing" : ""}`}>
        Your Transparent Fundraising Platform.
      </div>
    </div>
  );
}
