import React from "react";
import { mapAddress } from "../../config/ContactData";

const MapBox = () => {
  return (
    <section className="mapbox" data-mapbox="true">
      <figure>
        <iframe
          title="map address"
          src={mapAddress}
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>
  );

}

export default MapBox;