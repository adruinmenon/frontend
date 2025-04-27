import { NavbarButton } from "./Buttons";
import { GemIcon, HelpIcon, LightIcon } from "./Icons";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-900/30 border-gray-200/50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center max-w-2xl min-w-12">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {NavbarItem.map((item) => (
                  <NavbarButton className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium">
                    {item.icon}
                  </NavbarButton>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-white/80 p-2 rounded-md">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavbarItem = [
  {
    label: "Premium",
    icon: <GemIcon />,
  },
  {
    label: "Help",
    icon: <HelpIcon />,
  },
  {
    label: "Light",
    icon: <LightIcon />,
  },
];
