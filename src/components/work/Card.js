import React, { useRef, useState } from "react";
import Images from "../Images";
import { motion } from "framer-motion";

function Card({ work }) {
  const details = useRef();
  const [hover, setHover] = useState(false);

  const linkClick = (e) => {
    const url = e.target.dataset.href;
    window.open(url);
  };

  const hoverEffect = () => {
    const cardDetails = details.current;
    if (!hover)
      cardDetails.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    else {
      cardDetails.style.clipPath =
        "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
      setHover(false);
    }
  };

  return (
    <motion.div
      className="card"
      onHoverStart={() => {
        setHover(true);
        hoverEffect();
      }}
      onHoverEnd={() => {
        setHover(false);
        hoverEffect();
      }}
      onTap={() => {
        setHover(true);
        hoverEffect();
      }}
    >
      <img src={Images[work.image]} alt="" />
      <div ref={details} className="card__details">
        <p>{work.name}</p>
        <p>{work.description}</p>
        <motion.button
          data-href={work.link}
          className="card__btn"
          onClick={linkClick}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Visit Site
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Card;
