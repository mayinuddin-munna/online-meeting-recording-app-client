import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { Button } from "./common/Button";

export default function ShareScreenButton({ onClick }) {
  return (
    <Button onClick={onClick} className="py-2 px-8 text-xl">
      <HiDesktopComputer />
    </Button>
  );
}
