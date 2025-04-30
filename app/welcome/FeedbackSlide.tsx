import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, useState, type SVGProps } from "react";

export default function UsePresenceData() {
  const items = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Server Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      feedback:
        "Wick has transformed our server's security. The auto-moderation features are incredibly effective at keeping our community safe.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      feedback:
        "The verification system is a game-changer. It's helped us prevent countless raid attempts while keeping the process user-friendly.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Moderator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      feedback:
        "As a moderator, I love how Wick gives us powerful tools while being easy to use. The backup system has saved us multiple times.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Server Admin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      feedback:
        "The anti-spam features are incredibly effective. We've seen a 90% reduction in spam messages since implementing Wick.",
    },
    {
      id: 5,
      name: "Lisa Patel",
      role: "Community Leader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      feedback:
        "Wick's customer support is outstanding. They're always quick to help and implement new features based on community feedback.",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Server Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      feedback:
        "The dashboard is intuitive and powerful. It gives us complete control over our server's security settings.",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = wrap(0, items.length, currentIndex + newDirection);
    setSelectedItem(items[nextIndex]);
    setDirection(newDirection);
  }

  return (
    <div style={container}>
      <motion.button
        initial={false}
        animate={{ backgroundColor: "var(--hue-1)" }}
        aria-label="Previous"
        style={button}
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: "2px solid var(--hue-1)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={selectedItem.id} item={selectedItem} />
      </AnimatePresence>
      <motion.button
        initial={false}
        animate={{ backgroundColor: "var(--hue-1)" }}
        aria-label="Next"
        style={button}
        onClick={() => setSlide(1)}
        whileFocus={{ outline: "2px solid var(--hue-1)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
}

const Slide = forwardRef(function Slide(
  {
    item,
  }: {
    item: {
      id: number;
      name: string;
      role: string;
      avatar: string;
      feedback: string;
    };
  },
  ref: React.Ref<HTMLDivElement>
) {
  const direction = usePresenceData();
  const colors = [
    "linear-gradient(135deg, #1a1c1e 0%, #2d2f31 100%)",
    "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
    "linear-gradient(135deg, #1a1c1e 0%, #2d2f31 100%)",
    "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
    "linear-gradient(135deg, #1a1c1e 0%, #2d2f31 100%)",
    "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
  ];
  const color = colors[item.id - 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      style={{
        ...box,
        background: color,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <div style={{ ...contentContainer, position: "relative", zIndex: 1 }}>
        <img src={item.avatar} alt={item.name} style={avatar} />
        <h3 style={name}>{item.name}</h3>
        <p style={role}>{item.role}</p>
        <p style={feedback}>{item.feedback}</p>
      </div>
    </motion.div>
  );
});

/**
 * ==============   Icons   ================
 */
const iconsProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const box: React.CSSProperties = {
  width: "100%",
  maxWidth: "800px",
  minHeight: "400px",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
};

const contentContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
  padding: "20px",
  borderRadius: "15px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

const avatar: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid var(--hue-1)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
};

const name: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: 0,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const role: React.CSSProperties = {
  fontSize: "16px",
  color: "#8df0cc",
  margin: 0,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const feedback: React.CSSProperties = {
  fontSize: "18px",
  color: "#ffffff",
  lineHeight: "1.6",
  margin: 0,
  maxWidth: "600px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const button: React.CSSProperties = {
  backgroundColor: "var(--hue-1)",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
  border: "none",
  cursor: "pointer",
  color: "#ffffff",
};
