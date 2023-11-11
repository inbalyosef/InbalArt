import { Grid } from "@mui/material";
import "./Style/About.css";
import Typography from "@mui/material/Typography";

export const About = () => {
  return (
    <Grid container spacing={0} >
      <Grid container className="about-me-container" spacing={0} justifyContent="center" display="flex">
        <Grid item className="about-me-left" xs={10} md={7.3}>
          <Typography
            variant="h4"
            fontFamily="'Century Gothic', Arial, sans-serif"
            sx={{mb:2, mt:10}}
          >
            About Me
          </Typography>
          <Typography
            fontFamily="'Century Gothic', Arial, sans-serif"
            sx={{mb:2 , fontSize:"1rem"}}
          >
           As an artist, I find inspiration in the world around me, capturing its beauty through the stroke of a brush. With a passion for painting, tattoo design, and customizing shoes, I blend these art forms into a unique expression of my creativity.
           <br /><br/>
           Each canvas becomes a playground for my imagination, where colors dance harmoniously, and shapes intertwine to create captivating stories. The fluidity of my brushstrokes mirrors the fluidity of life, capturing fleeting moments frozen in time.
           <br/><br/>
           But my artistry doesn't stop there. I delve into the realm of tattoos, designing intricate and meaningful symbols that become a permanent part of someone's identity. The connection forged with my clients as we bring their visions to life on their skin is truly humbling.
           <br/><br/>
           Additionally, I breathe life into footwear, transforming plain sneakers into wearable masterpieces. Each brushstroke on the shoe canvas becomes a statement of personal style, allowing individuals to step confidently into the world with a touch of artistic flair.
           <br/><br/>
           every line, and every design, I strive to evoke emotions, ignite imagination, and leave a lasting impression. My art is a testament to the endless possibilities of creativity, and I am honored to share my passion with you.
        </Typography>
        </Grid>
        <Grid item className="about-me-right"  xs={1} md={4.7} sx={{display: { xs: "none", md: "flex" }}}>
          <div className="circle-image"></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
