document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('#create-task-form :nth-child(3)');
  const input = document.querySelector('#create-task-form :nth-child(2)');
  const ul = document.querySelector('#tasks');
  
  button.addEventListener("click", (e) => {
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
