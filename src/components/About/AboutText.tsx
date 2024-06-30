import {
  messages
} from '../../config/About/AboutData';


const AboutText: React.FC = () => {

  return (
    <section className="about-text">
      <p>
        <h3><code> $ ls -al Hugo 👨🏻‍💻 (He/Him)</code></h3>
      </p>

      {messages.map((message: JSX.Element) => message)}

    </section>
  );
}

export default AboutText;
