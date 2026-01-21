import video from "../../../assets/contentStrategy.mp4";
import ImageSection from "../../components/mediaAndText";

const ContentStrategy = () => {
  return (
    <div className="bg-linear-to-b from-gray-200 to-white">
      <ImageSection
        title={
          <>
            Content <span className="text-[#ff6600]">Strategy</span>
          </>
        }
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit Quod dolores quia laborum, provident recusandae soluta ducimus facere ab accusamus reiciendis.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id enim quae quia quibusdam nobis eligendi. ",
        ]}
        video={video}
    
        underline={true}
        imagePosition="left"
        imagebg={true}
      />
    </div>
  );
};

export default ContentStrategy;
