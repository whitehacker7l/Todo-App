let inp = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");

function addTask(){
    if (inp.value.trim() === "") {
        Swal.fire({
            title: 'Oops!',
            text: 'Please enter a task!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }



    let task = document.createElement("li");
    task.innerText=inp.value;
    ul.appendChild(task);
    inp.value="";

    let delBtn = document.createElement("button");
    delBtn.innerText="🗑";
    delBtn.classList.add("delete");
    task.appendChild(delBtn)

}

addBtn.addEventListener("click",addTask);
inp.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        e.preventDefault();
        addTask();
    }
})

ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let list = event.target.parentElement;
        list.remove();
    }
})