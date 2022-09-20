const addElement = (e, node = "div", txt = 'text', attr = 'style', value ='font-size: 20px') => {
    e.preventDefault();
    const element = document.createElement(node);
    if(txt){
        const text = document.createTextNode(txt);
        element.appendChild(text); 
    }
    if(attr){
        element.setAttribute(attr, value);
    }
    //appendChild daje na koniec
    document.querySelector('.content').appendChild(element);
}
const searchElements = (event, nameElemenent) =>{
    event.preventDefault();
    const infoElement = document.querySelector(".result");
    infoElement.textContent = "";
    const elements = document.querySelectorAll(nameElemenent);
    if(elements.length){
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElemenent}</strong></p>`;
        showInfo(elements, infoElement);
    }
    else{
        infoElement.innerHTML = `<p class="result__number-info"> W tym dokumencie nie znaleziono elementów <strong>${nameElemenent}</strong></p>`;
        return;
    }
}

const showInfo = (elements, infoElement) =>{
    console.log(elements);
    elements.forEach((element)=>{
        const item = document.createElement('div');
        item.className = "result__element-description";
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>${element.offsetHeight}</div>
        <div>${element.offsetWidth}</div>
        <div>${element.offsetLeft}</div>
        <div>${element.offsetTop}</div>
        <div>${element.childElementCount}</div>`;
        infoElement.appendChild(item);
    })

}

//listenery
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
    ));

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) => searchElements(e,searchForm.elements["searching-element"].value));