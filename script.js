const boxes = document.querySelectorAll('.box')

function checkBoxes() {
   const triggerBottom = (window.innerHeight / 5) * 4

   boxes.forEach((box) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      const boxTop = box.getBoundingClientRect().top

      if (boxTop < triggerBottom) {
         box.classList.add('show')
      } else {
         box.classList.remove('show')
      }
   })
}

// Event Listeners
window.addEventListener('scroll', checkBoxes)

// Global Scope
checkBoxes()
