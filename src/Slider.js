import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Slide() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div style={{ background: "#282828", color: "white", height: "500px" }}>
        <div className="container">
          <div className="row">
            <Slider {...settings} style={{ padding: "200px 0px" }}>
              <div className="text-center">
                <h1>Evolved to defy boundaries</h1>
                <p>
                  The underlying design principles depart from traditional
                  perspectives, conveyed by the smartphone boundaries. The novel
                  rear camera design is inspired by the formation of mountain
                  ranges, merging into new forms imbued with confident solidity
                  and presence.
                </p>
              </div>
              <div className="text-center">
                <h1>Pure, timeless color</h1>
                <p>
                  We project our innermost feelings and attitudes to the world
                  and our environment through the universal language of color.
                  By evoking the rhythm of nature and refining its purity,
                  luxurious colors echo the burden-less product philosophy of
                  OnePlus.
                </p>
              </div>
              <div className="text-center">
                <h1>Understated perfection</h1>
                <p>
                  Mirrored ceramic and matte frosted glass create a seamless
                  visual flow. Embedded within the curved ceramic edge, the
                  Hasselblad logo converges light and shadow creating an
                  evocative statement without words.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
