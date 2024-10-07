function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на елементи
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Функція для створення нових блоків
function createBoxes(amount) {
  // Очищуємо попередні блоки перед додаванням нових
  destroyBoxes();

  const fragment = document.createDocumentFragment(); // Використовуємо фрагмент для оптимізації

  // Створюємо блоки
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10; // Перший блок 30x30, кожен наступний на 10px більше

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginTop = "10px";
    div.style.borderRadius = "8px"; // Округлення кутів
    fragment.appendChild(div); // Додаємо блок до фрагмента
  }

  // Додаємо всі блоки до контейнера за одну операцію
  boxesContainer.appendChild(fragment);
}

// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Обробник для кнопки "Create"
createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  // Валідація значення input (має бути в межах 1-100)
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Очищаємо поле input після створення
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

// Обробник для кнопки "Destroy"
destroyButton.addEventListener("click", destroyBoxes);
