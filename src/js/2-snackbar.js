import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const delayInput = refs.form.querySelector('input[name="delay"]').value;
  const stateInput = refs.form.querySelector(
    'input[name="state"]:checked'
  )?.value;

  if (!stateInput) {
    return;
  }

  createPromise(stateInput, delayInput)
    .then(delay => onFulfilled(delay))
    .catch(delay => onRejected(delay));

  refs.form.reset();
});

function createPromise(state, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, +delay);
  });

  return promise;
}

function onFulfilled(delay) {
  iziToast.success({
    title: 'Success',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

function onRejected(delay) {
  iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}
