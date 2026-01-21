import ImageSection from "../../components/mediaAndText";
import video from "../../../assets/digitalGrowth.mp4";

const DigitalGrowthPlanning = () => {
  return (
    <>
      <ImageSection
        title={
          <>
            Digital <span className="text-[#ff6600]">Growth</span> Planning
          </>
        }
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quia laborum, provident recusandae soluta ducimus facere ab accusamus reiciendis.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores quia laborum, provident recusandae soluta ducimus facere ab accusamus reiciendis.",
        ]}
        video={video}
    
        underline={true}
        imagePosition="right"

      />
    </>
  );
};

export default DigitalGrowthPlanning;
