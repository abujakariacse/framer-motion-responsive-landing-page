import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbookExposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const laptop = {
  initial: { y: 0, scale: 5, rotate: 0 },
  animate: {
    scale: 1,
    rotate: -30,
    y: 20,

    transition: {
      duration: 1,
      y: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden ">
      <Container className="grid  grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center mt-16">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry</span> <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-dark-gray max-w-[40ch] my-[18px]"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="font-semibold text-primary-foreground">
              iRepair
            </span>
            , your one-stop place for all kinds of
            <span className="font-semibold text-primary-foreground">
              {" "}
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div variants={laptop} initial="initial" animate="animate">
          <img
            className=" h-[95%] object-contain mt-10 w-3/4 lg:w-full mx-auto"
            src={macbook}
            alt="macbook exposed"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
