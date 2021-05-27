chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onActivated.addListener(async info => {
    const tab = await chrome.tabs.get(info.tabId);
    const isGoogleCalendar = tab.url.startsWith('https://calendar.google.com/');

    if (isGoogleCalendar) {
      chrome.action.setIcon({
        path: {
          "16": "/images/icon_16.png",
          "32": "/images/icon_32.png",
          "48": "/images/icon_48.png",
          "128": "/images/icon_128.png"
        }
      });
      chrome.action.enable(tab.tabId);
    } else {
      chrome.action.setIcon({
        path: {
          "16": "/images/icon_16_disabled.png",
          "32": "/images/icon_32_disabled.png",
          "48": "/images/icon_48_disabled.png",
          "128": "/images/icon_128_disabled.png"
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
