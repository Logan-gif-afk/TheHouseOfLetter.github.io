/* =========================
   THE HOUSE OF LETTERS
   Main Script
========================= */


function enterHouse() {

    const cover = document.querySelector(".cover");

    cover.style.transition = "opacity 1.5s ease";

    cover.style.opacity = "0";


    setTimeout(() => {

        window.location.href = "foyer.html";

    }, 1500);

}
