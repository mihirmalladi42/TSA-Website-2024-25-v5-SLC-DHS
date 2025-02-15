document.getElementById("addressLoc").innerHTML = "Your order will be delivered to " + localStorage.getItem("address") + ", " + localStorage.getItem("town") + ", " + localStorage.getItem("zip") + " within 25 minutes.";

var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
if (currentList.length == 0) {
    localStorage.clear();
} else {
    currentList.sort();
    var ul = document.getElementById("unorderedList");

var current = currentList[0];
var currentCount = 1;

for (var i = 1; i < currentList.length; i++) {
  if (currentList[i] == current) {
    currentCount++;
  } else {
    var li = document.createElement("li");
    li.textContent = current + " x" + currentCount;
    ul.appendChild(li);
    
    current = currentList[i];
    currentCount = 1;
  }
}
var li = document.createElement("li");
li.textContent = current + " x" + currentCount;
ul.appendChild(li);
localStorage.clear();
}

