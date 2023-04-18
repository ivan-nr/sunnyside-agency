import transformImg from "../images/desktop/image-transform.jpg";
import standoutImg from "../images/desktop/image-stand-out.jpg";
import MainCard from "./MainCard";
import SecondCard from "./SecondCard";

const MainSection = () => {
  const content_data = [
    {
      title: "Transform your brand",
      content: `We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.`,
      image: transformImg,
    },
    {
      title: "Stand out to the right audience",
      content: `Using a collaborative formula of designers, researchers, photographers,
            videographers, and copywriters, we’ll build and extend your brand in digital places.`,
      image: standoutImg,
    },
  ];
  return (
    <main>
      <section>
        {content_data.map((d, i) => (
          <MainCard {...d} key={i} />
        ))}
        <SecondCard />
      </section>
    </main>
  );
};

export default MainSection;
