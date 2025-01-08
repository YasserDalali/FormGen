import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import FormPage from "./HOC/Form";


function App() {


  return (
    <main>
      <div className="flex h-screen">
            <div className="bg-gray-200 p-5 flex flex-col gap-5">
              
              <Link to='/'>formulaire</Link> 
              <Link to='/about'>about</Link>  
              <Link to='/article'>contact</Link> 
              <Link to='/blog'>blog</Link> 


            </div>
            <Routes>
                <Route path='/' element={
                  <FormPage />
                }></Route>
                <Route path='/about' element={<div>About</div>}></Route>
                <Route path='/article' element={<div>Article</div>}></Route>
                <Route path='/blog' element={<div>Blog</div>}></Route>

            </Routes>
      </div>

    </main>
  );
}

export default App;

