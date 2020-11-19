fileNames = [
  "puppies1.lpg",
  "puppies2.lpg",
  "puppies3.lpg",
  "puppies4.lpg",
  "puppies5.lpg"
]

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs){
  let r = Math.floor(Math.random() * fileNames.length);
  let file = 'puppies/' + fileNames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}
