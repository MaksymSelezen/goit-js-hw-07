"use strict";

const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value.trim();
  outputElement.textContent = inputValue ? inputValue : "Anonymous";
});
