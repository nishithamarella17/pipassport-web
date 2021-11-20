document.querySelector('.grand-parent').addEventListener('click',
(e) => {
    console.log('grand parent')
    e.stopPropagation()
}, false)
document.querySelector('.parent').addEventListener('click',
(e) => {
    console.log('parent')
    e.stopPropagation()
}, false)
document.querySelector('.child').addEventListener('click',
(e) => {
    console.log('child')
    e.stopPropagation()
}, false)