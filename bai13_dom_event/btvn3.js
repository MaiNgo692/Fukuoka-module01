// Thêm thẻ i để hiện dấu đóng vào từng li
let toDoList = document.getElementsByTagName("li");
for(let i = 0; i < toDoList.length; i++){
    let iTag = document.createElement("i");
    iTag.className = "fa-solid fa-xmark close";
    toDoList[i].appendChild(iTag);
}
console.log(toDoList);

//Tìm các dấu đóng và check nếu nó được click chuột thì ẩn cả li
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
}
}
//Nếu click vào li nào thì li đó được chọn
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName == 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);

function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("item").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("You must write something!");
} else {
    document.getElementById("items").insertBefore(li,document.getElementById("items").childNodes[0]);
}
document.getElementById("item").value = "";

let iTag = document.createElement("i");
    iTag.className = "fa-solid fa-xmark close";
li.appendChild(iTag);
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}}