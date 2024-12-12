"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const title = useRef(null);
  const main = useRef(null);

  //   useEffect(() => {
  //     const timeline = gsap.timeline();
  //     timeline.to(title.current, { x: "0", duration: "1" });
  //   }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "main.current",
        markers: true,
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    });
    timeline.to("title.current", { x: "0", duration: "1" });
  }, []);

  return (
    <section
      ref={main}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "1024px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "200px",
          fontWeight: 700,
          width: "100%",
        }}
      >
        <h1 ref={title} style={{ transform: "translateX(-51%)" }}>
          YURIM
        </h1>
        <h1 style={{ transform: "translateX(60%)" }}>PORTFOLIO</h1>
      </div>
    </section>
  );
};

export default Main;
