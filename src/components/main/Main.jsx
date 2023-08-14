import React, { useState, useEffect } from "react";

function Main() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useState (()=> {
    return setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
  })
    return (
        <div className="row py-lg-5 mt-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          {/* <h1 className="fw-light">Album example</h1> */}
          <h1 className="fw-light">{currentTime}</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="/#" className="btn btn-primary my-2">Main call to action</a>
            <a href="/#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    )
}

export default Main