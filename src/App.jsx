import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./components/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movie/:id" element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
