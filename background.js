chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onActivated.addListener(async info => {
    const tab = await chrome.tabs.get(info.tabId);

    const isGoogleCalendar = tab.url.startsWith('https://calendar.google.com/');

    if (isGoogleCalendar) {
      chrome.action.setIcon({
        path: {
          "16": "/images/get_started16.png",
          "32": "/images/get_started32.png",
          "48": "/images/get_started48.png",
          "128": "/images/get_started128.png"
        }
      });
      chrome.action.enable(tab.tabId);
    } else {
      chrome.action.setIcon({
        path: {
          "16": "/images/get_started16_disabled.png",
          "32": "/images/get_started32_disabled.png",
          "48": "/images/get_started48_disabled.png",
          "128": "/images/get_started128_disabled.png"
        }
      });
      chrome.action.disable(tab.tabId);
    }
  });

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      files: ['anonymizer.js'],
      target: { tabId: tab.id }
    });
  });
});
