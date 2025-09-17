import { Routes, Route, Router } from "react-router-dom";
import Home from "./paginas/Home";
import Ofertas from "./components/Ofertas/Ofertas";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default AppRoutes;