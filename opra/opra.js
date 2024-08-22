function toggleDropdown() {
  var dropdown = document.getElementById("divisiDropdown");
  var arrow = document.querySelector(".arrow");
  dropdown.classList.toggle("show");
  arrow.classList.toggle("rotate");

  if (dropdown.classList.contains("show")) {
    var links = dropdown.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].style.setProperty("--i", i);
    }
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var arrows = document.getElementsByClassName("arrow");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        arrows[i].classList.remove("rotate");
      }
    }
  }
};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar2").style.top = "0";
  } else {
    document.getElementById("navbar2").style.top = "-120px";
  }
}

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

const number = document.getElementById("number");
let count = 0;
const targetNumber = 6; // Ganti dengan angka yang diinginkan
const interval = 100; // Kecepatan perubahan angka (ms)

function animateNumber() {
  if (count < targetNumber) {
    count++;
    number.textContent = count;
    setTimeout(animateNumber, interval);
  }
}

animateNumber();
