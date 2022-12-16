let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", function () {
  const form = document.getElementById("sheet-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      modalBtn.onclick = function () {
        modal.style.display = "block";
      };
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      };
    });
  });
});
