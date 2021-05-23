import Navbar from '../components/navbar/Navbar';
import Img from '../components/img/Img';
import About from '../components/about/About';
import Plans from '../components/plans/Plans';
import Features from '../components/features/Features';
import Lines from '../components/lines/Lines';
import Contact from '../components/contact/Contact';
import Partners from '../components/partners/Partners';
import Startup from '../components/startup/Startup';
import Events from '../components/events/Events';
import Footer from '../components/footer/Footer';

function Home(props) {
  return (
    <>
      <Navbar />
      <Img />
      <About />
      <Features />
      <div
        style={{
          backgroundColor: ` #f7f7f7`,
          borderTopTeftRadius: `110px`,
          borderbottomRightRadius: `110px`,
        }}
      >
        <Plans />
        <Lines />
        <Partners />
        <Startup />
      </div>
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
