//creating a "close" button and append it to each list item

const listEl = document.getElementsByTagName("li");
let i;
for (i = 0; i < listEl.length; i++) {
    const span = document.createElement("span");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    listEl[i].appendChild(span);
}

//click on close button to hide the current list item

const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const div = this.parentElement;
        console.log(div);
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}