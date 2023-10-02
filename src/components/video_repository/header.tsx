import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="container flex items-center justify-between py-5 md:py-8">
      <div
        className="cursor-pointer -ml-5 md:-ml-0"
        onClick={() => navigate("/")}
      >
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img src="/images/profile-circle.png" alt="profile-circle-icon" />
        </div>
        <div className="flex items-center gap-2">
          <p className="workSans font-normal text-base text-[#141414]">
            John Mark
          </p>
          <div className="cursor-pointer">
            <IoIosArrowDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
