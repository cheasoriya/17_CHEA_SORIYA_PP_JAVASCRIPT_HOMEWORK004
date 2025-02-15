function onClicks() {
  let tdClick = document.getElementById("buttonPending");
  tdClick.innerHTML = "Completed";
  tdClick.classList.toggle("bg-green-500");
}

let forms = [];
document
  .getElementById("formsInput")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    try {
      let taskNames = document.getElementById("taskName").value;
      let datePicker = document.getElementById("default-datepicker").value;
      let priority = document.getElementById("priority").value;
      let button = document.getElementById("buttonPending");
      button = "Pending";

      let newTask = { taskNames, datePicker, priority, button };
      forms.push(newTask);

      let tableBody = document.querySelector("tbody");

      let newRow = document.createElement("tr");

      newRow.innerHTML = `
      <td class="text-center">${taskNames}</td>
      <td class="text-center">${datePicker}</td>
      <td class="text-center">${priority}</td>
      <td onclick="onClick1(this)" class="text-center bg-amber-500 px-2 py-2 text-white rounded-md">${button}</td>
      `;

      tableBody.appendChild(newRow);

      //  ${datePicker} ${priority} `;
      tableBody.appendChild(newRow);
    } catch (error) {
      console.log(ErrorEvent);
    }
    formsInput.reset();
  });

function onClick1(tdElement) {
  if (tdElement.innerHTML === "Pending") {
    tdElement.innerHTML = "Completed";
    tdElement.setAttribute(
      "class",
      "bg-green-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg"
    );
  } else if (tdElement.innerHTML === "Completed") {
    tdElement.innerHTML = "Pending";
    tdElement.setAttribute(
      "class",
      "bg-amber-500 text-white mx-4 px-2 py-2 w-30 text-center rounded-lg"
    );
  }
  console.log(tdElement);
}
