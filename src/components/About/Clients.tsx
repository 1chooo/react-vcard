import chaewonImage from "../../Assets/images/idols/chaewon_01.png";
import chaewonImage3 from "../../Assets/images/idols/chaewon_03.png";
import yoonaImage from "../../Assets/images/idols/yoona_01.png";
import yoonaImage2 from "../../Assets/images/idols/yoona_02.png";
import yujinImage from "../../Assets/images/idols/yujin.png";

interface Client {
  image: string;
  alt: string;
}

const clients: Client[] = [
  { image: chaewonImage, alt: "ChaeWon Image" },
  { image: yoonaImage, alt: "Yoona Image" },
  { image: yoonaImage2, alt: "Yoona Image" },
  { image: yujinImage, alt: "YuJin Image" },
  { image: chaewonImage3, alt: "ChaeWon Image" }
];



const Clients: React.FC = () => {
  return (

    <section className="clients">

      <p>
        <h3><code> $ ls -al Idols</code></h3>
      </p>

      <ul className="clients-list has-scrollbar">
        {clients.map((client, index) => (
          <li key={index} className="clients-item">
            <img src={client.image} alt={client.alt} loading="lazy" />
          </li>
        ))}
      </ul>

    </section>
  );
}

export default Clients;
