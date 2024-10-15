import "./style.css";

//make a funtion that activates dropdown on click
function dropDown(e) {
    e.target.classList.toggle("active");
    console.log(e.target.classList)
}

const button = document.getElementById("trigger");
button.addEventListener("click", dropDown);
