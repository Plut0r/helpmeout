import { IoIosArrowDown } from "react-icons/io";

export const transcriptData = [
  {
    id: 1,
    minutes: "0.01",
    transcript:
      'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
    active: true,
  },
  {
    id: 2,
    minutes: "0.15",
    transcript:
      'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha',
    active: true,
  },
  {
    id: 3,
    minutes: "0.30",
    transcript:
      'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
    active: true,
  },
  {
    id: 4,
    minutes: "1.00",
    transcript:
      'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the',
    active: false,
  },
];

function Details() {
  return (
    <div className="container md:py-3 flex flex-col gap-5">
      <p className="workSans text-base md:text-lg font-normal text-[rgba(20,20,20,0.70)]">
        Home / Recent Videos /{" "}
        <span className="font-medium text-#413C6D[]">
          How To Create A Facebook Ad Listing
        </span>
      </p>
      <div className="flex items-center gap-4">
        <h3 className="sora text-sm md:text-2xl font-semibold text-[#141414]">
          How To Create A Facebook Ad Listing
        </h3>
        <div>
          <img
            src="/images/edit.png"
            alt="edit_icon"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>
      <div className="p-2 rounded-3xl border border-[rgba(182,179,198,0.60)] bg-[rgba(251,251,251,0.50)] w-full">
        <img
          src="\images\video frame (4).png"
          alt="video_frame"
          className="object-cover w-full"
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-5 md:flex-row items-center justify-between">
        <div className="bg-[rgba(182,179,198,0.20)] border border-[rgba(231,231,237,0.5)] rounded-2xl w-full md:w-[46%] h-14 flex items-center justify-between px-5">
          <input
            type="text"
            className="bg-transparent outline-none workSans text-[rgba(67,67,67,0.80)] text-lg font-normal"
            placeholder="enter email of receiver"
          />
          <button className="rounded-lg px-[0.625rem] py-2 bg-[#605C84] text-white sora font-medium">
            Send
          </button>
        </div>
        <div className="w-full md:w-[46%] h-14 rounded-2xl bg-[#FAFAFA] border border-[#929292] flex items-center justify-between px-5">
          <p className="workSans text-base font-normal text-[#4B4B4B] max-w-[70%] md:max-w-[60%] overflow-hidden whitespace-nowrap">
            https://www.helpmeout/Untitled_Video_20232509
          </p>
          <div className="rounded-lg px-[0.625rem] py-2 border border-[#120B48] flex items-center justify-center gap-2">
            <img src="/images/copy.png" alt="copy_icon" />
            <p className="hidden md:flex sora text-xs lg:text-base font-medium text-[#120B48]">
              Copy URL
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h3 className="sora text-base font-semibold text-[#08051E]">
          Share your video
        </h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="h-12 w-[132px] border border-[#0A0628] rounded-[0.375rem] flex items-center justify-center gap-2 cursor-pointer">
            <img src="/images/Facebook svg.svg" alt="facebook" />
            <p className="inter text-base font-medium text-[#08051E]">
              Facebook
            </p>
          </div>
          <div className="h-12 w-[132px] border border-[#0A0628] rounded-[0.375rem] flex items-center justify-center gap-2 cursor-pointer">
            <img src="/images/whatsapp.png" alt="whatsapp_icon" />
            <p className="inter text-base font-medium text-[#08051E]">
              WhatsApp
            </p>
          </div>
          <div className="h-12 w-[132px] border border-[#0A0628] rounded-[0.375rem] flex items-center justify-center gap-2 cursor-pointer">
            <img src="/images/telegram.png" alt="telegram_icon" />
            <p className="inter text-base font-medium text-[#08051E]">
              Telegram
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-3 mt-8">
          <h3 className="sora text-xl font-medium text-black">Transcript</h3>
          <div className="w-32 py-2 rounded-[0.25rem] border border-[#CFCFCF] flex items-center justify-between px-5">
            <p className="workSans text-[#9D9D9D] text-base font-normal">
              English
            </p>
            <div>
              <IoIosArrowDown color="#BBBBBB" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-6 md:w-[80%]">
          {transcriptData.map((data) => (
            <div key={data.id} className="flex gap-4 items-start ">
              <h3
                className={`workSans text-xl md:text-[1.375rem] font-medium ${
                  data.active ? "text-[#141414]" : "text-[#CFCFCF]"
                }`}
              >
                {data.minutes}
              </h3>
              <p
                className={`workSans text-lg md:text-xl font-normal ${
                  data.active ? "text-black" : "text-[#CFCFCF]"
                }`}
              >
                {data.transcript}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
