
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {};


form.addEventListener('submit', onFormSubmit);
/* textarea.addEventListener('input', onFomrInput); */
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ formData }));
});

/* email.addEventListener('input', throttle(onEmailInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500)); */

populateTextarea();

/* function onFomrInput(event) {
  const message = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, message);
  console.log(message);  
} */

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(formData);
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  localStorage.removeItem(LOCAL_STORAGE_KEY);  
 };

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedMessage) {
    console.log(savedMessage);
    textarea.value = savedMessage.formData.message;
    email.value = savedMessage.formData.email;
    /* email.value = CONST; */
  }
}





/* form.addEventListener('input', e => {
  localStorage.setItem('feedback-form-state', email);

});

form.addEventListener('submit', e => {
  localStorage.setItem('feedback-form-state', textarea);
  console.log('email', 'message');
}); */






/* import throttle from 'lodash.throttle'; */

/* const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

populateData();
function populateData() {
  const parseData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (parseData) {
    console.log(parseData);
    refs.textarea.value = parseData.message;
    refs.email.value = parseData.email;
  }
} */