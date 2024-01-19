let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let desc = document.querySelector(".contentBox");
    desc.classList.toggle("active");

    if (desc.classList.contains("active")) {
        return (btn.textContent = "Read less");
    }

    return (btn.textContent = "Read more");
});
