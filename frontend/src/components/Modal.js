import React from "react";
import {motion} from "framer-motion";

function Modal({selectedImg, setSelectedImg, imageName}) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{y: "-100vh"}}
        animate={{y: 0}}
        src={`${selectedImg.imagePath}/${imageName}.webp`}
        alt={selectedImg.description}
        style={{backgroundColor: "#fff"}}
      />
    </motion.div>
  );
}

export default Modal;