
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("header .logo");
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "/index.html"
        })
    }

    const whatsapp = document.getElementById("whatsapp-button");
    if (whatsapp) {
        whatsapp.addEventListener("click", () => {
            const phoneNumber = "+554132522450";
            const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(
                phoneNumber
            )}&type=phone_number&app_absent=0`;
            window.open(whatsappUrl, "_blank");
        });
    }
  
    const menuHamburger = document.getElementById("menu-hamburger");
    if (menuHamburger) {
        function hideElement(element) {
            element.style.display = "none";
        }
      
        function showElement(element) {
            element.style.display = "flex";
        }
      
        function fadeHideElement(element) {
            element.classList.remove("show");
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        }
      
        function fadeShowElement(element) {
            element.style.display = "flex";
            setTimeout(() => {
                element.classList.add("show");
            }, 10);
        }
      
        let menuIsToggled = false;
        
        const preventScroll = (event) => {
            event.preventDefault();
            window.scrollTo(0, 0);
        };
      
        document.getElementById("menu-toggle").addEventListener("click", () => {
        
            if (!menuIsToggled) {
                document.querySelector("body").style.overflowY = "hidden";
        
                window.addEventListener('scroll', preventScroll);
        
                fadeShowElement(menuHamburger);
                fadeShowElement(document.querySelector("#menu-hamburger .links"));
                fadeShowElement(document.querySelector("#menu-hamburger .social-medias"));
                menuIsToggled = true;
            } else {
                document.querySelector("body").style.overflowY = "visible";
            
                window.removeEventListener('scroll', preventScroll);
            
                fadeHideElement(menuHamburger);
                fadeHideElement(document.querySelector("#menu-hamburger .links"));
                fadeHideElement(document.querySelector("#menu-hamburger .social-medias"));
                menuIsToggled = false;
            }
        }); 
      
        function menuCheck(width) {
            try {
                const menuHamburger = document.getElementById("menu-hamburger");
      
                if (width <= 780) {
                    menuHamburger.innerHTML = "";
                    hideElement(document.querySelector("header .links"));
                    hideElement(document.querySelector("header .social-medias"));
                    showElement(document.getElementById("menu-toggle"));
            
                    const linksNew = document
                        .querySelector("header .links")
                        .cloneNode(true);
                    const socialMediasNew = document
                        .querySelector("header .social-medias")
                        .cloneNode(true);
            
                    menuHamburger.append(linksNew, socialMediasNew);
                } else if (width >= 780) {
                    showElement(document.querySelector("header .links"));
                    showElement(document.querySelector("header .social-medias"));
                    hideElement(document.getElementById("menu-toggle"));
                    hideElement(menuHamburger);
            
                    menuHamburger.innerHTML = "";
                    menuIsToggled = false;
                }
            } catch (error) {
                console.error(error);
            }
        }
      
        window.addEventListener("resize", (event) =>
            menuCheck(event.currentTarget.innerWidth)
        );
      
        menuCheck(window.innerWidth);
    }
});
