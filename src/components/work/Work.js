import React, { useState, useEffect, useRef } from "react";
import "./work.css";
import Card from "./Card";
import { data } from "./Workdata";
import Svg from "../Svg";
import { motion } from "framer-motion";

function Work() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // const card = useRef();

  return (
    <div className="container">
      <h1 className="hero__heading">My Work</h1>
      <motion.div ref={carousel} className="card__container">
        <motion.div
          className="card__carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {data.map((work) => (
            <Card work={work} key={work.image} />
          ))}
        </motion.div>
      </motion.div>
      <div className="svg__container">
        <Svg />
        <Svg />
      </div>
    </div>
  );
}

export default Work;
