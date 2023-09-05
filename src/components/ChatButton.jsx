import React from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { Button } from "./common/Button";

export default function ShareScreenButton({ onClick }) {
  return (
    <Button onClick={onClick} className="py-2 px-8 text-xl">
      <HiChatAlt2 />
    </Button>
  );
}
