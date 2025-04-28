import {
  useMotionValue,
  motion,
  animate,
  useInView,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({
  countTo,
  duration,
}: {
  countTo: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const rounded = useTransform(() => Math.round(count.get()));

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, countTo, { duration: duration || 3 });
      return () => controls.stop();
    } else {
      count.set(0);
    }
  }, [isInView]);

  return <motion.pre ref={ref}>{rounded}</motion.pre>;
}
