import chaewonImage from "../../Assets/images/idols/chaewon.png"


const Testimonial: React.FC = () => {

  // testimonials variables
  const testimonialsItem = document.querySelectorAll<HTMLElement>("[data-testimonials-item]");
  const modalContainer = document.querySelector<HTMLElement>("[data-modal-container]");
  const modalCloseBtn = document.querySelector<HTMLElement>("[data-modal-close-btn]");
  const overlay = document.querySelector<HTMLElement>("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector<HTMLImageElement>("[data-modal-img]");
  const modalTitle = document.querySelector<HTMLElement>("[data-modal-title]");
  const modalText = document.querySelector<HTMLElement>("[data-modal-text]");

  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      const avatarElement = this.querySelector("[data-testimonials-avatar]");
      const titleElement = this.querySelector("[data-testimonials-title]");
      const textElement = this.querySelector("[data-testimonials-text]");
  
      if (
        modalImg && avatarElement instanceof HTMLImageElement &&
        modalTitle && titleElement instanceof HTMLElement &&
        modalText && textElement instanceof HTMLElement
      ) {
        modalImg.src = avatarElement.src;
        modalImg.alt = avatarElement.alt;
        modalTitle.innerHTML = titleElement.innerHTML;
        modalText.innerHTML = textElement.innerHTML;
  
        testimonialsModalFunc();
      }
    });
  }


  return (
    <div>

      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={chaewonImage} alt="Daniel lewis" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={chaewonImage} alt="Jessica miller" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src={chaewonImage} alt="Jessica miller" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </section>
      <div className="modal-container" data-modal-container>

        <div className="overlay" data-overlay onClick={testimonialsModalFunc}></div>

        <section className="testimonialModels-modal">

          <button className="modal-close-btn" data-modal-close-btn onClick={testimonialsModalFunc}>
            {/* <ion-icon name="close-outline"></ion-icon> */}
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src={chaewonImage} alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img src={chaewonImage} alt="quote icon" />
          </div>

          <div className="modal-content">

            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}

export default Testimonial;


