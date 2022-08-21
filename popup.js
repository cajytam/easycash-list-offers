import { getActiveTabURL, getArticleEasyCashID } from "./utils.js";

const baseUrl = 'https://bons-plans.easycash.fr/buybox/products/list/';

document.addEventListener("DOMContentLoaded", async () => {
    const activeUrlTab = await getActiveTabURL();
    const articleEasyCashID = getArticleEasyCashID(activeUrlTab.url);
    if (activeUrlTab.url.includes("bons-plans.easycash") && articleEasyCashID) {
        const offerList = document.getElementById('list-offers');
        const linkToListOffer = document.createElement('a');
        const textLinkToListOffer = document.createTextNode('Ouvrir liste des offres');
        linkToListOffer.setAttribute('href', baseUrl + articleEasyCashID);
        linkToListOffer.setAttribute('target', '_blank');
        linkToListOffer.appendChild(textLinkToListOffer)
        offerList.appendChild(linkToListOffer);
    } else {
        const container = document.getElementById("title");
        container.innerHTML = "Vous n'êtes pas sur une fiche produit sur le site EasyCash.fr</div>";
    }
});