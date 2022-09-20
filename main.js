const addElement = (e, node = "div", txt = 'text', attr = 'style', value ='font-size: 20px') => {
    e.preventDefault();
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    element.appendChild(text);
    element.setAttribute(attr, value);
    document.body.appendChild(element);
}

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
    ));