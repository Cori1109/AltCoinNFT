import React, { useEffect, useState } from "react";

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div variant="backtop" className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src="upArrow.png" />
        </div>
      )}
    </div>
  );
}
