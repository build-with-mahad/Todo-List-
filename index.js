const taskinput = document.getElementById('taskinput')
const add = document.getElementById('add')
const update = document.getElementById('update')
const tasklist = document.getElementById('tasklist')
let mainli = null;
add.addEventListener('click', function () {
    if (taskinput.value === '') {
        alert('Please Enter A Task')
        return;
    }
    const li = document.createElement('li')
    li.textContent = taskinput.value
    const button = document.createElement('button')
    button.textContent = 'delete'
    const editbtn = document.createElement('button')
    editbtn.textContent = 'Edit'
    editbtn.style.margin = '10px'
    editbtn.addEventListener('click', function () {
        taskinput.value = li.firstChild.textContent
        mainli = li;
        add.style.display= 'none'
    })
    button.addEventListener('click', function () {
        li.remove();
    })
    update.addEventListener('click', function () {
        mainli.firstChild.textContent = taskinput.value;
        taskinput.value = ""
        mainli = null;
        add.style.display='inline-block'
      
    })
    li.appendChild(editbtn)
    li.appendChild(button)
    tasklist.appendChild(li)
    taskinput.value = ''
})