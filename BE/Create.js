import Read from './Read.js'

export default function Create() {
const formInput = document.querySelector('.form-container form')

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
const date = d.getDate()
const month = months.filter((e,i) => i === d.getMonth())
const year = d.getFullYear()

let value = document.getElementById("todo-input")
if (!value?.value.trim()) {
    return alert('isi mas')
}
const dataForm = {
    title : value.value,
    date : `${date} ${month} ${year}`,
    status: 0,
}
let dataLocal = null
if (localStorage.getItem("data") === null) {
    dataLocal = []
}else{
    dataLocal = JSON.parse(localStorage.getItem("data"))
}
dataLocal.push(dataForm)
localStorage.setItem("data",JSON.stringify(dataLocal))
Read()
value.value = ""
}