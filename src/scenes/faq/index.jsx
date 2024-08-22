import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Questions about Art Work" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is considered artwork?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Artwork refers to any creative expression or piece of art created by an artist. This can include paintings, sculptures, drawings, photographs, digital art, installations, and other forms of visual or performance art. Artwork is often created to convey ideas, emotions, or to reflect cultural and social themes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are the main types of visual art?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <strong>Painting:</strong> The application of pigments on a surface, such as canvas, paper, or walls.
<strong>  Sculpture:</strong> Three-dimensional art made by carving, modeling, or assembling materials like stone, metal, or wood.
<strong>  Drawing:</strong> The creation of images using pencils, pens, charcoal, or other tools on paper or another surface.
<strong>  Photography:</strong> Capturing images using a camera.
<strong>  Digital Art:</strong> Art created using digital technology, often through software on computers or tablets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the significance of color in artwork?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Color is a fundamental element in artwork that can convey emotions, create mood, and symbolize ideas. Artists use color theory, which includes concepts like color harmony, contrast, and saturation, to evoke specific feelings or reactions in the viewer. For example, warm colors like red and orange can evoke energy or warmth, while cool colors like blue and green can create a sense of calm or serenity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is abstract art?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Abstract art is a style of art that does not attempt to represent reality accurately but instead uses shapes, colors, forms, and textures to achieve its effect. Abstract art can be completely non-representational or it can be based on real objects but presented in a simplified or distorted way. The goal is often to evoke emotions or ideas rather than depict a specific subject.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do artists use perspective in their work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Seasons occur because of the tilt of Earth's axis, which is inclined at about 23.5 degrees relative to its orbit around the Sun. As Earth orbits the Sun, Perspective is a technique used by artists to create the illusion of depth and space on a flat surface. Linear perspective involves using lines that converge at a single point on the horizon (the vanishing point) to depict objects as smaller as they recede into the distance. Atmospheric perspective uses color and clarity to show depth, with distant objects appearing lighter and less detailed than those closer to the viewer. Perspective helps create a more realistic and three-dimensional appearance in two-dimensional artwork.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;