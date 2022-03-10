import "./index.css";
import { FcHome, FcTouchscreenSmartphone } from "react-icons/fc";
import { GrMail, GrLanguage } from "react-icons/gr";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <div className="footer_main_div">
        <div className="container fotter_con">
          <div className="row">
            <div className="col">
              <h3>Phone</h3>
              <div className="collepse">
                <ul>
                  <li>
                    <a href="#">OnePlus 9RT 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus Nord 2 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus Nord CE 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus 9 Pro 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus 9 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus 9R 5G</a>
                  </li>
                  <li>
                    <a href="#">OnePlus 8T 5G</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3>Store</h3>
              <div className="collepse">
                <ul>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Audio</a>
                  </li>
                  <li>
                    <a href="#">Wearables</a>
                  </li>
                  <li>
                    <a href="#">Cases & Protection</a>
                  </li>
                  <li>
                    <a href="#">Power & Cables</a>
                  </li>
                  <li>
                    <a href="#">Bundles</a>
                  </li>
                  <li>
                    <a href="#">Gear</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3>Support</h3>
              <div className="collepse collepse_div_3">
                <ul>
                  <li>
                    <a href="#">Shopping FAQs</a>
                  </li>
                  <li>
                    <a href="#">User Manuals</a>
                  </li>
                  <li>
                    <a href="#">Service Centers</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Repair Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3>Explore</h3>
              <div className="collepse collepse_div_3">
                <ul>
                  <li>
                    <a href="#">About OnePlus </a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Find a store</a>
                  </li>
                  <li>
                    <a href="#">OnePlus Store app</a>
                  </li>
                  <li>
                    <a href="#">OxygenOS</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Campus Opportunities</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3>Programs</h3>
              <div className="collepse collepse_div_3">
                <ul>
                  <li>
                    <a href="#">Exchange Program</a>
                  </li>
                  <li>
                    <a href="#">Red Cable Club</a>
                  </li>
                  <li>
                    <a href="#">Welcome Gift</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
