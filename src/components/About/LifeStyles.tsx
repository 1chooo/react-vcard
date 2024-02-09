import writingImage from "../../Assets/images/icons/writing.png";
import dumbBellImage from "../../Assets/images/icons/dumbbell.png";
import developerImage from "../../Assets/images/icons/developer.png";
import cameraImage from "../../Assets/images/icons/camera.png";


const LifeStyles: React.FC = () => {
  return (
    <section className="service">

      <p>
        <h3><code> $ ls -al Life Style</code></h3>
      </p>

      <ul className="service-list">

        <li className="service-item">

          <div className="service-icon-box">
            <img
              src={developerImage}
              alt="Developer"
              width="30"
            />
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
            <img
              src={writingImage}
              alt="Writing"
              width="30"
            />
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
            <img
              src={dumbBellImage}
              alt="Dumbbell"
              width="30"
            />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Workouts</h4>

            <p className="service-item-text">
              Basketball and weight training defines my active workout lifestyle.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img
              src={cameraImage}
              alt="Camera"
              width="30"
            />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>

            <p className="service-item-text">
              Sky brings freedom; streets, a reminder of others' contributions.
            </p>
          </div>

        </li>

      </ul>

    </section>
  );
}

export default LifeStyles;
