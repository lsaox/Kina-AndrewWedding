document.addEventListener("DOMContentLoaded", () => {
  const plusOneRadios = document.querySelectorAll('input[name="plus_one"]');
  const plusOneWrapper = document.getElementById("plusOneNameWrapper");
  const plusOneInput = plusOneWrapper
    ? plusOneWrapper.querySelector('input[name="plus_one_name"]')
    : null;

  if (plusOneRadios.length && plusOneWrapper) {
    plusOneRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "Yes" && radio.checked) {
          plusOneWrapper.classList.remove("hidden");
        } else if (radio.value === "No" && radio.checked) {
          plusOneWrapper.classList.add("hidden");
          if (plusOneInput) plusOneInput.value = "";
        }
      });
    });
  }
});


  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".details-card");

    // Only apply hover behavior on devices that actually support hover (desktops)
    const prefersHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!prefersHover) {
      // On touch devices, let <details> behave normally (tap to open/close)
      return;
    }

    cards.forEach(card => {
      let timeout;

      card.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        card.open = true;
      });

      card.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          card.open = false;
        }, 300);
      });
    });
  });
