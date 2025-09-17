import Banner from "../components/Banner/Banner.jsx";
import Ofertas from "../components/Ofertas/Ofertas.jsx";
import Tendencias from "../components/Tendencias/Tendencias.jsx";

function Home () {
    return (
        <div>
            <Banner/>
            <Ofertas/>
            <Tendencias/>
        </div>
    );
}

export default Home