//user of users
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get(`user`));
let parentDiv = document.createElement('div');

//recursive output of all items
function recurs (item){
    for (let [key, value] of Object.entries(item)) {
        let child = document.createElement("div");
            if (typeof(value) === 'object'){
                child.innerText = `${key} v`;
            }else{
                child.innerText = `${key}: ${value}`;
            }
            if (typeof(value) === 'object' || Array.isArray(value) ){
                recurs(value);
            }

        parentDiv.appendChild(child);
        document.body.append(parentDiv);
    }
}
recurs(user)

//creat <button> (post of current user)
let button = document.createElement('button');
let titleDiv = document.createElement('div')
button.innerText = 'post of current user';
    button.onclick = function (ev){
        ev.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(users => {
                for (const user of users) {
                   let title =  document.createElement('h4');
                   title.innerText = user.title;
                    titleDiv.appendChild(title)
                   document.body.appendChild(titleDiv);
                }
            })
    }
document.body.append(button);


