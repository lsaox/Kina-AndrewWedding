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