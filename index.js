// Write your code here!
const element = document.getElementsByTagName("main")[0];
element.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Roman is the champion";