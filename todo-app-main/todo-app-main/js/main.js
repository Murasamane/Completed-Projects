const checks = document.querySelectorAll(".checkbox");
console.log(checks);
const checked = Array.from(checks);
checked.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    e.target.parentNode.nextElementSibling.classList.toggle("checked-item");
    // console.log(document.querySelectorAll(".checked-item"));
  });
});
document.querySelector(".item-count").textContent = checked.length;
document.querySelectorAll('.delete').forEach((itemDel)=>{
    itemDel.addEventListener('click',(e)=>{
        e.target.parentElement.parentNode.remove()
    })
})


document.querySelector('.todo-clear-completed-btn').addEventListener('click',()=>{
    document.querySelectorAll('.checked-item').forEach((e)=>{
        e.parentElement.parentNode.remove();
    })
})