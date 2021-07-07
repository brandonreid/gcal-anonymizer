chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('calendar.google.com')) {
    chrome.scripting.executeScript({
      files: ['anonymizer.js'],
      target: { tabId: tab.id }
    });
  } else {
    chrome.notifications.create('anonymizer-id', {
      type: 'basic',
      title: 'Oops!',
      message: 'Must be at calendar.google.com to anonymize.',
      iconUrl: "/images/icon_128.png"
    });
  }
});
