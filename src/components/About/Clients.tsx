import chaewonImage from "../../Assets/images/idols/chaewon_01.png";
import chaewonImage3 from "../../Assets/images/idols/chaewon_03.png";
import yoonaImage from "../../Assets/images/idols/yoona_01.png";
import yoonaImage2 from "../../Assets/images/idols/yoona_02.png";
import yujinImage from "../../Assets/images/idols/yujin.png";

const Clients: React.FC = () => {
  return (

    <section className="clients">
      
      <section className="about-text">
        <p>
          <h3><code> $ ls -al Idols</code></h3>
        </p>
      </section>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <img
            src={chaewonImage}
            alt="ChaeWon Image"
          />
        </li>

        <li className="clients-item">
          <img
            src={yoonaImage}
            alt="Yoona Image"
          />
        </li>

        <li className="clients-item">
          <img
            src={yoonaImage2}
            alt="Yoona Image"
          />
        </li>

        <li className="clients-item">
          <img
            src={yujinImage}
            alt="YuJin Image"
          />
        </li>

        <li className="clients-item">
          <img
            src={chaewonImage3}
            alt="ChaeWon Image"
          />
        </li>
      </ul>

    </section>
  );
}

export default Clients;
