import {
  motion,
  MotionValue,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";
import { HomePageButton } from "../components/Buttons";
import { FeatureCard } from "../components/Cards";
import { Counter } from "../components/Counter";
import { Navbar } from "../components/Navbar";
import { ChatBox } from "./Chatbox";
import FeedbackSlide from "./FeedbackSlide";
import { Verify } from "./Verify";
import "./welcome.css";
import WavingButton from "../components/Buttons/Invite";
import { NukeProtectionLogs } from "./NukeProtection";
import { Footer } from "../components/Footer";
export function HeroSection() {
  return (
    <main className="pt-16 first h-screen w-full">
      <div className="flex items-center justify-center pt-16 pb-4 w-full px-16">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold wrap-normal text-left px-18">
            Discord moderation and security that is always one step ahead
          </h1>
          <div className="flex items-center justify-center mt-10">
            <motion.div
              className="mx-3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <HomePageButton>Invite Me</HomePageButton>
            </motion.div>
            <motion.div
              className="mx-3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <HomePageButton>Dashboard</HomePageButton>
            </motion.div>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-gray-500">
            <img
              className="shadow-md rounded-md"
              width="840"
              height="475"
              src="https://wickbot.com/hero_placeholder.webp"
              alt="Dashboard Alan Walker"
            ></img>
          </p>
        </div>
      </div>
    </main>
  );
}

export function ServerModeration() {
  return (
    <div className="flex items-center justify-center py-14 bg-blue-900 w-full h-full text-center">
      <div className="grid grid-cols-3">
        {[
          {
            title: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Server Moderation
              </motion.div>
            ),
            description: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Counter countTo={3000}></Counter>+ Servers
              </motion.div>
            ),
          },
          {
            title: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Raid Protection
              </motion.div>
            ),
            description: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Counter countTo={1000}></Counter>+ Servers
              </motion.div>
            ),
          },
          {
            title: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Nuke Protection
              </motion.div>
            ),
            description: (
              <motion.div
                className="flex items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <Counter countTo={1000}></Counter>+ Servers
              </motion.div>
            ),
          },
        ].map((item, index) => (
          <div key={index} className="mx-4 my-6">
            <h3 className="text-5xl font-bold">{item.title}</h3>
            <p className="text-gray-500 text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AutoModeration() {
  return (
    <div className="grid grid-cols-2 pt-14 pb-4 bg-[#1b1b1d] h-screen">
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <motion.h3
            className="text-5xl font-bold my-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Auto Mod
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="my-4"
          >
            Wick has a very unique auto mod that is based on a heat concept. The
            more filters you trigger, the quicker Wick is to silence you.
          </motion.h2>
          <div>
            <motion.div
              className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Advanced Anti Spam
            </motion.div>
            <motion.div
              className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Advanced Anti Raid
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-10">
        <ChatBox></ChatBox>
      </div>
    </div>
  );
}

export function NukeProtection() {
  return (
    <div className="grid grid-cols-2 pt-14 pb-4 bg-[#1b1b1d] h-screen">
      <div className="flex items-center justify-center">
        <NukeProtectionLogs></NukeProtectionLogs>
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <div>
          <motion.h3
            className="text-5xl font-bold my-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Anti Nuke
          </motion.h3>
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="my-4"
          >
            Wick brought the concept of "Anti Nuke" to Discord years ago, and
            the system has been perfected ever since. Wick will monitor the
            activity of your staff members and will react if a weird behaviour
            (that you specify) is met. The days of you losing your entire server
          </motion.h2>

          <div className="grid items-end">
            <motion.div
              className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Bans/Kicks Monitoring
            </motion.div>
            <motion.div
              className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Channel Creations/Deletions
            </motion.div>
            <motion.div
              className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Role Creations/Deletions
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Verification() {
  return (
    <div className="grid grid-cols-2 pt-14 pb-4 bg-[#1b1b1d] h-screen">
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <motion.h3
            className="text-5xl font-bold my-4"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            Verification
          </motion.h3>
          <motion.h2
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2 }}
            className="my-4"
          >
            You can use a 'Press to enter' type of verification or you can use
            Wick's custom captcha that members need to answer before gaining
            access to your server. Verification is super useful against raids
          </motion.h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Verify></Verify>
      </div>
    </div>
  );
}

export function MoreFeatures() {
  const cards = Array.from({ length: 8 }).map((_, index) => (
    <FeatureCard
      key={index}
      index={index + 1}
      title="Backup System"
      description="Take/Load backups and syncrhonize them efficiently with your server."
    />
  ));
  const chunks = cards.reduce((acc, card, index) => {
    const chunkIndex = Math.floor(index / 4);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(card);
    return acc;
  }, [] as React.ReactNode[][]);

  return (
    <div className="pt-14 pb-4 bg-[#1b1b1d] h-screen">
      <h3 className="text-3xl font-bold text-center my-10">More Features</h3>
      {chunks.map((chunk, index) => (
        <div key={index} className="flex justify-center my-5">
          {chunk.map((card, index) => (
            <div key={index} className="mx-2">
              {card}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Feedback() {
  return (
    <div className="pt-14 pb-4 bg-[#1b1b1d] h-screen flex justify-center items-center">
      <FeedbackSlide></FeedbackSlide>
    </div>
  );
}

export function InviteBlock() {
  return (
    <div className="pt-14 pb-4 bg-[#1b1b1d] flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center bg-[linear-gradient(300deg,#1d82ff,#ff1d50,#1d96ff)] rounded-lg px-14 py-12 text-white">
        <h1 className="text-7xl font-bold wrap-normal text-left px-18 my-2">
          Invite Wick
        </h1>
        <h2 className="text-md text-center my-2 max-w-lg">
          An advanced fully customizable moderation bot at your service with a
          lot of utilities and a dashboard to make your life easy.
        </h2>
        <div className="flex items-center justify-center my-10">
          <WavingButton className="rounded-l-lg">Invite Me</WavingButton>
          <WavingButton className="rounded-r-lg">Dashboard</WavingButton>
        </div>
      </div>
    </div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);

  return (
    <section className="img-container">
      <div ref={ref} className="w-full">
        {children}
      </div>
    </section>
  );
}
const pages = [
  {
    name: "",
    component: <HeroSection></HeroSection>,
  },
  {
    name: "",
    component: <ServerModeration></ServerModeration>,
  },
  {
    name: "Auto Moderation",
    component: <AutoModeration></AutoModeration>,
  },
  {
    name: "Raid Protection",
    component: <NukeProtection></NukeProtection>,
  },
  {
    name: "Verification",
    component: <Verification></Verification>,
  },
  {
    name: "More Features",
    component: <MoreFeatures></MoreFeatures>,
  },
  {
    name: "Feedback",
    component: <Feedback></Feedback>,
  },
  {
    name: "Invite Block",
    component: <InviteBlock></InviteBlock>,
  },
];
export function Welcome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [scope, animate] = useAnimate();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newPage = Math.min(
      pages.length - 1,
      Math.floor(latest * pages.length)
    );
    setCurrentPage(newPage);
  });

  return (
    <div className="w-full" ref={scope}>
      <Navbar />
      {pages.map((image) => (
        <Image key={image.name} id={image.name} children={image.component} />
      ))}
      <div className="flex items-center justify-center">
        {/* {pages[currentPage]?.name && (
          <motion.div
            className="text-white text-2xl font-bold fixed bottom-0 text-center flex items-center justify-center w-full my-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {pages[currentPage]?.name || ""}
          </motion.div>
        )} */}

        <motion.div
          className="progress flex justify-center text-center text-white text-2xl font-bold"
          style={{ scaleX }}
        ></motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
}
