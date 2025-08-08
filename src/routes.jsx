import { Routes, Route, Router } from "react-router-dom";
import Home from "./paginas/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default AppRoutes;