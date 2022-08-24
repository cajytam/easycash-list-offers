export async function getActiveTabURL() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
}

export const getArticleEasyCashID = (url) => {
    let articleParameters = url.split("/")[4];
    articleParameters = articleParameters.split("?")[0];
    return articleParameters.slice(
        articleParameters.lastIndexOf("-") + 1
    )
};