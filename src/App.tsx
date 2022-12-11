import React from "react";
// import AllRoute from "./Components/routers/allRoutes";
import Data from './Components/new';
import { BrowserRouter, Routes, Route } from "react-router-dom"


// interface iProps {
//   imagee: string,
//   namee: string
// }


const App = () => {

  return (
    <div>

      <Data />

      {/* <AllRoute imagee={imagee} namee={namee}/> */}

      {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<Check imagee={imagee} namee={namee}/>} />
          </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
