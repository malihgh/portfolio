import StyledThemeProvider from "core/provider/ThemeProvider";
import Router from "./Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              history.replaceState(null, "", `#${id}`);
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <StyledThemeProvider>
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      <Router />
    </StyledThemeProvider>
  );
}

export default App;
