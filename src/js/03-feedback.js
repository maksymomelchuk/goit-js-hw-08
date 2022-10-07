import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[type="email"]');
const messageRef = document.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_FORM_KEY = 'feedback-form-state';

formRef.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_FORM_KEY);
  event.target.reset();
});

formRef.addEventListener('input', throttle(getInputValue, 500));

function getInputValue() {
  const formData = {
    email: emailRef.value,
    message: messageRef.value,
  };
  localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(formData));
}

function dataKeeper() {
  const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_KEY));
  if (data) {
    emailRef.value = data.email;
    messageRef.value = data.message;
  }
}

dataKeeper();
