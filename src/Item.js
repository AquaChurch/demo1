import React, {useRef} from "react";
import {motion, useDomEvent, useMotionValue} from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { category, title } = items.find(item => item.id === id);

  const ref = useRef();

  const y = useMotionValue(0);

  useDomEvent(ref,'wheel',(e)=>{
    e.preventDefault();
    y.set(y.get() - e.deltaY);
  })

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/demo1" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div style={{y}} className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`/demo1/images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div layoutId={`content-container-${id}`} className="content-container">
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
