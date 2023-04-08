
/*1 getting ele by Id*/
const cont = document.getElementById('container')

/*2 using querySelector*/
const cont2 = document.querySelector('#container')

/*3 getElementByClassName*/
const secClass = document.getElementsByClassName('second')

/*4 selecting child element*/
const third = document.querySelector('ol > .third')

/*5 changing innerText to Hello!*/
const textCh = document.getElementById('container')
textCh.innerText= "Hello!"

/*6 adding another class to footer*/
const classChange = document.getElementsByClassName('footer')
classChange.innerHTML= <div class="main footer"></div>

/*7 renaming class back to footer*/
const rem = document.querySelector('#main footer')
rem.class = "footer"

/*8 Creating a li*/
const liElement = document.createElement('li')

/*9 adding four to li*/
const four = liElement.innerText= 'four'

/*10 adding li to ul*/
const addingLi= ul.append(li)

/*11 looping to change li to green background*/
const lis = document.querySelector(ol)
for (let li of lis){
    li.style.backgroundColor = 'green';
}

/*12 removing div element */
const removingDiv= document.querySelector('footer')
removingDiv.parentElement.remove()