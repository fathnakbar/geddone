import './style.css'
import TodoList from "./src/TodoList"
import _List from "./src/List"

const todolist = new TodoList();

const input = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelectorAll(".list");

const List = (props) => _List({...props, setState(e) {todolist.setState(e.target.getAttribute("data-id"),e.target.checked)}})

let allow = false;
input.oninput = input.onchange = (e) => {
  if (e.target.value.length == 0) {
    add.setAttribute("disabled", "");
    allow = false;
  } else {
    add.removeAttribute("disabled")
    allow = true;
  }
}
add.onclick = () => {
  if (allow) {
    todolist.add(input.value);
    input.value = ""
    add.setAttribute("disabled", "");
    allow = false;
  }
}

todolist.addListener((_list, {str, id, prev, type}) => {
    switch (type) {
      case "add":
        list[0].appendChild(List({text: str, id}));
        break;
      case "remove":
        Array.from(list).forEach(el => {
          const e = el.querySelector(`li[data-id='${id}']`)
          e && e.remove();
        });
        break;
      case "change":
        if (prev !== undefined) {

          let [p, next] = !prev ? [0, 1] : [1, 0];
          console.log(prev, p, next)

          console.log()

          list[p].querySelector(`li[data-id="${id}"]`).remove();

          list[next].appendChild(List({text: str, id, check: !prev }))
        }
        break
      default:
        break;
    }
})




