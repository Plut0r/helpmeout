import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <div className="w-full h-[0.125rem] bg-gray-200"></div>
      <div className="container mt-10">
        <div
          className="cursor-pointer -ml-5 md:-ml-0"
          onClick={() => navigate("/")}
        >
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8">
          <h1 className="inter text-[#141414] text-[2rem] font-bold">
            Log in or Sign up
          </h1>
          <p className="text-[#434343] text-sm mt-2">
            <span className="inter font-light">
              Join millions of others in sharing successful <br /> moves on
            </span>{" "}
            <span className="sen font-normal">HelpMeOut</span>.
          </p>
          <div className="flex flex-col gap-4 mt-6 w-full md:w-fit">
            <div className="border border-[#141414] rounded-xl w-full md:w-[480px] h-12 flex items-center justify-center gap-4 cursor-pointer">
              <div>
                <img src="/images/Google svg.svg" alt="google_logo" />
              </div>
              <h3 className="inter font-medium text-base text-[#141414]">
                Continue with Google
              </h3>
            </div>
            <div className="border border-[#141414] rounded-xl w-full md:w-[480px] h-12 flex items-center justify-center pl-5 gap-4 cursor-pointer">
              <div>
                <img src="/images/Facebook svg.svg" alt="facebook_logo" />
              </div>
              <h3 className="inter font-medium text-base text-[#141414]">
                Continue with Facebook
              </h3>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="bg-[#B9C2C8] h-[1px] w-28 md:w-48"></div>
            <h3 className="inter text-[#B9C2C8] font-medium text-sm">or</h3>
            <div className="bg-[#B9C2C8] h-[1px] w-28 md:w-48"></div>
          </div>
          <form className="mt-8 w-full md:w-fit">
            <div className="flex flex-col gap-3 items-start">
              <label
                htmlFor="form_email"
                className="workSans text-[#141414] text-sm font-medium"
              >
                Email
              </label>
              <input
                id="form_email"
                type="email"
                className="border border-[#B6B3C6] rounded-xl bg-transparent outline-none w-full md:w-[480px] h-12 pl-3 workSans text-base font-medium text-[#626262]"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-3 items-start mt-4">
              <label
                htmlFor="form_password"
                className="workSans text-[#141414] text-sm font-medium"
              >
                Password
              </label>
              <input
                id="form_password"
                type="password"
                className="border border-[#B6B3C6] rounded-xl bg-transparent outline-none w-full md:w-[480px] h-12 pl-3 workSans text-base font-medium text-[#626262]"
                placeholder="Enter your Password"
              />
            </div>
            <button
              className="bg-[#120B48] rounded-lg w-full md:w-[480px] h-12 workSans text-lg font-bold text-white mt-6"
              onClick={(e) => (
                e.preventDefault(), navigate("/video_repository")
              )}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
