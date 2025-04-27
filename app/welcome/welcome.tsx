import { HomePageButton } from "../components/Buttons";
import { Navbar } from "../components/Navbar";
import "./welcome.css";
import { ChatBox } from "./Chatbox";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import React from "react";
import { Verify } from "./Verify";
export function HeroSection() {
  return (
    <main className="pt-16 first h-screen w-full">
      <div className="flex items-center justify-center pt-16 pb-4 w-full px-16">
        <div className="w-1/2">
          <h1 className="text-7xl font-bold wrap-normal text-left px-18">
            Discord moderation and security that is always one step ahead
          </h1>
          <div className="flex items-center justify-center mt-10">
            <div className="mx-3">
              <HomePageButton>Invite Me</HomePageButton>
            </div>
            <div className="mx-3">
              <HomePageButton>Dashboard</HomePageButton>
            </div>
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
            title: "Server Moderation",
            description: <div>3000+ Servers</div>,
          },
          {
            title: "Raid Protection",
            description: <div>1000+ Servers</div>,
          },
          {
            title: "Nuke Protection",
            description: <div>1000+ Servers</div>,
          },
        ].map((item) => (
          <div key={item.title} className="mx-4 my-6">
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
          <h3 className="text-5xl font-bold">Auto Mod</h3>
          <h2>
            Wick has a very unique auto mod that is based on a heat concept. The
            more filters you trigger, the quicker Wick is to silence you.
          </h2>
          <div>
            <div className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5">
              Advanced Anti Spam
            </div>
            <div className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5">
              Advanced Anti Raid
            </div>
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
        <img
          src="https://img.freepik.com/free-photo/car-with-full-moon-background_23-2151850155.jpg"
          alt="Raid Protection"
        />
      </div>
      <div className="flex items-center justify-center">
        <div>
          <h3 className="text-5xl font-bold">Anti Nuke</h3>
          <h2>
            Wick brought the concept of "Anti Nuke" to Discord years ago, and
            the system has been perfected ever since. Wick will monitor the
            activity of your staff members and will react if a weird behaviour
            (that you specify) is met. The days of you losing your entire server
            are long gone.
          </h2>

          <div className="grid items-end">
            <div className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5">
              Bans/Kicks Monitoring
            </div>
            <div className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5">
              Channel Creations/Deletions
            </div>
            <div className="flex items-center justify-center mt-2 bg-blue-400 rounded-full p-0.5 w-fit px-5">
              Role Creations/Deletions
            </div>
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
          <h3 className="text-5xl font-bold">Verification</h3>
          <h2>
            You can use a 'Press to enter' type of verification or you can use
            Wick's custom captcha that members need to answer before gaining
            access to your server. Verification is super useful against raids
            and attacks.
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Verify></Verify>
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
      <div ref={ref} className="w-full h-full">
        {children}
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export function Welcome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="w-full h-screen">
      <Navbar />
      {[
        {
          name: "Hero Section",
          component: <HeroSection></HeroSection>,
        },
        {
          name: "Server Moderation",
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
      ].map((image) => (
        <Image key={image.name} id={image.name} children={image.component} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
