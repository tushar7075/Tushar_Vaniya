import About from "./sections/about/about";
import Contact from "./sections/contact/Contact";
// import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navbar/NavBar";
import Project from "./sections/projects/Project";
import Technologies from "./sections/technologies/Technologies";

const app = () => {
  return (
    <main>
        {/* <NavBar/> */}
        <Header/>
        <NavBar/>
        <About/>
        <Technologies/>
        <Project/>
        <Contact/>
        <Footer/>
        {/* <FloatingNav/> */}
    </main>
  )
}

export default app