"use strict";
const form = document.querySelector(".input-todo");
const outputUl = document.querySelector(".outputs");
const clear = document.querySelector(".todo-clear-completed-btn");
const todoCategories = document.querySelector(".todo-categories");
const todoBtns = document.querySelectorAll(".todo-btn");
document.querySelector(".item-count").textContent =
  document.querySelectorAll(".output-list-item").length;

const template = (todo) => {
  const html = `
  <li class="output-list-item">
  <label class="container">
    <input type="checkbox" class="checkbox"name="checkedInput">
    <span class="checkmark"></span>
  </label>
  <p class="list-item">${todo}</p>
  <button class="delete">
    <img src="images/icon-cross.svg"  class="delete-img" alt="">
  </button>
</li>
  `;
  outputUl.insertAdjacentHTML("afterbegin", html);
  document.querySelector(".item-count").textContent =
    document.querySelectorAll(".output-list-item").length;
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoVal = form.todo.value.trim();
  if (todoVal.length) {
    template(todoVal);
    form.reset();
  }
});

outputUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-img")) {
    e.target.parentNode.parentElement.remove();
  }
  document.querySelector(".item-count").textContent =
    document.querySelectorAll(".output-list-item").length;

  if (e.target.classList.contains("checkmark")) {
    e.target.parentNode.nextElementSibling.classList.toggle("checked-item");
    e.target.parentNode.parentElement.classList.toggle("completed");
  }
});

clear.addEventListener("click", (e) => {
  const marked = document.querySelectorAll(".checked-item");
  marked.forEach((item) => {
    item.parentNode.remove();
  });
  document.querySelector(".item-count").textContent =
    document.querySelectorAll(".output-list-item").length;
});

todoCategories.addEventListener("click", (e) => {
  const currentEl = e.target.classList;

  if (!currentEl.contains("active")) {
    todoBtns.forEach((button) => {
      button.classList.remove("active");
    });
  }

  if (currentEl.contains("todo-btn")) {
    currentEl.add("active");
  }
});



const filteringCompleted = () => {
  const arr = Array.from(outputUl.children);
  const completedArr = arr.filter((item) => {
    return item;
  });
  completedArr.forEach((item) => {
    if (item.classList.contains("completed")) {
      item.classList.remove("filtered-todo");
    }
    if (!item.classList.contains("completed")) {
      item.classList.add("filtered-todo");
    }
  });
};

const filteringActive = () => {
  const arr = Array.from(outputUl.children);
  const activeArr = arr.filter((item) => {
    return item;
  });
  activeArr.forEach((item) => {
    if (item.classList.contains("filtered-todo")) {
      item.classList.remove("filtered-todo");
    }
    if (item.classList.contains("completed")) {
      item.classList.add("filtered-todo");
    }
  });
};
const filteringAll = () => {
  const arr = Array.from(outputUl.children);
  arr.forEach((item) => {
    if (
      item.classList.contains("filtered-todo") ||
      !item.classList.contains("filtered-todo")
    ) {
      item.classList.remove("filtered-todo");
    }
  });
};
document.querySelector(".todo-completed").addEventListener("click", (e) => {
  filteringCompleted();
});

document.querySelector(".todo-active").addEventListener("click", (e) => {
  filteringActive();
});

document.querySelector(".todo-all").addEventListener("click", (e) => {
  filteringAll();
});
