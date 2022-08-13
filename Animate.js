export default function Animate(){
    const menu = document.querySelectorAll('.nav-item')
    let navHover = document.querySelector('.nav-hover')
    const tab = document.querySelectorAll('.tab')
    const btn = document.querySelector('.card-body .btn button')
    const formContainer = document.querySelector('.form-container')
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

}