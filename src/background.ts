chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab?.id)
    chrome.tabs.sendMessage(tab.id, { message: "Hello from extension!" });
});
