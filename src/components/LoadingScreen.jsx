import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello world />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 text-2xl sm:text-3xl md:text-4xl font-mono font-bold leading-tight">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-full max-w-xs h-[2px] bg-white/20 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-loading-bar"></div>
      </div>
    </div>
  );
};
