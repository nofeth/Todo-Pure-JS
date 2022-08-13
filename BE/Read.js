export default function Read(){
    const data = JSON.parse(localStorage.getItem('data')) || [];
    const projectCard = document.querySelectorAll(".project-body ul")
    
    const li = document.createElement('li')
    li.classList.add('project-content')
    data.filter(e => {
        if (e.status === 0) {
            li.innerHTML = `
        <div class="project-content-right">
            <h3>${e.title}</h3>
            <p><i class="uil uil-clock-three"></i> ${e.date}</p>
        </div>
        <div class="project-content-left">
            <i class="uil uil-play"></i>
        </div>`
        projectCard[0].appendChild(li)
        }
        if (e.status === 1) {
            li.innerHTML = `
        <div class="project-content-right">
            <h3>${e.title}</h3>
            <p><i class="uil uil-clock-three"></i> ${e.date}</p>
        </div>
        <div class="project-content-left">
            <i class="uil uil-play"></i>
        </div>`
        projectCard[1].appendChild(li)
        }
        if (e.status === 2) {
            li.innerHTML = `
        <div class="project-content-right">
            <h3>${e.title}</h3>
            <p><i class="uil uil-clock-three"></i> ${e.date}</p>
        </div>
        <div class="project-content-left">
            <i class="uil uil-play"></i>
        </div>`
        projectCard[2].appendChild(li)
        }
    })
}