const getArticleEasyCashID = (url) => {
  const articleParameters = url.split("/")[4];
  return articleParameters.slice(
      articleParameters.lastIndexOf("-") + 1
  )
};

chrome.tabs.onUpdated.addListener((tabId, statusTab, tab) => {
  if (tab.url && tab.url.includes("bons-plans.easycash")) {
    const articleEasyCashID = getArticleEasyCashID(tab.url);
    chrome.tabs.sendMessage(tabId, {
      articleID: articleEasyCashID,
    });
  }
});