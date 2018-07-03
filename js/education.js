const tests = [{
    id: 1,
    question: "Какое(ие) из чисел: '10', '10,5', '-20', является(ются) натуральным(и). В ответ запишите число(а)",
    answer: "10",
    theme: "натуральные числа"
  },
  {
    id: 2,
    question: "Запишите 1.2222... в виде бесконечной десятичной периодической дроби ",
    answer: "1(2)",
    theme: "рациональные числа"
  },
  {
    id: 3,
    question: "Какое из утверждений является верным? 1) Иррациональным числом называют БЕСКОНЕЧНУЮ десятичную непериодическую дробь. 2) Иррациональным числом называют КОНЕЧНУЮ десятичную непериодическую дробь. В ответ запишите номер верного утверждения",
    answer: "1",
    theme: "иррациональные числа"
  }
];

const lessons = [{
    theme: "натуральные числа",
    lesson: "Числа, используемые для счета предметов, т.е. числа 1,2,3,4,5,..., называют натуральными числами. Более широкий класс чисел составляют целые числа. К ним относят натуральные числа, число 0 и числа −1,−2,−3,−4,−5,...."
  },
  {
    theme: "рациональные числа",
    lesson: "Рациональные числа — это все целые числа, а также положительные и отрицательные обыкновенные дроби. Любая десятичная дробь как частный случай обыкновенной дроби тоже является рациональным числом."
  },
  {
    theme: "иррациональные числа",
    lesson: "Иррациональным числом называют бесконечную десятичную непериодическую дробь. Пример: 0,547...557505...113456..."
  }
];

let userLessons = [];
let wrongAnswers = 0;
let currentQuestion = 0;
let currentLesson = 0;
let testFinish = false;

const checkAnswer = () => {
  if (!testFinish) {
    const question = tests[currentQuestion];
    if (question.answer !== document.getElementById("in").value) {
      wrongAnswers++;
      userLessons.push(lessons.filter((l) => l.theme === question.theme));
      console.log(userLessons);
    }
    document.getElementById("in").value = "";
    currentQuestion++;
    printQuestion();
  } else {
    printLesson();
  }
}

var btn_answer;

window.onload = function() {
  btn_answer = document.getElementById("btn_answer");
  printQuestion();
};


const printLesson = () => {
  if (wrongAnswers > currentLesson) {
    document.getElementById("title").innerHTML = "ТЕМА: " + userLessons[currentLesson][0].theme;
    document.getElementById("legend").innerHTML = userLessons[currentLesson][0].lesson;
    btn_answer.innerHTML = "Понятно";
    currentLesson++;
  } else {
    document.getElementById("btn_answer").remove();
    document.getElementById("title").remove();
    document.getElementById("legend").innerHTML = "Конец";
  }
}

const printQuestion = () => {
  if (currentQuestion < tests.length) {
    document.getElementById("legend").innerHTML = tests[currentQuestion].question;
  } else {
    let themes = '';
    userLessons.forEach(e => themes += e[0].theme + " | ");
    document.getElementById("input_form").remove();
    document.getElementById("legend").innerHTML = "Тест окончен. Ошибок: " + wrongAnswers + ". Темы в которых были допущены ошибки: " + themes;
    btn_answer.innerHTML = "Далее";
    testFinish = true;

  }
}
