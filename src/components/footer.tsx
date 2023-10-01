const nav = [
  {
    id: 1,
    title: "Menu",
    links: ["Home", "Converter", "How it works"],
  },
  {
    id: 2,
    title: "About us",
    links: ["About", "Contact Us", "Privacy Policy"],
  },
  {
    id: 3,
    title: "Screen Record",
    links: ["Browser Window", "Desktop", "Application"],
  },
];

function Footer() {
  return (
    <div className="w-full bg-[#120B48] py-10 md:py-16">
      <div className="container flex flex-col lg:flex-row gap-y-5 items-start">
        <div className="lg:w-1/4">
          <img src="/images/white_logo.png" alt="white_logo" />
        </div>
        <div className="hidden md:flex flex-row justify-between items-start w-full lg:w-3/4 ml-5 lg:ml-0">
          {nav.map((navItem) => (
            <div key={navItem.id} className="flex flex-col gap-4 w-1/4">
              <h3 className="sora text-sm md:text-base text-white font-medium md:font-semibold">
                {navItem.title}
              </h3>
              <div className="flex flex-col gap-4">
                {navItem.links.map((link, index) => (
                  <div
                    key={index}
                    className="cursor-pointer workSans text-xs md:text-base font-normal text-white"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col gap-6 w-full ml-3">
          {nav.map((navItem) => (
            <div key={navItem.id} className="flex flex-col gap-4">
              <h3 className="sora text-sm md:text-base text-white font-semibold">
                {navItem.title}
              </h3>
              <div className="flex flex-col gap-4">
                {navItem.links.map((link, index) => (
                  <div
                    key={index}
                    className="cursor-pointer workSans text-xs md:text-base font-normal text-white"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
