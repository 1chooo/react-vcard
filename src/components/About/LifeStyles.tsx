import { FunctionComponent } from "react";

import { VscTools } from "react-icons/vsc";
import { LuPencilLine } from "react-icons/lu";
import { IoBasketballOutline } from "react-icons/io5";

const LifeStyles: FunctionComponent = ({ }) => {
  return (
    <section className="service">

      <section className="about-text">
        <h3><code> $ ls -al Life Style</code></h3>
      </section>

      <ul className="service-list">

        <li className="service-item">

          {/* 手機模式下 service-icon-box 目前沒有置中 */}
          <div className="service-icon-box">
            <div className="icon-box">
              <VscTools />
            </div>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Open Source Contributor</h4>

            <p className="service-item-text">
              Actively contributing to open source projects on GitHub.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <div className="icon-box">
              <LuPencilLine />
            </div>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Content Creator</h4>

            <p className="service-item-text">
              Love to share my knowledge and experience with others.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <div className="icon-box">
              <IoBasketballOutline />
            </div>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Workouts</h4>

            <p className="service-item-text">
              Basketball and weight training defines my active workout lifestyle.
            </p>
          </div>

        </li>


      </ul>

    </section>
  );
}

export default LifeStyles;
