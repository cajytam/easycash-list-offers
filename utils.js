export async function getActiveTabURL() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
}

export const getArticleEasyCashID = (url) => {
    const articleParameters = url.split("/")[4];
    return articleParameters.slice(
        articleParameters.lastIndexOf("-") + 1
    )
};