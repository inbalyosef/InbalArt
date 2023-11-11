import { React, useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import Modal from "../components/Modal.js";
import  './Style/gallery.css';
import paintings from '../localDB/paintings.json'

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paintingObjects, setPaintingObjects] = useState([]);

  useEffect(()=>{
    setPaintingObjects(paintings);
    setLoading(false);
}, []);

  return (
    <Grid
      container
      className="grid-container"
    >
      {loading ? (
        <CircularProgress />
      ) : (

          <div className="gallery-div-center">
          <Grid container direction="row" >
            {paintingObjects &&
              paintingObjects.map((painting) => (
                
                <Grid item xs={12} md={4} justifyContent="center" display="flex" key={painting.id}>
                  
                  <div  >
                   <motion.div 
                     layout
                       whileHover={{ opacity: 1 }}
                       onClick={() => setSelectedImg(painting)}
                     >
                      <div className="gallery-div">
                       <motion.img className="img-gallery"
                         src={`${painting.imagePath}/${painting.paintingName}.webp`}
                         alt={painting.description}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                       />
                       </div>
                       <p className="title-photo">{painting.description}</p>
                     </motion.div>
                  
                   </div>
                </Grid>
              ))}
          </Grid>
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imageName={selectedImg.paintingName} />
          )}
        </div>
      )}
    </Grid>
  );
};


export default Gallery;
