let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editIndex = null;
let dragId = null;

const modal = document.getElementById('modal');

function openModal(i=null){
  modal.style.display='flex';

  if(i!==null){
    editIndex=i;
    let t=tasks[i];
    title.value=t.title;
    desc.value=t.desc;
    priority.value=t.priority;
    status.value=t.status;
  }else{
    editIndex=null;
    title.value='';
    desc.value='';
  }
}

function closeModal(){modal.style.display='none'}

function saveTask(){
  if(!title.value) return alert("Title required");

  let task={
    id:Date.now(),
    title:title.value,
    desc:desc.value,
    priority:priority.value,
    status:status.value,
    date:new Date().toLocaleDateString()
  };

  if(editIndex!==null) tasks[editIndex]=task;
  else tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
  closeModal();
  render();
}

function deleteTask(id){
  if(confirm("Delete task?")){
    tasks=tasks.filter(t=>t.id!==id);
    render();
  }
}

function render(){
  let todo=document.getElementById('todo');
  let progress=document.getElementById('progress');
  let done=document.getElementById('done');

  todo.innerHTML=`<h3>To Do (${tasks.filter(t=>t.status==='todo').length})</h3>`;
  progress.innerHTML=`<h3>In Progress (${tasks.filter(t=>t.status==='progress').length})</h3>`;
  done.innerHTML=`<h3>Completed (${tasks.filter(t=>t.status==='done').length})</h3>`;

  totalTasks.innerText=tasks.length;
  progressTasks.innerText=tasks.filter(t=>t.status==='progress').length;
  doneTasks.innerText=tasks.filter(t=>t.status==='done').length;

  tasks.forEach((t,i)=>{
    if(filter.value && t.priority!==filter.value) return;
    if(search.value && !t.title.toLowerCase().includes(search.value.toLowerCase())) return;

    let card=document.createElement('div');
    card.className='card';
    card.draggable=true;

    card.innerHTML=`
      <span class="tag ${t.priority.toLowerCase()}">${t.priority}</span>
      <h4>${t.title}</h4>
      <p>${t.desc}</p>
      <small>${t.date}</small><br>
      <button onclick="openModal(${i})">Edit</button>
      <button onclick="deleteTask(${t.id})">Delete</button>
    `;

    card.ondragstart=()=>dragId=t.id;

    document.getElementById(t.status).appendChild(card);
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

/* Drag Drop */
document.querySelectorAll('.column').forEach(col=>{
  col.ondragover=(e)=>e.preventDefault();

  col.ondrop=()=>{
    let task=tasks.find(t=>t.id===dragId);
    task.status=col.id;
    render();
  };
});

/* Search + Filter */
search.oninput=render;
filter.onchange=render;

render();