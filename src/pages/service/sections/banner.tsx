import video from "../../../assets/bannerVideo (2).mp4";
import Button from "../../components/button";

const Banner = () => {
  return (
    <div className="w-full  min-h-[98vh] max-h-225 relative flex justify-center items-center md:gap-10 gap-5 overflow-hidden">
      <div className="w-full absolute inset-0 rounded-b-3xl">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className=" w-full h-full object-cover rounded-b-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80 z-10 rounded-b-3xl backdrop-blur-sm" />

      <div className="w-[90%] lg:mt-10 relative z-20 text-white flex flex-col md:gap-8 gap-6 justify-center items-center text-center ">
        <h1 className="md:w-[60%] w-full font-bold lg:text-6xl md:text-5xl text-3xl leading-tight ">
          Search  &  <span
            className="text-[#ff6600] "
            style={{
              textShadow:
                "0 0 10px rgba(255,102,0,0.4), 2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >  Growth
          </span>   Strategy
        </h1>

        <p
          className="lg:text-lg md:text-[16px] text-[12px] lg:w-[70%] w-full leading-snug "
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
        >
          Our team of expert strategists at iCreate Media teams up with you for
          tremendous growth — the use of data, creativity, and industry
          knowledge will help you not only to cope with but also to get the best
          out of the digital world. (iCreate Media)
        </p>
        <Button buttonText="Connect" />
      </div>
    </div>
  );
};

export default Banner;
