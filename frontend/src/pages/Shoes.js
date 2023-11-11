import { React, useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import Modal from "../components/Modal.js";
import './Style/Shoes.css';
import YouTube from "../components/YouTube.js";
import shoes from '../localDB/shoes.json';

export const Shoes = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [shoesObjects, setShoesObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   axios
  //     .get("/shoes")
  //     .then((response) => {
  //       const shoes = response.data;
  //       setShoesObjects(shoes);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(()=>{
    setShoesObjects(shoes);
    setLoading(false);
  }, []);


  return (
    <Grid
      container 
      justifyContent="center"
      alignContent="center"
      sx={{ mt:10, paddingLeft:0}}
    >
         {loading ? (
        <CircularProgress />
      ) : (
        <Grid item xs={12} md={10} justifyContent="center" alignContent="center" >
         
        {shoesObjects &&
          shoesObjects.map((shoes, i) => (
            <div  key={i}>
              <Grid container direction="row" sx={{display:'flex',justifyContent: 'center'}}>
              <Typography  sx={{ display: { md: "none" }}}  className="title-shoes" fontWeight="600" >{shoes.title}</Typography>
              <Grid item xs={12} md={4}  sx={{ display:'flex', justifyContent: 'center'}} > 
              <motion.div 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(shoes)}
              >
                <motion.img className="img-shoes"
                  src={`${shoes.imagePath}/${shoes.shoesName}.webp`}
                  alt={shoes.description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  
                />
                </motion.div>
                </Grid>
                <Grid item  xs={12} md={4}  sx={{ display: 'flex', justifyContent: 'center' }}>
                   <YouTube  embedId={shoes.link} ></YouTube>
                </Grid>
                   <Grid item xs={10} md={3} sx={{ ml:1,display: 'flex', justifyContent: 'center' }} >
                    <div className="data" >
                   <Typography  className="title-data" fontWeight="600" >{shoes.description}</Typography>
                   <Typography   className="title-data" sx={{mt:1}}  >These custom Cartoon Air Force 1 sneakers are hand-painted using Angelus Leather Paint, a high-quality acrylic paint designed specifically for leather surfaces.   </Typography>
                   <Typography  className="title-data" sx={{mt:1}}>Approximate price for the design: {shoes.price} ₪</Typography>
                   <Typography  className="title-data"  sx={{mt:3, fontSize:12}}>*The cost reflects the extensive time, skill, and artistic expertise required to create a unique and detailed design using Angelus Leather Paint.</Typography>
                   </div>
                    </Grid>
                   </Grid>
                  
           
            </div >
          ))}
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imageName={selectedImg.shoesName} />
        )}
      </Grid>
           
          )
      }
    </Grid>
   
  )
};

export default Shoes;
