// Reset Button 
const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    let text = document.getElementById("text");    
    text.value = "";
    document.getElementById("title").textContent = "Discover the meaning and significance of Chaldean numerology numbers.";
    document.getElementById("destiny-number").textContent = "0";
    document.getElementById("heart-desire").textContent = "0";
    document.getElementById("personality-number").textContent = "0";
    document.getElementById("personality-traits").textContent = "";
    document.getElementById("destiny-traits").textContent = "";
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

// Traits of Personality
const personalityTraits = {
  1: "The Natural Leader and Innovator: Number 1 is ruled by the Sun. Individuals born under the influence of number 1 act from a strong self-belief, have original ideas, and have a drive to be the best in every field they step or work they take.",  
  2: "The Caregiver and Harmoniser: Number 2 is ruled by the Moon. People with number 2 are known to be caring and peace maker. They try to build harmonic aura around themselves by supporting and avoiding clashes with others.",
  3: "The Creative and Expressive Soul: Number 3 is ruled by the Jupiter. Individuals who all have number 3 are highly ambitious in life due to which they like to learn and explore as much as possible. They have good stamina and an urge to live life to the fullest.",
  4: "The Organiser and Practical Person: Number 4 is ruled by the Uranus. Number 4 represents practicality and a realistic mindset. They approach life in a rigid method and are less prone to change. They have earthy wisdom.",
  5: "The Traveller and Explorer: Number 5 is ruled by the Mercury: They are a free spirit who likes to travel, indulge in adventures, and lead a life through learning and rich experiences.",
  6: "The Homemaker and Nourisher: Number 6 is ruled by the Venus: Number 6 embodies the characteristics of a nurturer and homemaker. They excel at handling family situations and relationships in a balanced way. They are magnetic and charming.",
  7: "The Wise and Spiritualist: Number 7 is ruled by the Neptune : Individuals with number 7 are philosophical and secretive. They have a thirst for knowledge and like to spend time in spiritual pursuits.",
  8: "The Determined and Achiever- Number 8 is ruled by the Saturn: Number 8 people are courageous and have a strong desire and willpower to make fortune in life. With their confidence and power, they have to face obstacles in life.",
  9: "The Humanitarian and Idealist- Number 9 is ruled by the Mars: 9 is the number of the idealist who believes in fighting for what they believe in and is right. They gain name and fame and do selfless work for the benefit of others."
}

// Traits of Distiny Numbers
const destinyTraits = {
  1: "Represents leadership, independence, and ambition. Individuals with this number are natural leaders, highly ambitious, and have a pioneering spirit. They are innovative thinkers with strong determination and confidence.",
  2: "Signifies diplomacy, sensitivity, and cooperation. People with this number are excellent mediators, highly sensitive and empathetic, preferring to work in teams and partnerships. They seek harmony and are often gentle and peace-loving.",
  3: "Highlights communication, creativity, and optimism. Those with this number are excellent communicators, highly creative, and often excel in the arts, writing, or public speaking. They are optimistic, enthusiastic, and enjoy social interactions.",
  4: "Embodies practicality, discipline, and reliability. Individuals with this number are practical, disciplined, and hardworking, often very organized and methodical. They value stability, security, and are seen as dependable and trustworthy.",
  5: "Values freedom, adaptability, and curiosity. People with this number seek adventure and new experiences, are highly adaptable, flexible, and curious. They are versatile, energetic, and thrive in dynamic environments.",
  6: "Emphasizes responsibility, harmony, and love. Those with this number are responsible, caring, and often take on the role of caretaker. They seek harmony in relationships, are nurturing, supportive, and have a strong connection to family and community.",
  7: "Focuses on introspection, spirituality, and wisdom. Individuals with this number are deep thinkers, highly spiritual, and often seek deeper meaning and truth. They are analytical, value solitude, and possess wisdom and insight.",
  8: "Centers on ambition, authority, and material success. People with this number are highly ambitious, driven, and often take on leadership roles. They focus on achieving material success, financial security, and desire power and influence.",
  9: "Represents compassion, idealism, and generosity. Those with this number are compassionate and humanitarian, striving to make the world a better place. They are highly creative, generous, selfless, and embrace universal love and unity.",
  11: "Carries the potent vibrations of intuition, inspiration, and spiritual insight. Individuals with this master number are highly intuitive, perceptive, and often possess psychic abilities. They are inspirational leaders and visionaries, sensitive and empathetic.",
  22: "Known as the master builder, this number signifies ambition, practicality, and the ability to turn dreams into reality. People with this number are highly ambitious, practical, methodical, and natural leaders inclined towards philanthropy and humanitarian efforts."
}


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
  document.getElementById("personality-traits").style.display = "block";
  document.getElementById("personality-traits").textContent = personalityTraits[numerology.personality];
  document.getElementById("destiny-traits").style.display = "block";
  document.getElementById("destiny-traits").textContent = destinyTraits[numerology.destiny];
});


