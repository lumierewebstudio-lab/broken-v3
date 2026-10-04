(() => {
  "use strict";

  /*
   * ƁƦƠҠЄƝ — CINEMATIC ENGINE
   *
   * This file controls:
   * - cinematic page entrance
   * - scroll choreography
   * - text reveal / disappearance
   * - moving background typography
   * - horizontal text drift
   * - depth / parallax
   * - tap feedback
   * - magnetic interactions
   * - navigation
   * - section progress
   *
   * No external libraries.
   */

  const body = document.body;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* ========================================================
     NAVIGATION
     ======================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const open = navigation.classList.toggle("is-open");

      menuToggle.classList.toggle("is-open", open);

      menuToggle.setAttribute(
        "aria-expanded",
        String(open)
      );

      menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
      );

      body.classList.toggle("menu-open", open);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuToggle.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

        body.classList.remove("menu-open");
      });
    });
  }


  /* ========================================================
     CINEMATIC LOADER
     ======================================================== */

  const loader = document.querySelector("#site-loader");

  window.addEventListener("load", () => {
   
