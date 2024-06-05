import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/Homepage";
import Page404 from "./Pages/Page404"
export default function App(){
  return (
     <div className="col-12 App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>} />
          <Route path="*" element={<Page404/>} />

        </Route>
      </Routes>
      </BrowserRouter>
     </div>   
  )
}