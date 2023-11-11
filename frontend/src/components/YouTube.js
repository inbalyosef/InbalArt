import React from "react";
import PropTypes from "prop-types";

const YouTube = ({ embedId }) => (
 
    <iframe className="ifram"
      
      height="80%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);

YouTube.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTube;