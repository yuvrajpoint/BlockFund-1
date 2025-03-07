import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div
      className={`typewriter-container ${isTypingComplete ? "hide-caret" : ""}`}
    >
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Your Transparent Fundraising Platform.")
            .pauseFor(2500)
            .callFunction(() => setIsTypingComplete(true))
            .start();
        }}
      />
    </div>
  );
}
