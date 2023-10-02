import Header from "../components/video_repository/header";
import { IoIosSearch } from "react-icons/io";
import RecentFiles from "../components/video_repository/recent_files";

function VideoRepository() {
  return (
    <div className="pt-8">
      <div className="w-full h-[0.125rem] bg-gray-200"></div>
      <Header />
      <div className="container flex flex-col md:flex-row gap-y-4 items-start md:items-center justify-between">
        <div className="flex flex-col md:gap-2">
          <h1 className="sora text-2xl md:text-[2rem] font-bold text-[#141414]">
            Hello, John Mark
          </h1>
          <p className="workSans font-normal text-base md:text-lg text-[rgba(20,20,20,0.70)]">
            Here are your recorded videos
          </p>
        </div>
        <div className="w-[20rem] lg:w-[25rem] h-12 md:h-14 rounded-xl border border-[#E7E7ED] bg-[rgba(182,179,198,0.14)] flex items-center gap-4 px-5">
          <div>
            <IoIosSearch color="#C3C3C3" size={22} />
          </div>
          <input
            type="text"
            className="workSans text-sm font-normal text-[#C3C3C3] bg-transparent outline-none w-full"
            placeholder="Search for a particular video"
          />
        </div>
      </div>
      <div className="w-full h-[0.05rem] bg-gray-200 mt-8"></div>
      <RecentFiles />
    </div>
  );
}

export default VideoRepository;
