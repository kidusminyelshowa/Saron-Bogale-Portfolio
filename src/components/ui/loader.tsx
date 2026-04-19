'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading or wait for window.load
    const handleLoad = () => {
      // Small buffer for the animation to be seen
      setTimeout(() => setIsLoaded(true), 4000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isLoaded && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#18542a] overflow-hidden"
        >
          <svg
            className="w-[150vw] min-w-[2000px] h-auto pointer-events-none"
            viewBox="0 0 1164.72 290.21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M10,229.53c48.61,8.25,83.24-27.29,98.37-48.61,30.13-42.46,65.9-159.37,123.02-147.67,11.19,2.29,14.04,10.24,9.59,9.1-11.92-3.06-32.84,5.17-37.45,21.17-12.76,44.33,9.55,90.89.38,137.73-5.44,27.81-27.41,77.1-79.34,75.67-27.67-.76-38.06-22.17-37.39-45.71.96-33.31,21.18-49.37,42.05-49.37,44.72,0,6.2,98.37,48.11,98.37,21.39,0,38.11-10.55,54.05-21.78,27.63-19.47,77.9-87.2,97.61-122.68s63.7-78.65,145.56-75.44c-81.86-3.44-119.92,34.39-145.56,76.59-28.1,46.26-46.45,128.13-6.47,138.04,27.75,6.88,58.93-41.73,74.75-73.15,10.48-20.81,60.31-96.08,71.77-115.57-11.92,19.95-103.6,175.85-48.84,186.11,64.66,12.11,147.21-176.94,154.09-193.68s17.63-80.48-14.9-66.73c-22.24,9.4-5.63,69.16,31.87,58.93,22.7-6.19,59.36-11.52,43.8,26.14-15.82,38.29-85,166.64-41.54,175.87,52.16,11.08,111.47-107.24,137.76-150.96-18.96,42.5-58.74,143.6-10.7,152.56,40.97,7.64,76.43-51.67,97.53-99.97s31.18-101.2,5.5-109.15-55.38,6.9-85.61,65.03,31.5,117.81,62.37,116.88c50.69-1.53,101.62-125.13,118.22-152.05,22.8-36.97,70.27-38.48,52.07,2.85-21.4,48.61-76.74,178.55-76.74,178.55,30.27-54.42,61.99-117.64,101.81-167.54,47.08-59.01,87.72-39.55,64.82,4.59-25.07,48.31-76.02,144.02-36.99,160.2s103.34-93.25,131.14-146.87"
              fill="none"
              stroke="#f3e8cc"
              strokeWidth="25"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3.5,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.2
              }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(243, 232, 204, 0.4))"
              }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
