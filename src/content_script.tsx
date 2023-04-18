enum Message {
  Display = "display",
}

// interface MessageData {
//   [Message.Display]: {};
// }

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("Receive from popup", msg);
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

const handleMouseMove = (e: MouseEvent) => {
  console.info(e.target);
};

console.info("Extension Init");
