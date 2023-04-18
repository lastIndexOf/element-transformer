import { Message } from "./types";
import { throttle } from "./utils/throttle";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("Receive from Background", msg);
  const { type, data } = msg;

  switch (type) {
    case Message.Display:
      handleDisplay(data);
    default:
      break;
  }
});

// !TODO Type Details
const handleDisplay = (data: any) => {
  const { value } = data;

  if (value) window.addEventListener("mousemove", handleMouseMove);
  else window.removeEventListener("mousemove", handleMouseMove);
};

const handleMouseMove = throttle((e: MouseEvent) => {
  // console.info(e.target);
  // getComputedStyle
  if (e.target) {
    (e.target as any).style.boxShadow = "0 0 0 2px #fa3140";
  }
}, 100);

console.info("Extension Init");
