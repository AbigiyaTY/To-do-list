import './style.css';

const listArray = [{
  description: 'wash the dishes',
  complete: true,
  index: 0,
},
{
  description: 'complet To Do list project',
  complete: false,
  index: 1,
},
];

const listToDo = document.getElementById('listToDo');

const onLoad = () => {
  listArray.forEach((task) => {
    listToDo.innerHTML
            += `<ul id="item-list" class="items">
                        <li class="toDo">
                            <button class="completed">□</button>
                            <div class="discription">${task.description}</div>
                            <div class="dots">⋮</div>
                        </li>
                    </ul>`;
  });
};
window.onload = onLoad();