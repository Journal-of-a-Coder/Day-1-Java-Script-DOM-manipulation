const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');

addTaskBtn.addEventListener('click',()=>{
    const newTask=document.getElementById('newTask').value ;
    if (newTask){
        const taskDiv=document.createElement('div');
        taskDiv.className='taskDiv';
        taskDiv.innerHTML=`
        <li>${newTask}</li>
        `;
        taskList.appendChild(taskDiv);
        document.getElementById('newTask').value ='';
    };
});