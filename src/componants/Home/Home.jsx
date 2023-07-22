import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/images/slid1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import Footer from "../Footer/Footer";

function UncontrolledExample() {
  return (
    <>
      {" "}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
}

export default UncontrolledExample;
