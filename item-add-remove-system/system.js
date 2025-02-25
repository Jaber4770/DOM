/* const items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click", function (e) {
        e.target.parentNode.removeChild(e.target);
    })
} */
const itemsContainer = document.getElementById("list-container");
itemsContainer.addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
});


document.getElementById("add-btn").addEventListener("click", function () {
    const li = document.createElement('li');
    li.innerText = "Brand new List Item";
    li.classList.add("item");
    const parentNode = document.getElementById("list-container");
    parentNode.appendChild(li);
})





