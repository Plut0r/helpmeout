export function LastSection() {
  return (
    <div className="py-5 my-14 md:my-24 w-full bg-[rgba(231,231,237,0.20)]">
      <div className="container flex flex-col gap-5 md:gap-8 items-center justify-center">
        <h3 className="sora text-lg md:text-2xl font-semibold text-[#141414] text-center">
          To ensure the availability and privacy of your video, <br /> we
          recommend saving it to your account.
        </h3>
        <button className="bg-[#120B48] p-2 md:p-4 rounded-lg workSans text-[#F9F9FF] text-base font-medium">
          Save Video
        </button>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="sora text-base md:text-2xl font-semibold text-[#7E7E7E]">
            Don't have an account?
          </div>
          <div className="sora text-base md:text-2xl font-semibold text-[#120B48] cursor-pointer">
            Create account
          </div>
        </div>
      </div>
    </div>
  );
}

function Recording() {
  return (
    <div className="container flex flex-col lg:flex-row gap-20 my-8">
      <div className="lg:flex-1 flex flex-col gap-7">
        <h1 className="sora text-2xl md:text-4xl xl:text-[2.8125rem] font-bold text-[#141414]">
          Your Video is ready!
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="sora text-[#727272] text-sm md:text-base font-medium">Name</h2>
          <div className="flex items-center gap-3">
            <div className="sora text-base md:text-2xl font-semibold text-[#413C6D]">
              Untitled_Video_20232509
            </div>
            <div>
              <img src="/images/edit.png" alt="edit_icon" className="w-[24px] h-[24px] md:w-full md:h-full" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3 lg:hidden">
          <div className="hidden md:block bg-gray-200 h-full w-[3px]"></div>
          <div>
            <div className="w-full h-[18rem] md:h-[25rem]">
              <video src="" controls className="w-full h-full"></video>
            </div>
            <div className="flex flex-col gap-3 mt-8 md:mt-16">
              <h3 className="sora text-lg md:text-2xl font-semibold text-black">
                Transcript
              </h3>
              <div className="w-32 py-2 rounded-[0.25rem] border border-[#CFCFCF] flex items-center justify-between px-5">
                <p className="workSans text-[#9D9D9D] text-base font-normal">
                  English
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(182,179,198,0.20)] border border-[rgba(231,231,237,0.5)] rounded-2xl w-full h-14 mt-2 md:mt-5 flex items-center justify-between px-5">
          <input
            type="text"
            className="bg-transparent outline-none workSans text-[rgba(67,67,67,0.80)] text-sm md:text-lg font-normal"
            placeholder="enter email of receiver"
          />
          <button className="rounded-lg px-[0.625rem] py-1 md:py-2 bg-[#605C84] text-white sora font-medium">
            Send
          </button>
        </div>
        <div className="mt-2 md:mt-5 flex flex-col gap-4">
          <h3 className="sora text-lg md:text-xl font-semibold text-[#141414]">
            Video Url
          </h3>
          <div className="w-full h-14 rounded-2xl bg-[#FAFAFA] border border-[#929292] flex items-center justify-between px-5">
            <p className="workSans text-base font-normal text-[#4B4B4B] max-w-[60%] overflow-hidden">
              https://www.helpmeout/Untitled_Video_20232509
            </p>
            <div className="rounded-lg px-[0.625rem] py-2 border border-[#120B48] flex items-center justify-center gap-2">
              <img src="/images/copy.png" alt="copy_icon" />
              <p className="hidden md:flex sora text-base font-medium text-[#120B48]">Copy</p>
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-5 flex flex-col gap-4">
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
      </div>
      <div className="hidden flex-1 lg:flex gap-3">
        <div className="bg-gray-200 h-full w-[3px]"></div>
        <div>
          <div className="w-full h-[25rem]">
            <video src="" controls className="w-full h-full"></video>
          </div>
          <div className="flex flex-col gap-3 mt-16">
            <h3 className="sora text-2xl font-semibold text-black">
              Transcript
            </h3>
            <div className="w-32 py-2 rounded-[0.25rem] border border-[#CFCFCF] flex items-center justify-between px-5">
              <p className="workSans text-[#9D9D9D] text-base font-normal">
                English
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recording;
