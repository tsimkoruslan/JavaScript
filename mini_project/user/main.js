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

//creat <button> (post of current user) and (post_details)
let button = document.createElement('button');
let titleDiv = document.createElement('div')
button.innerText = 'post of current user';
    button.onclick = function (ev){
        ev.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(posts => {
                for (const post of posts) {
                   let title =  document.createElement('h4');
                   let button = document.createElement('button');
                   let a = document.createElement('a');
                             title.innerText = `"${post.title}"`;
                             titleDiv.appendChild(title);
                    a.innerText = 'post-details';
                    a.href = '../post/post-details.html?post=' + JSON.stringify(post);
                    button.appendChild(a);
                         titleDiv.appendChild(button);
                              document.body.appendChild(titleDiv);
                }
            })
    }
document.body.append(button);


