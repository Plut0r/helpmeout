import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col md:flex-row gap-y-8 justify-between items-center my-12">
      <div className="flex flex-col gap-3">
        <h1 className="sora text-3xl md:text-4xl xl:text-6xl font-bold">
          Show Them <br /> Don't Just Tell
        </h1>
        <p className="inter text-base xl:text-xl font-normal text-[rgba(0,0,0,0.75)] md:w-[60%]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <div
          className="bg-[#120B48] rounded-lg p-2 md:p-3 xl:p-4 w-fit flex items-center gap-3 workSans text-base xl:text-lg font-medium text-white mt-5 cursor-pointer"
          onClick={() => navigate("/store")}
        >
          Install HelpMeOut{" "}
          <span>
            <img src="/images/arrow-right.png" alt="arrow-right" />
          </span>
        </div>
      </div>
      <div className="">
        <img src="/images/hero_banner.png" alt="hero_banner" />
      </div>
    </div>
  );
}

export default Hero;
