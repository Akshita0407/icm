import video from "../../../assets/localAndGlobalSeo.mp4";

const LocalGlobalSeo = () => {
  return (
    <>
      <div className="w-full pb-12 px-5 md:px-10 lg:px-16 xl:px-15 lg:pb-20">
        <div className="w-full bg-white border rounded-3xl border-transparent p-8 flex justify-center items-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-25 h-25">
            <div className="absolute bottom-0 right-0 w-full h-full border-b-5 border-r-5 border-[#ff6600] rounded-br-3xl "></div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="w-full ">
              <div className="relative w-full aspect-video lg:min-h-120  rounded-2xl overflow-hidden shadow-xl hover:shadow-lg  cursor-pointer">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover hover:shadow-lg hover:scale-[1.02] ease-in-out cursor-pointer duration-300"
                ></video>
              </div>
            </div>
            <div className="w-full px-2 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Local & Global SEO
                </h2>
                <h3 className="text-sm md:text-xl font-medium text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
              </div>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ratione possimus et cupiditate commodi officia
                exercitationem odit perspiciatis aperiam reiciendis harum quod,
                quam sunt non facere quidem quis esse fuga quos veniam.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                enim ipsa soluta voluptatibus illo ex exercitationem, assumenda
                doloribus explicabo cum unde ducimus commodi tenetur ipsum
                corporis numquam earum minus repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalGlobalSeo;
