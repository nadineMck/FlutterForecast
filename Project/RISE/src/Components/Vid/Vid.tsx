import "./Vid.scss";
import { useScroll, useTransform, motion } from "framer-motion";

function Vid() {
  const { scrollY } = useScroll();
  const spacerHeight = 4000;
  const scale = useTransform(
    scrollY,
    [spacerHeight, spacerHeight + window.innerHeight],
    [0.2, 1]
  );
  const textTrans = useTransform(
    scrollY,
    [spacerHeight, spacerHeight + window.innerHeight],
    [window.innerHeight, 0]
  );
  //const scale = useTransform(scrollY, [0, window.innerHeight], [0.2, 1]);
  //const textTrans = useTransform(
  //  scrollY,
  //  [0, window.innerHeight],
  //  [window.innerHeight, 0]
  //);

  return (
    <div>
      <div className="spacer"></div>
      <section id="video">
        <div className="shim"></div>
        <div className="video__sticky">
          <motion.video
            className="main__video"
            autoPlay
            muted
            loop
            playsInline
            src="/Untitled video.mp4"
            style={{ scale }}
          ></motion.video>
          <div className="video__text__overlay">
            <motion.h2
              className="text__header__left"
              style={{ x: useTransform(textTrans, (value) => -value) }}
            >
              SHOW
            </motion.h2>
            <motion.h2
              className="text__header__right"
              style={{ x: useTransform(textTrans, (value) => value) }}
            >
              CASE
            </motion.h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vid;
