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