// ADD NEW ITEM TO END OF LIST
var newItem1 = document.createElement("li");
var endofthelist = document.createTextNode("cream");
newItem1.appendChild(endofthelist);
document.getElementsByTagName("ul")[0].appendChild(newItem1);

// ADD NEW ITEM START OF LIST
var newItem2 = document.createElement("li");
var startofthelist = document.createTextNode("kale");
newItem2.appendChild(startofthelist);
var orderedlist = document.getElementsByTagName("ul")[0];
orderedlist.insertBefore(newItem2, orderedlist.childNodes[0]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list1 = document.getElementsByTagName("li");

for(var i=0; i<list1.length; i++){
  var li = list1[i];
  li.className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var hlist2 = document.getElementsByTagName("h2");
var list = document.getElementsByClassName("cool");
if(hlist2.length>0){
  var h2 = hlist2[0];
  h2.innerHTML += "<span>" + ("hlist2").length + "</span>";
}
