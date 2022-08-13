import Animate from './Animate.js'
import Create from './BE/Create.js'
import Read from './BE/Read.js'
const formInput = document.querySelector('.form-container form')
export let data = [] 

formInput.addEventListener('submit',function (e){
    e.preventDefault()
    return Create()
})

AOS.init()
Animate()
Read(data)







