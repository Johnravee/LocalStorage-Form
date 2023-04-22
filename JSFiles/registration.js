const namefirst = document.querySelector("#firstname")
const namelast = document.querySelector("#lastname")
const namemiddle = document.querySelector("#middlename")
const email = document.querySelector("#inputEmail4")
const contact = document.querySelector("#contact")
const address = document.querySelector("#inputAddress")
const city = document.querySelector("#inputCity")
const course = document.querySelector("#inputState")
const zip = document.querySelector("#inputZip")
const submit = document.querySelector("#submit")

 class Student{
    constructor(fname, mname, lname, emai, conta, addre, cit, cour, zi){
        this.firstname = fname
        this.middlename = mname
        this.lastname = lname
        this.email = emai
        this.contact = conta
        this.address = addre
        this.city = cit
        this.course = cour
        this.zip = zi
    }


    newStudent(){
        return `New student created : ${this.namefirst} ${this.namemiddle} ${this.namelast}`
    }
}

//Creating an array-object in localstorage
submit.addEventListener('click', ()=>{
    const std = new Student(namefirst.value, namemiddle.value, namelast.value, email.value, contact.value, address.value, city.value, course.value, zip.value)

    let stdList = JSON.parse(localStorage.getItem("Students"))

    if(stdList === null){
        list = []
    }else{
        list = stdList
    }

    console.log(std.newStudent());


    list.push(std)
    localStorage.setItem("Students", JSON.stringify(list))

    show()
})


const show = () =>{
    let stdList = JSON.parse(localStorage.getItem("Students"))
    
    if(stdList === null){
        list = []
    }else{
        list = stdList
    }

    //holder
    let holder = ''

    list.forEach((element, index) => {
        holder += 
        `
        <table class="table table-striped">
  <thead class="text-center">
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Firstname</th>
      <th scope="col">Middlename</th>
      <th scope="col">Lastname</th>
      <th scope="col">Course</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">City</th>
      <th scope="col">ZIP</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th scope ="row">${index}</th>
      <td>${element.firstname}</td>
      <td>${element.middlename}</td>
      <td>${element.lastname}</td>
      <td>${element.course}</td>
      <td>${element.email}</td>
      <td>${element.contact}</td>
      <td>${element.address}</td>
      <td>${element.city}</td>
      <td>${element.zip}</td>
      <td><button class="btn btn-danger" onclick="del(${index})">DELETE</button></td>
    </tr>
  </tbody>
</table>
        `
    });

    document.querySelector(".display").innerHTML = holder
}

//*DELETE ITEM
const del = (item) =>{
    let stdList = JSON.parse(localStorage.getItem("Students"))

    stdList.splice(item, 1)
    localStorage.setItem("Students", JSON.stringify(stdList))

    show()
}

show()

// std-button
const listBtn = document.querySelector("#std-btn")
const closeBTN = document.querySelector("#close")

listBtn.addEventListener('click', ()=>{
    document.querySelector(".display-con").classList.toggle("show")
})

closeBTN.addEventListener('click', ()=>{
    document.querySelector(".display-con").classList.remove("show")
})

