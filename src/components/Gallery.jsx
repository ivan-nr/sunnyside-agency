import cone from "../images/desktop/image-gallery-cone.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cube from "../images/desktop/image-gallery-sugarcubes.jpg";
import bottle from "../images/desktop/image-gallery-milkbottles.jpg";

const Gallery = () => {
  const images = [bottle, orange, cone, cube];
  return (
    <section className="grid md:grid-cols-4 grid-cols-2">
      {images.map((img, i) => (
        <img src={img} key={i} />
      ))}
    </section>
  );
};

export default Gallery;
