import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full py-4">
      <div className="container hidden md:flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="workSans text-base font-medium flex items-center gap-8">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            offset={-50}
          >
            <a className="cursor-pointer">Features</a>
          </ScrollLink>
          <ScrollLink
            to="howItWorks"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            offset={-50}
          >
            <a className="cursor-pointer">How it Works</a>
          </ScrollLink>
        </div>
        <button
          className="sora text-[#120B48] text-[1.125rem] font-semibold"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
      <div className="md:hidden container flex flex-col gap-2">
        <div className="-ml-3">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex justify-between">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            offset={-50}
          >
            <a className="cursor-pointer workSans text-base font-medium">
              Features
            </a>
          </ScrollLink>
          <ScrollLink
            to="howItWorks"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            offset={-50}
          >
            <a className="cursor-pointer workSans text-base font-medium">
              How it Works
            </a>
          </ScrollLink>
          <button className="sora text-[#120B48] text-base font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
