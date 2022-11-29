import React from "react";
import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
  "20% descuento en primera orden!",
  "Disfruta de tus compras de verano, a solo un Click!",
  "Dale LiKe! y Suscribete :)",
];

export default function Promotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2500);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2500);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide 
      container={containerRef.current}
      direction={show ? "left": "right"} in={show}
      timeout={{
        enter:500,
        exit:100
      }}>

        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
