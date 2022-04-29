// Toggle the .pa-fixed-header class when the user
// scroll 100px
const switchbtn = document.querySelector(".box");
window.onscroll = () => {
  scrollNavbar();
};

scrollNavbar = () => {
  // Target elements
  const navBar = document.getElementById("navnorm");
  const links = document.querySelectorAll("#link");

  if (document.documentElement.scrollTop > 80) {
    navBar.classList.add("navsticky");
    links.forEach((navlink) => {
      navlink.classList.add("text-black");
    });

    // Change the color of links on scroll
  } else {
    navBar.classList.remove("navsticky");

    // Change the color of links back to default
    links.forEach((navlink) => {
      navlink.classList.remove("text-black");
    });
  }
};
switchbtn.addEventListener("click", function () {
  if (switchbtn.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
