"use client";

import React from "react";

import { Box, Typography } from "@mui/material";

export const DynamicText = () => {
  const sentences = ["لنت ترمز پرادو ۲۰۲۲ میخوام", "موس فیلیپس بی سیم میخواستم", "پودر قهوه‌ی اصل برام پیدا کن"];

  const typingSpeedMs = 55;
  const deletingSpeedMs = 30;
  const pauseAtSentenceEndMs = 1000;
  const pauseBeforeNextSentenceMs = 400;

  const [sentenceIndex, setSentenceIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentSentence = sentences[sentenceIndex % sentences.length];

    if (!isDeleting && displayText === currentSentence) {
      const endPause = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAtSentenceEndMs);
      return () => clearTimeout(endPause);
    }

    if (isDeleting && displayText === "") {
      const nextPause = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, pauseBeforeNextSentenceMs);
      return () => clearTimeout(nextPause);
    }

    const step = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText(currentSentence.slice(0, displayText.length + 1));
      }
    };

    const timeout = setTimeout(step, isDeleting ? deletingSpeedMs : typingSpeedMs);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, sentenceIndex, sentences]);

  return (
    <Box mb={5} px={2}>
      <Typography component="div" color="gray" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        مثلا: {displayText}
      </Typography>
    </Box>
  );
};
