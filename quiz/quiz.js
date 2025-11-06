// Get all the required elements
let startBtn = document.querySelector('.startBtn');
let infoBox = document.querySelector('.infoBoxActivity');
let exitBtn = document.querySelector('.exitbtn');
let continueBtn = document.querySelector('.continueBtn');
let quizBox = document.querySelector('.quiz-box');
let questionText = document.querySelector('.questionText');
let AllOptions = document.querySelectorAll('.options');
let nextBtn = document.querySelector('.nextBtn');
let time_line = document.querySelector('.time_line');
let currentQuestionIndicator = document.querySelector('.currentQuestionIndicator');
let progressBar = document.querySelector('.progressBar');

let userScore = 0;
let currentQuestionIndex = 0;
let timer;
let timeLineInterval = null;
let progressBarInterval = null;

// When user clicks "Start Quiz"
startBtn.addEventListener('click', () => {
  infoBox.classList.add('activeInfoBox');
});

// ❌ When user clicks "Exit"
exitBtn.addEventListener('click', () => {
  infoBox.classList.remove('activeInfoBox');
});

// ✅ When user clicks "Continue"
continueBtn.addEventListener('click', () => {
  infoBox.classList.remove('activeInfoBox');
  quizBox.classList.add('activeQuizBox');
  currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
  handleTiming(15);
  handleProgressBar();
});

// ⏭️ When user clicks "Next Question"
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    clearInterval(timer);
    clearInterval(timeLineInterval);
    clearInterval(progressBarInterval);
    handleTiming(15);
    handleProgressBar();
  } else {
    clearInterval(timer);
    clearInterval(timeLineInterval);
    clearInterval(progressBarInterval);
    alert(`🎉 Quiz Completed! Your Score: ${userScore}/${questions.length}`);
  }
});

// 🧠 Function to show/render questions
const showQuestion = (index) => {
  let question = questions[index];
  questionText.innerText = `${question.numb}. ${question.question}`;

  // Update options dynamically
  AllOptions.forEach((option, i) => {
    option.innerHTML = question.options[i];
    option.classList.remove('correct', 'incorrect', 'disabled');
    option.onclick = optionClickHandler;
  });

  currentQuestionIndicator.innerText = index + 1;
  nextBtn.style.opacity = "0.5";
  nextBtn.style.pointerEvents = "none";
};

// ⏱️ Timer function
const handleTiming = (time) => {
  clearInterval(timeLineInterval);
  let timeValue = time;
  time_line.innerText = timeValue;

  timeLineInterval = setInterval(() => {
    timeValue--;
    time_line.innerText = timeValue < 10 ? "0" + timeValue : timeValue;

    if (timeValue === 0) {
      clearInterval(timeLineInterval);
      showNextButton();
    }
  }, 1000);
};

// 🔘 Show Next Button
const showNextButton = () => {
  nextBtn.style.opacity = "1";
  nextBtn.style.pointerEvents = "auto";
  nextBtn.style.transform = "scale(1)";
};

// 📈 Progress Bar Handler
const handleProgressBar = () => {
  clearInterval(progressBarInterval);
  progressBar.style.width = '0%';
  let currentPercentage = 0;

  progressBarInterval = setInterval(() => {
    currentPercentage += (100 / (15 * 100)); // fill in 15 seconds
    progressBar.style.width = currentPercentage + "%";

    if (currentPercentage >= 100) {
      clearInterval(progressBarInterval);
    }
  }, 10);
};

// ✅ Icons (HTML strings)
const tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
const crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';

// 💥 Option click handler
const optionClickHandler = (e) => {
  clearInterval(progressBarInterval);
  clearInterval(timeLineInterval);

  let userAnswer = e.target.innerText;
  let correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    userScore++;
    e.target.classList.add('correct');
    e.target.insertAdjacentHTML('beforeend', tickIcon);
  } else {
    e.target.classList.add('incorrect');
    e.target.insertAdjacentHTML('beforeend', crossIcon);

    // highlight the correct one
    AllOptions.forEach(opt => {
      if (opt.innerText === correctAnswer) {
        opt.classList.add('correct');
        opt.insertAdjacentHTML('beforeend', tickIcon);
      }
    });
  }

  // Disable all options after one click
  AllOptions.forEach(opt => opt.classList.add('disabled'));

  // Show next button
  showNextButton();
};