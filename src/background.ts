import { Message } from "./types";

const displayList: {
  [tabId: number]: boolean;
} = {};

chrome.action.onClicked.addListener(function (tab) {
  console.log("Background Init", tab);
  if (tab?.id) {
    displayList[tab.id] = !(displayList[tab.id] ?? false);
    chrome.tabs.sendMessage(tab.id, {
      type: Message.Display,
      data: {
        value: displayList[tab.id],
      },
    });
  }
});

console.log("Background Init", chrome);
