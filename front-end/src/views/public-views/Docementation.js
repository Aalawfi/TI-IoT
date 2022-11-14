import React from "react";


function Documentation() {

  React.useEffect(() => {
    window.location.replace('https://aalawfi.github.io/TI-FI-docs/')
  }, [])

    return (
      <>
          <h1> Redirecting to documentation page... </h1>
      </>
    );
  }
  
  export default Documentation;