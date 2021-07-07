browser.browserAction.onClicked.addListener((tab) => {
  if (tab.url.includes('calendar.google.com')) {
    browser.tabs.executeScript({
      file: '/anonymizer.js'
    });
  } else {
    browser.notifications.create('anonymizer-id', {
      "type": "basic",
      "iconUrl": browser.runtime.getURL("icons/icon_96.png"),
      "title": "Oops!",
      "message": "Must be at calendar.google.com to anonymize."
    });
  }
});
