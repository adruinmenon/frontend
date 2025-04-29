import { motion } from "motion/react";
import {
  HashIcon,
  VerifyIcon,
  BellIcon,
  ArrowRightIcon,
  MousePointerIcon,
  ShieldIcon,
} from "../components/Icons";
import Logo from "../components/Logo";

export function Verify() {
  return (
    <div className="relative">
      <div
        className="p-10 bg-[#0f0f0f] rounded-lg min-h-[380px] flex flex-col justify-end w-full"
        style={{ borderLeft: "120px solid #000" }}
      >
        {/* Channel Icon */}
        <div className="flex items-center justify-center bg-[#4d4d4d] rounded-full p-2 w-10 h-10">
          <HashIcon></HashIcon>
        </div>
        {/* Channel Name */}
        <div className="flex flex-col justify-start items-start my-2">
          <h1 className="text-white text-2xl font-bold text-left ml-2">
            Welcome to #verify-here!
          </h1>
          <h2 className="text-gray-400 text-sm">
            This is the start of the #verify-here channel.
          </h2>
        </div>
        {/* Channel Separator */}
        <div className="my-2 h-0.5 bg-gray-400 w-full rounded-full"></div>

        {/* Channel Messages*/}
        <motion.div
          className="flex items-start justify-start my-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="w-10 h-10 rounded-full bg-white">
            <Logo></Logo>
          </div>
          <div className="ml-4">
            {/* User Info */}
            <div className="flex items-center justify-start">
              <h1 className="text-blue-500 font-bold">Adruinmenon</h1>
              <h2 className="text-gray-500 ml-2">Today at 4:45 PM</h2>
            </div>
            {/* Chat Messages */}
            <div className="flex items-start justify-start">
              <div
                className="flex bg-gray-800 rounded-lg p-2 px-6 my-2"
                style={{ borderLeft: "4px solid  blue" }}
              >
                <div className="ml-2">
                  <h1 className="text-white font-bold flex items-center justify-start">
                    <div className="mr-2">
                      <VerifyIcon></VerifyIcon>
                    </div>
                    Verification Required!
                  </h1>
                  <h1 className="text-white flex items-start justify-start my-1">
                    <p className="mr-2">
                      <BellIcon></BellIcon>
                    </p>
                    <p>
                      To access <b>Wick Lounge</b>, you need topass the
                      verification first.
                    </p>
                  </h1>

                  <h2 className="ml-4 flex items-center justify-start">
                    <p className="mr-2">
                      <ArrowRightIcon></ArrowRightIcon>
                    </p>
                    <p>
                      Press on the <b>Verify</b> button below.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
            {/* Verify Button */}
            <div className="flex items-center justify-start my-2">
              <div className="relative">
                <button className="bg-blue-500 text-white px-2 rounded-md">
                  Verify
                </button>
                <motion.div
                  className="flex items-center justify-start ml-2 absolute -bottom-14 left-1/5 rounded-full text-yellow-500"
                  initial={{ x: 100, y: 100, opacity: 0 }}
                  whileInView={{ y: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                >
                  <MousePointerIcon width={100} height={100}></MousePointerIcon>
                </motion.div>
              </div>

              <button className="bg-gray-800 text-white px-2 rounded-md ml-1">
                Help
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-15 -left-25 bg-[#232323] flex items-center justify-center text-white text-center text-3xl p-3 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="flex items-center justify-center">
          <div className="mr-2">
            <HashIcon></HashIcon>
          </div>
          verify-here
        </div>
      </motion.div>
      <div className="absolute top-40 -left-30 flex items-center justify-center text-emerald-800 text-center text-3xl p-3 rounded-lg">
        <div className="flex items-center justify-center">
          <ShieldIcon width={200} height={200}></ShieldIcon>
        </div>
      </div>
    </div>
  );
}
