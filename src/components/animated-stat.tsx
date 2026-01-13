
'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';

type AnimatedStatProps = {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
};

export function AnimatedStat({ from, to, prefix, suffix }: AnimatedStatProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return (
    <>
      {prefix && <span>{prefix}</span>}
      <motion.span ref={nodeRef}>{from}</motion.span>
      {suffix && <span>{suffix}</span>}
    </>
  );
}

    