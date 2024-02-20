
function Add(){
    let todo =  document.getElementById('inp').value
    if(todo === ''){
     alert ("To add something you have to write something!")
    }
    else{
        let main = document.getElementById('ToDolist')
        let row = document.getElementById('Row')
     let todo =  document.getElementById('inp').value
     let ul = document.getElementById('ul')
     let li = document.createElement('li')
      li.innerText = todo
     let span = document.createElement('span')
     span.setAttribute('onclick','remove()')
     let text2  = document.createTextNode("\u00d7")
     span.appendChild(text2)
     li.setAttribute('id','list') 
     ul.setAttribute('id','ul') 
     ul.appendChild(li)
     li.appendChild(span)
    
    }
    todo.value = "";
}

function Removeall(){
    let Remove = document.getElementById('ul');
    Remove.removeChild(Remove.lastChild);
}

function remove(){
    let todo =  document.getElementById('inp').value
    let Element = document.createElement('li')
    let Remove = document.getElementById('list');
    Remove.remove();
  
}

