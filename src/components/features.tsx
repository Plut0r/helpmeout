const featuresData = [
  {
    id: 1,
    title: "Simple Screen Recording",
    description:
      "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    icon: "/images/record-circle.svg",
    alt: "record_circle_icon",
  },
  {
    id: 2,
    title: "Easy-to-Share URL",
    description:
      "Share your recordings instantly with a single link. No attachments, no downloads.",
    icon: "/images/send-2.svg",
    alt: "send_icon",
  },
  {
    id: 3,
    title: "Revisit Recordings",
    description:
      "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    icon: "/images/refresh-square-2.svg",
    alt: "refresh_icon",
  },
];

function Features() {
  return (
    <div id="features" className="my-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="sora text-2xl md:text-3xl xl:text-[2.5rem] font-bold text-[#141414]">
          Features
        </h2>
        <p className="workSans text-[#616163] font-normal text-base md:text-xl">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="container flex flex-col lg:flex-row gap-y-8 justify-between items-center mt-7 md:mt-14">
        <div className="flex flex-col gap-6 lg:gap-4">
          {featuresData.map((feature) => (
            <div key={feature.id} className="flex items-start justify-start gap-3">
              <div className="rounded-full bg-[#413C6D] p-2">
                <img src={feature.icon} alt={feature.alt} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="inter text-[#1B233D] font-semibold text-xl md:text-2xl xl:text-[1.75rem]">
                  {feature.title}
                </h3>
                <p className="lg:w-[72%] workSans text-[#616163] text-base xl:text-xl font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src="/images/features_banner.png"
            alt="features_section_banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
