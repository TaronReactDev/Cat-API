import Main from "../../cats_redux/src/components/index";
import Routing from "./components/Routing";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/routing-example" element={<Routing/>}/>

        </Routes>

      </BrowserRouter>

  );
}

export default App;