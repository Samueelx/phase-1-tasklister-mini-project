document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('form');
  const input = document.querySelector('#create-task-form :nth-child(2)');
  const ul = document.querySelector('#tasks');
  
  button.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value !== ""){
      const li = document.createElement('li');
      li.textContent = input.value;
      ul.append(li);
      input.value = "";
    } else {
      alert("Please input task!");
    }
  });
});
