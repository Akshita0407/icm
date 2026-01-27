import image from "../../../assets/email.jpg";
const EmailMarketingContent = () => {
  return (
    <>
      <div className="w-full pb-12 px-5 md:px-10 lg:px-16 xl:px-15 lg:pb-20">
        <div className="w-full flex center relative overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-5 relative z-10">
            <div className="w-full ">
              <div className="relative w-full    rounded-2xl overflow-hidden   cursor-pointer">
                <img
                  src={image}
                  alt="image"
                  className="w-full  max-h-120 rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="w-full px-2 flex flex-col lg:gap-8 gap-4">
              <div className="flex flex-col lg:gap-6 gap-3">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Email Marketing Content
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

export default EmailMarketingContent;
