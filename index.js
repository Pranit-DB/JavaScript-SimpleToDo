const todoform = document.querySelector(".todo-form")
const iText = document.querySelector(".todo-form input[type='text']")
const list = document.querySelector(".todo-list")
// const list = document.getElementsByTagName("li")
const liFirst = document.querySelector("li")

const removebtn = document.querySelector("#rmbtn")
const donebtn = document.querySelector("#dbtn")

todoform.addEventListener("submit", (e) => {
    // preventDefault(): prevents page to reload after submit event
    e.preventDefault();
    const newTodoText = iText.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done" id="dbtn">Done</button>
            <button class="todo-btn remove" id="rmbtn">Remove</button>
        </div>
    `;
    newLi.innerHTML = newLiInnerHtml;
    // addTodo();
    iText.value = "";
    list.append(newLi)
    console.log(list);
})

function addTodo() {
    const newli = document.createElement("li")
    const newliInterHtml = `
    <span class="text">${iText.value}</span>
    <div class="todo-buttons">
        <button class="todo-btn done" id="dbtn">Done</button>
        <button class="todo-btn remove" id="rmbtn">Remove</button>
    </div>
    `;
    newli.innerHTML = newliInterHtml;
    // newli.textContent = iText.value;
    console.log(newli);
    list.append(newli);
}
list.addEventListener("click",(e) => {
    const removeNode = e.target.classList.contains("remove")
    const doneNode = e.target.classList.contains("done")

    if(removeNode){
        console.log(e.target.parentNode.parentNode);
        const deletedNode = e.target.parentNode.parentNode;
        deletedNode.remove();
        // console.log("it is true");
    }
    if(doneNode){
        const doneTask = e.target.parentNode.previousElementSibling;
        const tog = (doneTask.style.textDecoration = "line-through");
        doneTask.classList.toggle(tog)
    }
})