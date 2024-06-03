// Reset Button 
const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    let text = document.getElementById("text");    
    text.value = "";
    document.getElementById("title").textContent = "";
    document.getElementById("destiny-number").textContent = "0";
    document.getElementById("heart-desire").textContent = "0";
    document.getElementById("personality-number").textContent = "0";
});

// Numerology Chart
const numerologyChart = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

//Calcute sum of characters
function calculateSum(Name, includeVowels) {
  let sum = 0;
  const vowels = ['A', 'E', 'I', 'O', 'U'];

  for (let char of Name.toUpperCase()) {
      if (numerologyChart[char]) {
          if ((includeVowels === undefined) || (includeVowels && vowels.includes(char)) || (!includeVowels && !vowels.includes(char))) {
              sum += numerologyChart[char];
          }
      }
  }

  return sum;
}

// Reduce numbers to single digit & to master number 11 & 22
function toSingleDigit(num) {
  while (num > 9 && num !== 11 && num !== 22) {
      num = num.toString().split('').reduce((runningTotal, digit) => runningTotal + parseInt(digit), 0);
  }
  return num;
}

// Calculate Destiny Number
function destinyNumber(Name) {
  const sum = calculateSum(Name);
  return toSingleDigit(sum);
}

// Calculate Soul Urge Number
function soulNumber(Name) {
  const sum = calculateSum(Name, true);
  return toSingleDigit(sum);
}

// Calculate Personality Number
function personalityNumber(Name) {
  const sum = calculateSum(Name, false);
  return toSingleDigit(sum);
}

// Putting All Together
function numerologyReport(Name) {
  return {
      destiny: destinyNumber(Name),
      soul: soulNumber(Name),
      personality: personalityNumber(Name)
  };
}

// Final Report
const calculateNumerology = document.getElementById("calculate");
calculateNumerology.addEventListener("click", function() {
  let Name = document.getElementById("text").value;
  let numerology = numerologyReport(Name);
  
  document.getElementById("title").textContent = Name;
  document.getElementById("destiny-number").textContent = numerology.destiny;
  document.getElementById("heart-desire").textContent = numerology.soul;
  document.getElementById("personality-number").textContent = numerology.personality;
});


