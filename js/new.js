function hideElement(element) {
    element.style.display = "none"
  }
  
  function showElement(element) {
    element.style.display = "flex";
  }

  let menuIsToggled = false

  document.getElementById("menu-toggle").addEventListener("click", () => {
    if (!menuIsToggled) {
      showElement(document.getElementById("menu-hamburger"));
      showElement(document.querySelector("#menu-hamburger .links"));
      showElement(document.querySelector("#menu-hamburger .social-medias"));
      menuIsToggled = true
    } else if (menuIsToggled) {
      hideElement(document.getElementById("menu-hamburger"));
      hideElement(document.querySelector("#menu-hamburger .links"));
      hideElement(document.querySelector("#menu-hamburger .social-medias"));
      menuIsToggled = false
    }
  })

  function menuCheck(width) {
    try {
      const menuHamburger = document.getElementById("menu-hamburger");

      if (width <= 780) {
        hideElement(document.querySelector("header .links"));
        hideElement(document.querySelector("header .social-medias"));
        showElement(document.getElementById("menu-toggle"));

        const linksNew = document.querySelector("header .links").cloneNode(true);
        const socialMediasNew = document.querySelector("header .social-medias").cloneNode(true);

        menuHamburger.append(linksNew,socialMediasNew);

      } else if (width >= 780) {
        showElement(document.querySelector("header .links"));
        showElement(document.querySelector("header .social-medias"));
        hideElement(document.getElementById("menu-toggle"));
        hideElement(menuHamburger)

        menuHamburger.innerHTML = ""
        menuIsToggled = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  window.addEventListener("resize", (event) => menuCheck(event.currentTarget.innerWidth));

  menuCheck(window.innerWidth)