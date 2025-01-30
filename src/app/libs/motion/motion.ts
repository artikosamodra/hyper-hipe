export const cardVariants = {
  center: {
    x: 0,
    opacity: [0, 1],
    scale: 1,
    zIndex: 10,
    transition: { duration: 0.5 },
  },
  left: {
    x: -100,
    opacity: [0, 1],
    scale: 0.9,
    zIndex: 1,
    position: "absolute" as "absolute",
    transition: { duration: 0.5 },
  },
  right: {
    x: 100,
    opacity: [0, 1],
    scale: 0.9,
    zIndex: 1,
    position: "absolute" as "absolute",
    transition: { duration: 0.5 },
  },
};

export const mobileCardVariants = {
  center: {
    x: 0,
    opacity: [0, 1],
    scale: 0.8,
    zIndex: 10,
    transition: { duration: 0.5 },
  },
  left: {
    x: -60,
    opacity: [0, 1],
    scale: 0.6,
    zIndex: 1,
    position: "absolute" as "absolute",
    transition: { duration: 0.5 },
  },
  right: {
    x: 60,
    opacity: [0, 1],
    scale: 0.6,
    zIndex: 1,
    position: "absolute" as "absolute",
    transition: { duration: 0.5 },
  },
};
export const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
