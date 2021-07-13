const button = document.getElementById('btn');
const content = document.getElementById('aboutButton')

button.addEventListener("click", function () {

    content.style.display = (aboutButton.dataset.button ^= 1) ? "block" : "none";

})


