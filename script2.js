const Members = [
   
    {
        name : "Avinash",
        age : "24"
    },
    {
        name : "Vishnu",
        age : "40"
    },
    {
        name : "Mobin",
        age : "10"
    },
    {
        name : "Athira",
        age : "34"
    },
    {
        name : "Manu",
        age : "32"
    },
    {
        name : "Hiran",
        age : "30"
    },
    {
        name : "Aswin",
        age : "12"
    },
    {
        name : "Amal",
        age : "39"
    },
    
]

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    Members.forEach(( member )=>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(member.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        li.appendChild(span)

        const age = document.createTextNode(member.age)
        span.appendChild(age)

        ul.appendChild(li)
    })

    
}

// generateList()

window.addEventListener("load",generateList)

const ascendingButton = document.querySelector(".sort-btn")
const descendingButton = document.querySelector(".sort-btn2")


ascendingButton.addEventListener("click",()=>{
    Members.sort((a,b)=>a.age-b.age)
    generateList();
})


descendingButton.addEventListener("click",()=>{
    Members.sort((a,b)=>b.age-a.age)
    generateList();
})