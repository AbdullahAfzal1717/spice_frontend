import React from "react";
import "./google.css";

const Googlemap = (props) => {
  console.log(props);
  return (
    <div className="map_loc">
      <div className="map_loc_wrapper">
        <iframe
          src={props?.setting?.twitterUrl}
          width="100%"
          height="540"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Googlemap;
