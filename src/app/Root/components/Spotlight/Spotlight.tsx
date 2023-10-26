import { useEffect, useState, useRef } from "react";
import { Spot } from "./styles";

const Spotlight = ({ toggleEl = "#on-switch" }) => {
  const [active, setActive] = useState(true);
  const spotlightElementRef = useRef(null);

  const handleMouseMove = (event: MouseEvent) => {
    setTimeout(() => {
      updateEl(event.clientX, event.clientY);
    }, 90);
  };

  const updateEl = (x: number, y: number) => {
    const innerRadius = 10;
    const outerRadius = 350;
    const outerColor = "#000000cc";

    if (spotlightElementRef.current) {
      const element = spotlightElementRef.current as HTMLDivElement;
      element.style.background = `radial-gradient(circle at ${x}px ${y}px, #00000000 ${innerRadius}px, ${outerColor} ${outerRadius}px)`;
    }
  };

  const switchOn = () => {
    setActive(true);
    document.addEventListener("mousemove", handleMouseMove);
  };

  const switchOff = () => {
    setActive(false);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const toggleLight = () => {
    if (active) {
      switchOff();
    } else {
      switchOn();
    }
  };

  useEffect(() => {
    switchOn();

    if (toggleEl) {
      document.querySelector(toggleEl)?.addEventListener("click", toggleLight);
    }

    return () => {
      switchOff();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleEl]);

  return (
    <Spot
      className="spotlight"
      ref={spotlightElementRef}
      style={{
        animation: active ? "enter 1s ease forwards" : "exit 1s ease forwards",
      }}
    ></Spot>
  );
};

export default Spotlight;
