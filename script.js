
const init = () => {
    let liText = document.querySelector('input').value;

    let parentOfLi = document.querySelector("ul");

    let newLi = document.createElement("li");
    let t = document.createTextNode(liText);
    let newSpan = document.createElement('span');
    newSpan.innerHTML = `<i class="fa fa-trash"></i>`;
    newSpan.addEventListener('click', () => {
        newSpan.parentElement.parentNode.removeChild(newSpan.parentElement);
    })
    newLi.appendChild(newSpan);

    newLi.appendChild(t);


    newLi.addEventListener('click', () => {
        newLi.classList.toggle('complete')
    })
    parentOfLi.appendChild(newLi);
    document.querySelector('input').value = '';

}

document.querySelector('input').addEventListener('keypress', e => {
    if (e.keyCode === 13 && document.querySelector('input').value) {
        init();
    }
})

document.querySelector('.fa-plus').addEventListener('click', () => {
    document.querySelector('input').classList.toggle('display');
})
document.querySelector('.fa-pencil').addEventListener('click', () => {
   if(document.querySelector('input').value) {
    init();

   }
   
})



