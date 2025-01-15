
const input = document.getElementById('input');
const listCont = document.getElementById('list-cont');
function addTask(){
 if(input.value===""){
    alert("add a task");
 }
 else{
    let li=document.createElement('li');
    li.innerHTML=input.value;
    listCont.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML="\u00d7"
    li.appendChild(span);
 }
 input.value="";
 saveData();
}
listCont.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      const parentElement = e.target.parentElement;
      if (parentElement) {
        parentElement.remove();
        saveData();
      }
    }
  }, false);
  function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
  }
  function showTask(){
    listCont.innerHTML=localStorage.getItem("data");
  }
  showTask();