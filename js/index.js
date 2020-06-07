// Your code goes here
/* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()*/

const mainNav = document.querySelectorAll('a')
const textH2= document.querySelector('h2')
const imgBus = document.querySelector('.intro')

const imgCont = document.querySelector('.img-content')


// 1 scroll event
function body(event){
	document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=humphrey-muleba-TejFa7VW5e4-unsplash.jpg')"
	document.body.style.backgroundPosition = 'center'
	document.body.style.backgroundSize = 'cover'
}
document.addEventListener('scroll', body);

//2.  mouseover event
function mouseOver(event){
	let mouseover = 0;
	for(let i = 0; i < mainNav.length; i++){
		mouseover = mainNav[i]
		mouseover.style.color = 'blue'
	}
}
document.addEventListener('mouseover', mouseOver)

// 3. keydown event 
function keyDown(event){
	
	let anyKey = 0;
	for(let i = 0; i < mainNav.length; i++){
		anyKey = mainNav[i]
		anyKey.style.color = 'black'	
	}
	}
document.addEventListener('keydown', keyDown)

// 4. dblclick event
function imgFunBus(event){
	document.querySelector('img').style.visibility = 'hidden'
	alert('dblclick to to hide image')
}
document.addEventListener('dblclick', imgFunBus)

// 5. click event
function imagCont(event){
	document.querySelector('img').style.visibility = 'visible'
}	
document.addEventListener('click', imagCont)

// 6. dblclick event change background color
function changeColor(event){
	document.querySelector('.intro').style.backgroundColor = 'yellow'
}
document.addEventListener('dblclick',changeColor)

// 7. click

function changeBack(event){
	document.querySelector('.intro').style.backgroundColor = 'white'
}
document.addEventListener('click',changeBack)

// 8 keyup
function key(event){
	let select = document.getElementById('selector');
	select.value = select.value.toUpperCase();
}
document.addEventListener('keyup', key)

// 9. focus

function onfocus(event){
	document.getElementById('selector').style.backgroundColor = 'pink'
}
document.getElementById('selector').addEventListener('focus', onfocus)

// 10. search
function mySearch(event){
	const search = document.getElementById('searching');
	alert(`you looking for:  ${search.value}`)
	
}
document.getElementById('searching').addEventListener('search', mySearch)