import "@babel/polyfill";
import axios from "axios";

// html elements used to add interactivty to the app

const addtodo = document.querySelector(".button__add");
const close = document.querySelector(".close__icon");
const close__edit = document.querySelector(".close__icon--edit");
const form = document.querySelector(".form__container");
const form__editContainer = document.querySelector(".form__container--edit");
const form__edit = document.querySelector(".form__edit");
const editbuttons = document.querySelectorAll(".button__edit");

addtodo.addEventListener("click", () => {
  form.classList.toggle("form__visiable");
});

close.addEventListener("click", () => {
  form.classList.toggle("form__visiable");
});

close__edit.addEventListener("click", () => {
  form__editContainer.classList.toggle("form__visiable");
});

editbuttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    form__editContainer.classList.toggle("form__visiable");
    form__edit.dataset.id = id;
    console.log(form__edit.dataset.id);
  });
});

// form that uses axios
form__edit.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const id = form__edit.dataset.id;
    const newtodo = document.querySelector("#editTodo").value;
    const data = await axios.patch(`update/${id}`, { todo: newtodo });

    window.setTimeout(() => {
      location.assign("/");
    }, 100);
  } catch (error) {
    console.log(error.message);
  }
});
