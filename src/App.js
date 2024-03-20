import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Playground from "./components/playground/Playground";
import menuBtn from "./assets/menu.svg"

const App = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleSidebar = () => {
    setMobileView(!mobileView);
  };

  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  // Viewport handle
  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    return () => {
      window.removeEventListener("resize", viewChange);
    };
  }, []);
  return (
    <>
      <div className="d-flex justify-content-start">
        <div>
          {!mobileView && <Sidebar handleSidebar={handleSidebar} />}
          {mobileView && (
            <>
              <img
              src={menuBtn}
              alt="menu"
                onClick={() => {
                  handleSidebar();
                }}/>
            </>
          )}
        </div>
        <div className="px-3" style={{ width: "88vw" }}>
          <Playground />
        </div>
      </div>
    </>
  );
};

export default App;
