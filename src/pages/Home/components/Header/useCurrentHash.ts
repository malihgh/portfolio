import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useCurrentHash() {
  const location = useLocation();

  const [fullPath, setFullPath] = useState(window.location.hash);

  useEffect(() => {
    const update = () => {
      const newPath = window.location.hash;

      if (newPath !== fullPath) {
        setFullPath(newPath);
      }
    };

    const observer = new MutationObserver(update);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const interval = setInterval(() => {
      update();
    }, 100); // Check every 100ms

    window.addEventListener("hashchange", update);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      window.removeEventListener("hashchange", update);
    };
  }, [location, fullPath]);

  return fullPath;
}

export default useCurrentHash;
