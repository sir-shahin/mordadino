"use client";

import React, { useEffect, useRef } from "react";

import { Typography } from "@mui/material";

export const H2LightEffect = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;

      const { left, top, width, height } = textRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      textRef.current.style.setProperty("--mouse-x", `${x}%`);
      textRef.current.style.setProperty("--mouse-y", `${y}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Typography
      ref={textRef}
      variant="h3"
      fontWeight="bold"
      component="h2"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        background: "linear-gradient(45deg, #A85400, #A85400 30%,#686868,rgb(255, 245, 158))",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        cursor: "default",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.8) 0%, transparent 50%)",
          mixBlendMode: "overlay",
          pointerEvents: "none",
          borderRadius: "inherit",
        },
      }}
    >
      محصولتو از هر جای دنیا پیدا کن
    </Typography>
  );
};
