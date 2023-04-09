function olAdd(){
    const add = document.querySelector('#user-input').value 
    const ol = document.querySelector("ol");
    const lis = document.createElement('li') 
    lis.append(add)
    ol.append(lis)
    return ol
}
function addcheckbox() {
    let checks = document.getElementsByClassName('item')
    for (let check in checks) {check.innerHTML += '<label><input type="checkbox">'}
    return checks};

const button = document.getElementById("button")
button.addEventListener("click", function(event) {olAdd(); 
    event.preventDefault()})

const checkbox = document.getElementByClassName('item')
checkbox.addEventListener("mouseover", function() {addcheckbox(); 
})






function remove() {
    const li = document.getElementsByTagName(li)[0];
    return li.remove() 
}

const bttn = document.getElementById('rembutton')
bttn.addEventListener("click", function(e) {remove()
e.preventDefault()})