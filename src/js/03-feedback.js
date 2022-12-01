
const taskInputEmail = document.querySelector('.task__email');
const taskInputMessage = document.querySelector('.task__message');

taskInputEmail.addEventListener('keydown', e => {
  localStorage.setItem('task__email', e.target.value);
  console.log('task__email', e.target.value);
});

taskInputMessage.addEventListener('keydown', e => {
  localStorage.setItem('task__message', e.target.value);
  console.log('task__message', e.target.value);
});

localStorage.setItem('feedback-form-state', 'submit');