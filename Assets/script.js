// API URL and key
var url =
  "https://api.currentsapi.services/v1/search?" +
  "keywords=Amazon&language=en&" +
  "apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";
// request from the API
var req = new Request(url);
fetch(req)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // for loop after for each title,description,img, url
    for (let i = 0; i < response.news.length; i++) {
      const oneNews = response.news[i];

      let newString = `<h1 class = col-7>${response.news[i].title}</h1>
    <div class = col-5>${response.news[i].description}</div>
    <img class = col-5 src="${
      response.news[i].image === "None"
        ? "./Assets/spillTheTea.PNG"
        : response.news[i].image
    }">
    <div class = col-4>${response.news[i].url}</div>`;

      let returnInfo = fragmentFromString(newString);
      document.querySelector(".container1").appendChild(returnInfo);
    }
  });

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
