import React, { useState, useEffect, useContext, createContext } from "react";
import Content from "../Content/Content";
import { themeProviders } from "../../Context/ThemeProvider";

export const themeProvider = createContext();

function Main() {

const {theme, handleChangeTheme} = useContext(themeProviders);

  // const [theme, setTheme] = useState('light')
  // const handleChangeTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark')
  //   } else {
  //     setTheme('light')
  //   }
  // }


  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return (
    <>
    {/* <themeProvider.Provider value={{theme, handleChangeTheme}}> */}
      <div className="d-flex py-lg-2 mt-2  " >
        <div className="col-lg-6 col-md-8 mx-auto">
          {/* <h1 className="fw-light">Album example</h1> */}
          <h1 className="fw-light">{currentTime}</h1>
          <p className={`lead ${theme}`}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="/#" className="btn btn-primary my-2">Main call to action</a>
            <a href="/#" className="btn btn-secondary my-2">Secondary action</a>
            <button className="btn btn-dark my-2" onClick={handleChangeTheme}>Change theme</button>
          </p>
        </div>
      </div>

      <Content />
  {/* </themeProvider.Provider> */}
    
    </>
  )
}

export default Main