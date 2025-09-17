import Banner from "../components/Banner/Banner.jsx";
import Categories from "../components/Categories/Categories.jsx";
import NewCollection from "../components/NewCollection/NewCollection.jsx";

function Home () {
    return (
        <div>
            <Banner/>
            <Categories/>
            <NewCollection/>
        </div>
    );
}

export default Home