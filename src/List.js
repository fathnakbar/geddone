export default function List(props) {
    const el = document.createElement("li");
    el.setAttribute("data-id", props.id)
    el.innerHTML = `
          <span class="text">${props.text}</span>
          <input type="checkbox" data-id="${props.id}">
    `

    const check = el.querySelector('input[type="checkbox"]');
    check.oninput = props.setState;

    check.checked = Boolean(props.check)

    return el
}