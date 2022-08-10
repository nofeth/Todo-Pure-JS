AOS.init()


const menu = document.querySelectorAll('.nav-item')
let navHover = document.querySelector('.nav-hover')
const tab = document.querySelectorAll('.tab')
const btn = document.querySelector('.card-body .btn button')
function changeValue({offsetLeft,offsetWidth}){
    navHover.style.width = `${offsetWidth}px`
    navHover.style.left = `${offsetLeft}px`
}

function slideContent(item){;
    item.forEach(e => {
        let id
        e.addEventListener('click',({target}) => {
            tab.forEach(e => e.classList.add('display'))
            changeValue(e)
            if(target.innerText == 'To-do'){
                 id = target.innerText.toLowerCase().split('-').join('')
                const text = document.getElementById(id)
                return text.classList.remove('display')
            
            }
                 id = target.innerText.toLowerCase()
                const text = document.getElementById(id)
                text.classList.remove('display')
            
        })
    });
}

btn.addEventListener('click', function (e) {
    const text = document.getElementById('home')
    const todo = document.getElementById('todo')
    changeValue(menu[1])
    text.classList.add('display')
    todo.classList.remove('display')
})
slideContent(menu)
changeValue(menu[0])

let dataForm = []

document.querySelectorAll('img.highres').forEach(img => {
    img.addEventListener('load', e => {
      img.parentElement.classList.add('highres-loaded')
    })
  })
//   get Form
const formInput = document.querySelector('.form-container form')
const formContainer = document.querySelector('.form-container')

formInput.addEventListener('submit', function(e){
    e.preventDefault();
    let value = document.getElementById("todo-input")
    console.log(value);
    if (!value?.value.trim()) {
       return alert('isi mas')
    }
    const data  = new FormData();
    data.append("name",value.value)
    for(let [name,value] of data){
        dataForm.push({name,value})
        addItem()
    }
    return value.value = " "
})

// btnaddform
document.querySelector('.btn-add-form').addEventListener('click',function (){
    formContainer.style.display = "block"
    setTimeout(() => {
        formContainer.style.opacity = "1"
    },100)
})

// close form
document.querySelector('.btn-close').addEventListener('click',function () {
    formContainer.style.opacity = "0"
    setTimeout(() => {
        formContainer.style.display = "none"
    },500)
})

document.querySelector('body').addEventListener('keydown',function (e) {
    if (e.key === "Escape") {
        formContainer.style.opacity = "0"
        setTimeout(() => {
            formContainer.style.display = "none"
        },500)
    }  
})

function addItem(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const date = d.getDate()
    const month = months.filter((e,i) => i === d.getMonth())
    const year = d.getFullYear()
    const projectCard = document.querySelectorAll(".project-body ul")[0]
    const li = document.createElement('li')
    li.classList.add('project-content')
    dataForm.map(e => {
        li.innerHTML = `
        <div class="project-content-right">
            <h3></h3>
            <p><i class="uil uil-clock-three"></i> ${date} ${month} ${year}</p>
        </div>
        <div class="project-content-left">
            <i class="uil uil-play"></i>
        </div>`
        li.querySelector('.project-content-right').children[0].innerText = e.value
        projectCard.appendChild(li)
    })
}

addItem()





