import { motion, useInView } from "motion/react";
import Logo from "../components/Logo";
import { useRef } from "react";

export function ChatBox() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <div className="bg-black rounded-lg p-10 overflow-y-hidden">
      {/* User chats */}
      <motion.div
        className="flex items-start justify-start mb-5"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 2 }}
        ref={ref}
      >
        <Avatar src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103130.jpg"></Avatar>
        <div className="ml-2">
          {/* User Info */}
          <div className="flex items-center justify-start ml-2">
            <h1 className="text-red-500 font-bold">Salvi0</h1>
            <h2 className="text-gray-500 ml-2">Today at 4:45 PM</h2>
          </div>
          {/* Chat Messages */}
          <div className="flex items-start justify-center">
            <div className="flex flex-col gap-1 ml-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 2 + index * 0.5 }}
                  key={index}
                >
                  <ChatMessage message="I'm spamming the same message!"></ChatMessage>
                </motion.div>
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </motion.div>

      {/* Bot chats */}
      <motion.div
        className="flex items-start justify-center"
        initial={{ x: 0, y: 150 }}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { x: 0, y: 200 },
          visible: { x: 0, y: 0 },
        }}
        transition={{ duration: 2 }}
      >
        <div className="w-10 h-10 rounded-full bg-white">
          <Logo></Logo>
        </div>
        <div className="ml-2">
          {/* User Info */}
          <div className="flex items-center justify-start ml-2">
            <h1 className="text-blue-500 font-bold">Adruinmenon</h1>
            <h2 className="text-gray-500 ml-2">Today at 4:45 PM</h2>
          </div>
          {/* Chat Messages */}
          <div className="flex items-start justify-start">
            <div
              className="flex bg-gray-800 rounded-lg p-2 px-6 ml-2 my-2"
              style={{ borderLeft: "4px solid  blue" }}
            >
              <div className="ml-2">
                <h1 className="text-white font-bold">
                  Salvi0 has been silenced for 30m!
                </h1>
                <h2 className="text-gray-500 ml-2">
                  REASON: Similar Message Spam
                </h2>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </motion.div>
    </div>
  );
}

function ChatMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full rounded-lg p-1">{message}</div>
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white">
      <img src={src} alt="idk" className="w-full h-full rounded-full" />
    </div>
  );
}
