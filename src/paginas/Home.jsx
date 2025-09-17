import Banner from "../components/Banner/Banner.jsx";
import Categories from "../components/Categories/Categories.jsx";
import NewCollection from "../components/NewCollection/NewCollection.jsx";
import Ofertas from "../components/Ofertas/Ofertas.jsx";
import Tendencias from "../components/Tendencias/Tendencias.jsx";

function Home () {
    return (
        <div>
            <Banner/>
            <Categories/>
            <NewCollection/>
            <Ofertas/>
            <Tendencias/>
        </div>
    );
}

export default Home