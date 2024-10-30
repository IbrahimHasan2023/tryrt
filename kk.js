const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessButton = document.getElementById("guessButton");
const userGuessInput = document.getElementById("userGuess");
const messageDisplay = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", () => {
  const userGuess = Number(userGuessInput.value);
  attempts++;

  if (userGuess === targetNumber) {
    messageDisplay.textContent = ` تهانينا! لقد خمنت الرقم ${targetNumber} في ${attempts} محاولات.`;
    guessButton.disabled = true; // تعطيل الزر بعد الفوز
    restartButton.style.display = "block"; // إظهار زر إعادة البدء
  } else if (userGuess < targetNumber) {
    messageDisplay.textContent = "الرقم أكبر. حاول مرة أخرى.";
  } else {
    messageDisplay.textContent = "الرقم أقل. حاول مرة أخرى.";
  }

  userGuessInput.value = ""; // مسح المدخل بعد كل تخمين
});

// إعادة بدء اللعبة
restartButton.addEventListener("click", () => {
  location.reload(); // إعادة تحميل الصفحة
});
