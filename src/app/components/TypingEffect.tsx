import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <div
      className={`typewriter-container sec1 sec11 ${
        isTypingComplete ? "hide-caret" : ""
      }`}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   fontSize: "40px",
      // }}
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
