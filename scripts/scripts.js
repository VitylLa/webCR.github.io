
//опитування
function submitSurvey() {
  var surveyForm = document.getElementById('surveyForm');
  var resultSection = document.getElementById('result');

  var resultQuestion1 = document.querySelector('input[name="question1"]:checked');
  var resultQuestion2 = document.querySelector('input[name="question2"]:checked');

  if (resultQuestion1 && resultQuestion2) {
      document.getElementById('resultheader').textContent = 'Результати опитування: ';
      document.getElementById('resultQuestion1').textContent = 'Якість страв: ' + resultQuestion1.value;
      document.getElementById('resultQuestion2').textContent = 'Робота персоналу: ' + resultQuestion2.value;

  } else {
      alert('Будь ласка, відповідайте на всі питання.');
  }
}
//опитування

function book_table(){
    alert("qwregbhbc");
    let name=prompt("Введіть ваше ім'я", ""); 
		let surname=prompt("Введіть ваше прізвище", "");
    let time_book=prompt("Введіть час бронювання", "");
		alert("Дані успішно введено:Ім'я "+ name + " прізвище: " +surname +" час "+time_book);
}