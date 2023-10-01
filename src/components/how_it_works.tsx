const data = [
  {
    id: 1,
    title: "Record Screen",
    description:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
  },
  {
    id: 2,
    title: "Share Your Recording",
    description:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
  },
  {
    id: 3,
    title: "Learn Effortlessly",
    description:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
  },
];

function HowItWorks() {
  return (
    <div id="howItWorks" className="container my-20">
      <h3 className="sora text-[#141414] font-bold text-2xl md:text-4xl xl:text-[2.5rem] text-center">
        How it works
      </h3>
      <div className="mt-10 flex flex-col gap-y-10 lg:flex-row justify-between items-start">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-4">
            <div className="bg-[#120B48] rounded-full w-8 md:w-12 xl:w-14 h-8 md:h-12 xl:h-14 inter text-lg md:text-2xl xl:text-[2rem] font-bold text-white flex items-center justify-center">
              {item.id}
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="inter text-[#1B233D] text-xl md:text-[1.75rem] lg:text-2xl xl:text-[1.75rem] font-semibold">
                {item.title}
              </h3>
              <p className="workSans text-[#616163] text-base md:text-xl lg:text-lg xl:text-xl font-normal md:w-[80%] lg:h-[150px]">
                {item.description}
              </p>
            </div>
            <div className="flex items-start">
              <img src="/images/howitworks.png" alt="" className="self-start" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
