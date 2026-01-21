import image from "../../../assets/strategy.jpg";
import ImageSection from "../../components/mediaAndText";

const Strategy = () => {
  return (
    <ImageSection
      title="Strategy"
      paragraphs={[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Quod dolores quia laborum, provident recusandae soluta ducimus facere ab accusamus reiciendis.",
      ]}
      image={image}
      underline={true}
      imagePosition="right"
      imagebg={true}
    />
  );
};

export default Strategy;
