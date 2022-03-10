import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/oneplus-logo.png";
import img1 from "./images/m1.png";
import img2 from "./images/m2.png";
import img3 from "./images/m3.png";
import img4 from "./images/m4.png";
import img5 from "./images/m5.png";
import img6 from "./images/m6.png";
import img7 from "./images/m7.png";

import tv1 from "./images/tv1.png";
import tv2 from "./images/tv2.png";
import tv3 from "./images/tv3.png";

import bd1 from "./images/bd1.png";
import bd2 from "./images/bd2.png";
import bd3 from "./images/bd3.png";
import bd4 from "./images/bd4.png";
import bd5 from "./images/bd5.png";

import w1 from "./images/w1.png";
import w2 from "./images/w2.png";
import w3 from "./images/w3.png";
import w4 from "./images/w4.png";

import c1 from "./images/c1.png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";

import o1 from "./images/o1.png";
import o2 from "./images/o2.png";

import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";

import i1 from "./images/2.png";
import i2 from "./images/3.png";
import i3 from "./images/4.png";
import i4 from "./images/5.png";

import right_img1 from "./images/2.jpg";
import right_img2 from "./images/3.jpg";

import banner1 from "./images/1.jpg";

import { BiUserCircle } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Slide from "./Slider";
import Footer from "./Footer";
export default function Header() {
  //   const [data, setdata] = useState(false);
  return (
    <>
      <div className="sec_header_div">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-xl-10">
              <div className="main_navigation_bar">
                <ul>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    ONEPLUS
                  </span>
                  <li>
                    Phone
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={img1} width="150px"></img>
                            <span>OnePlus 9RT 5G</span>
                          </li>
                          <li>
                            <img src={img2} width="150px"></img>
                            <span>OnePlus 9 Pro 5G</span>
                          </li>
                          <li>
                            <img src={img3} width="150px"></img>
                            <span>OnePlus 9 5G</span>
                          </li>
                          <li>
                            <img src={img4} width="150px"></img>
                            <span>OnePlus 9R 5G</span>
                          </li>
                          <li>
                            <img src={img5} width="150px"></img>
                            <span>OnePlus 8T</span>
                          </li>
                          <li>
                            <img src={img6} width="150px"></img>
                            <span>OnePlus Nord 2</span>
                          </li>
                          <li>
                            <img src={img7} width="150px"></img>
                            <span>OnePlus Nord CE 5G</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    TV
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={tv1} width="250px"></img>
                            <span>OnePlus TV U1S</span>
                          </li>
                          <li>
                            <img src={tv2} width="250px"></img>
                            <span>OnePlus TV Y Series</span>
                          </li>
                          <li>
                            <img src={tv3} width="250px"></img>
                            <span>OnePlus TV Q1 Series</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    Audio
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={bd1} width="150px"></img>
                            <span>OnePlus Buds Z2</span>
                          </li>
                          <li>
                            <img src={bd2} width="150px"></img>
                            <span>OnePlus Buds Pro</span>
                          </li>
                          <li>
                            <img src={bd3} width="150px"></img>
                            <span>OnePlus Buds Z</span>
                          </li>
                          <li>
                            <img src={bd4} width="150px"></img>
                            <span>OnePlus Buds</span>
                          </li>
                          <li>
                            <img src={bd5} width="150px"></img>
                            <span>OnePlus Bullets Wireless Z Series</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    Wearables
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={w1} width="150px"></img>
                            <span>OnePlus Watch Harry</span>
                          </li>
                          <li>
                            <img src={w2} width="150px"></img>
                            <span>OnePlus Watch</span>
                          </li>
                          <li>
                            <img src={w3} width="150px"></img>
                            <span>OnePlus Band</span>
                          </li>
                          <li>
                            <img src={w4} width="150px"></img>
                            <span>OnePlus Band Strap</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    Store
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={c1} width="150px"></img>
                            <span>Cases & Protection</span>
                          </li>
                          <li>
                            <img src={c2} width="150px"></img>
                            <span>Power & Cables</span>
                          </li>
                          <li>
                            <img src={c3} width="150px"></img>
                            <span>Bundles</span>
                          </li>
                          <li>
                            <img src={c4} width="150px"></img>
                            <span>Gear</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>
                    Offers
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={o1} width="150px"></img>
                            <span>Exchange Program</span>
                          </li>
                          <li style={{ paddingLeft: "30px" }}>
                            <img src={o2} width="150px"></img>
                            <span>Welcome Gift</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                  <li>Support</li>
                  <li>
                    Explore
                    <div className="hv_div">
                      {/* <div className="container"> */}
                      <div className="row">
                        <ul>
                          <li>
                            <img src={d1} width="150px"></img>
                            <span>OnePlus Store app</span>
                          </li>
                          <li>
                            <img src={d2} width="150px"></img>
                            <span>Community</span>
                          </li>
                          <li>
                            <img src={d3} width="150px"></img>
                            <span>Find a store</span>
                          </li>
                          <li>
                            <img src={d4} width="150px"></img>
                            <span>About OnePlus</span>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </li>
                </ul>
                <div></div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-xl-2">
              <ul className="inner_ul">
                <li>
                  <BiUserCircle
                    style={{ verticalAlign: "middle", fontSize: "30px" }}
                  />
                </li>
                <li>
                  <FiShoppingBag style={{ verticalAlign: "middle" }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="first_banner">
        <img src={banner1} width="100%" />
      </div>
      <div className="blanck_div"></div>
      <div className="capture_div">
        <div className=" pb-4 pt-0 text-center">
          <div>
            <h2>Capture every feature</h2>
          </div>
        </div>
      </div>
      <div className="imges_div">
        {/* <div className="container"> */}
        <div className="row d-flex justify-content-space-between">
          <div className="col bg-black me-2">
            <img src={i1} width="100%" className="abc" />
            <p className="text-center">
              2nd-Gen Hasselblad Camera for Mobile<br></br>One Billion Colors
            </p>
          </div>
          <div className="col bg-black me-2">
            <img src={i2} width="100%" />
            <p className="text-center">
              Super-Fast Charging<br></br>Large 5,000 mAh Battery
            </p>
          </div>
          <div className="col bg-black me-2">
            <img src={i3} width="100%" />
            <p className="text-center">
              Snapdragon® 8 Gen 1 Mobile Platform<br></br>Flagship Performance
            </p>
          </div>
          <div className="col bg-black me-2">
            <img src={i4} width="100%" />
            <p className="text-center">
              120 Hz Fluid AMOLED with LTPO<br></br>Dynamic Refresh Rate
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="capture_div pt-5">
        <div className=" pb-4 pt-0 text-center">
          <div>
            <h2>
              One luxurious design<br></br>Two inspired colorways
            </h2>
          </div>
        </div>
      </div>
      <div className="left_detail">
        <div className="container" style={{ paddingBottom: "80px" }}>
          <div className="row">
            <div className="col" style={{ background: "#282828" }}>
              <div className="p-5 xyz">
                <h3>Volcanic Black</h3>
                <p>
                  Inspired by an endless sea of sand dunes under a moonlit sky,
                  special micro-crystals resemble glittering sand grains across
                  a dream-like landscape. The purity of the black surface
                  invokes a desire to explore the deep and dark silence.
                </p>
              </div>
            </div>
            <div
              className="col"
              style={{ background: "#282828", padding: "0" }}
            >
              <div>
                <img src={right_img1} width="100%" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col"
              style={{ background: "#282828", padding: "0" }}
            >
              <div>
                <img src={right_img2} width="100%" />
              </div>
            </div>
            <div className="col" style={{ background: "#282828" }}>
              <div className="p-5 xyz">
                <h3>Emerald Forest</h3>
                <p>
                  This colorway captures the first morning sunray transforming
                  dew into shimmering crystals suspended in air. Echoing the
                  passage of time, angled micro-crystals simulate the interplay
                  of light and shadow, evoking stillness and tranquility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide />
      <div className="form_div">
        <h1>
          Subscribe to receive all the latest<br></br>OnePlus 10 Pro{" "}
          <sup>5G</sup> news
        </h1>
        <h6>Sign up for newsletter.</h6>
        <h5>
          <input type="text" placeholder="Email Address" />
        </h5>
        <h5>
          Subscribe to receive <a href="#">marketing information</a>
        </h5>
      </div>
      <div className="form_div1">
        <h1>
          Join Red Cable Club and get<br></br>benefits on new devices!
        </h1>
        <h5>
          <button>About Red Cable Club</button>
        </h5>
      </div>
      <Footer />
    </>
  );
}
