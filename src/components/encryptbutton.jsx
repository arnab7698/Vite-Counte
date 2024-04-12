import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Example = ({name}) => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
      <EncryptButton name = {name}/>
    </div>
  );
};

const TARGET_TEXT = `🦋POKEMON🦋`;
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 30;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({name}) => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.00,
      }}
      whileTap={{
        scale: 1.00,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg  bg-neutral-700 px-8 py-1 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-red-300"
    >
      <div className="relative z-10 flex items-center gap-2" style = {{width : "auto"}}>

        <span>{text}</span>
        {name}

      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Example;