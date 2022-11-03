const arrow = document.querySelector('.arrow')
const select = document.querySelector('.select')
const sociaMedia = document.querySelector('.social_media')
const list = document.querySelector('ul')
const containerEl = document.querySelector('.container')
const listEls = document.querySelectorAll('li')

// the list disappear when click outside
document.addEventListener('click', (e)=>{
  console.log(e.target);
  if(!containerEl.contains(e.target)){
      list.classList.add('disappear')
  }
})


// adding addEventListener to the social media div
sociaMedia.addEventListener('click', displayMenu)

function displayMenu(){
  list.classList.toggle('disappear')
  arrow.classList.toggle('rotate')
}

// changing the content of the social media div when selecting one from the list
listEls.forEach(element => {
  element.addEventListener('click', ()=>{
    select.innerHTML = element.innerHTML
    select.style.display = 'flex'
    select.style.alignItems = 'center'
    displayMenu()
  })
});


