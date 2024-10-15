function counterInit() {
  const buttons = document.querySelectorAll('[data-counter-button]');
  const output = document.querySelector('[data-counter-output]');
}

// !!!Do not do this in a real application!!!! Ever!!!!
const html = `
  <div>
    <output data-counter-output>0</output>
  </div>
  <div>
    <button data-counter-button="decrement">-</button>
    <button data-counter-button="increment">+</button>
  </div>
`;

document.body.innerHTML = html;
