import Cards from '../components/Cards.jsx';
import Navbar from '../components/Navbar.jsx';
import Login from "./Login";

const HomePages = () => {
    return(
        <>
            <Navbar />
            <Login/>
            <Cards />
        </>

    )
}
export default HomePages;