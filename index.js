const importantParagraph = document.querySelector("p.text.important");
console.log("Este es el paragrafo: \n",importantParagraph);

const disabledButton = document.querySelector("button:disabled.button");
console.log("Este es el botón: \n",disabledButton);

const listItemArray = document.querySelectorAll("ul.list>li");
console.log("Este es el array de li's: \n",listItemArray);

const inputTextsArray = document.querySelectorAll('form.form-new-item>input[type="text"]');
console.log("Este es el array de inputs: \n",inputTextsArray);

const subtitleHeader = document.querySelector('.subtitle');
subtitleHeader ? (subtitleHeader.textContent = 'The MERN stack',subtitleHeader.classList.remove('subtitle')) : null;

const studentData = {name: "Alexandre Torres",age: 20,photoUrl: "https://example.com/student.png"};
const studentNameElement = document.querySelector('.student-name');
const studentAgeElement = document.querySelector('.student-age');
const studentPhotoElement = document.querySelector('.student-photo');
studentNameElement && studentAgeElement && studentPhotoElement ?(
studentNameElement.textContent = studentData.name,
studentAgeElement.textContent = studentData.age,
studentPhotoElement.src = studentData.photoUrl,
studentPhotoElement.alt = studentData.name + "'s photo"):null;
