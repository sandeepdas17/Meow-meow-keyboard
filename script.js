const keys = document.querySelectorAll('.key')


const keybd = ['a','s','d','j','k','l']
 

keys.forEach(key => {
    key.addEventListener('click', () => {
        playNote(key)
        })
    
})

 document.addEventListener('keydown', e => {
    const key = e.key
    
    const leftIndex = keybd.indexOf(key)
    
    if(leftIndex > -1) playNote(keys[leftIndex])
    
 })


function playNote(key){
    const noteAudio = document.getElementById(key.dataset.key)
    noteAudio.currentTime = 0
    noteAudio.play()
    
    key.classList.add('active')
    
    noteAudio.addEventListener('ended', () => {
    
        key.classList.remove("active")
        
    })
}

