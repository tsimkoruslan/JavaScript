//user of users
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get(`user`));
let parentDiv = document.createElement('div');
parentDiv.classList.add('parentDiv');
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
let titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv');
titleDiv.id = 'box';
button.innerText = 'post of current user';
    button.onclick = function (ev){
        ev.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => value.json())
            .then(posts => {
                button.disabled = true;
                button.innerText = '↓ Post user ↓'
                for (const post of posts) {
                    let parent = document.createElement('div');
                   let title =  document.createElement('h4');
                   title.classList.add('titleComment');
                   let button = document.createElement('button');
                   title.innerText = `"${post.title}"`;
                    parent.appendChild(title);
                    parent.classList.add('parentComment');
                    button.innerText = 'post-details ⤿';
                    button.onclick = function() {
                        window.location.href = '../post/post-details.html?post=' + JSON.stringify(post);
                    };
                    parent.appendChild(button);
                    titleDiv.appendChild(parent)
                              document.body.appendChild(titleDiv);
                    titleDiv.scrollIntoView({block: "center", behavior: "smooth"});
                }
            })
    }
document.body.append(button);


