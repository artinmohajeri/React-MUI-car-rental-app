import Navbar from "./navbar";
import About from "./about";
import SeeCars from "./seeCars";
import Footer from "./footer";
import Slider from "./slider"


function HomePage() {
    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <SeeCars />
            <Footer />
        </>
    );
}

export default HomePage;