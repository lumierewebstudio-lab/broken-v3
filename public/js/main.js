(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-navigation");
  const navigationLinks = document.querySelectorAll(".main-navigation a");
  const loader = document.querySelector("#site-loader");

  /*
   * MOBILE NAVIGATION
   */

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  /*
   * LOADER
   *
   * Remove it from the document after its visual transition.
   */

  if (loader) {
    window.addEventListener("load", () => {
      window.setTimeout(() => {
        loader.remove();
      }, 1700);
    });
  }

  /*
   * SMOOTH INTERNAL NAVIGATION
   */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /*
   * FUTURE INTERACTION LAYER
   *
   * Future visual interactions, project filtering,
   * photography experiences, enquiry flows and
   * Cloudflare API calls will be added here without
   * changing the core visual system.
   */

})();
