import { FiLink2, FiMoreVertical } from "react-icons/fi";

const files = [
  {
    id: 1,
    src: "/images/video frame.png",
  },
  {
    id: 2,
    src: "/images/video frame (1).png",
  },
];

const last_week = [
  {
    id: 1,
    src: "/images/video frame (2).png",
  },
  {
    id: 2,
    src: "/images/video frame (3).png",
  },
];

function RecentFiles() {
  return (
    <div className="container mt-8 flex justify-between items-end">
      <div>
        <div>
          <p className="workSans text-lg font-medium text-[rgba(20,20,20,0.80)]">
            Recent Files
          </p>
          <div className="flex items-center gap-8 mt-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="w-[40%] p-4 rounded-3xl border border-[rgba(182,179,198,0.60)] bg-[rgba(251,251,251,0.50)] flex flex-col gap-3"
              >
                <div>
                  <img src={file.src} alt="video_frame" />
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h2 className="workSans text-xl font-medium text-[#141414]">
                      How to create Facebook Ad listing
                    </h2>
                    <p className="workSans text-base font-normal text-[#B6B3C6]">
                      SEPTEMBER 23, 2023
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiLink2 />
                    <FiMoreVertical />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="workSans text-lg font-medium text-[rgba(20,20,20,0.80)]">
            Files from last week
          </p>
          <div className="flex items-center gap-8 mt-6">
            {last_week.map((file) => (
              <div
                key={file.id}
                className="w-[40%] px-2 pt-2 rounded-t-3xl border border-[rgba(182,179,198,0.60)] bg-[rgba(251,251,251,0.50)] flex flex-col gap-3"
              >
                <div>
                  <img src={file.src} alt="video_frame" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[0.375rem] h-[30rem] rounded-[0.25rem] bg-[#F5F5F5]">
        <div className="w-[0.375rem] h-[15rem] rounded-[0.25rem] bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
}

export default RecentFiles;
