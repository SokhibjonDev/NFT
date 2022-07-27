window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > 80) {
      document.querySelector(".Navbar").style.background =
        "rgba(255, 255, 255, 0.07)";
    } else {
      document.querySelector(".Navbar").style.background = "transparent";
    }
  } 
);


