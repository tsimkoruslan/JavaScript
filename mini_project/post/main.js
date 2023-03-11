//post of user
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('post'));
//create DOM
let parentDiv = document.createElement('div');
let title = document.createElement('h1');
let idInfoP = document.createElement('p');
let bodyPost = document.createElement('div');
        title.innerText = `"${post.title}"`;
        idInfoP.innerText = `ID - ${post.id} User ID - ${post.userId}`;
        bodyPost.innerText = post.body;
        parentDiv.append(title,idInfoP,bodyPost);
            document.body.append(parentDiv);
//create comments of post
fetch(` https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (let comment of comments) {
            let div = document.createElement('div');
            let nameCommentH4 = document.createElement('h4');
            let bodyCommentP = document.createElement('p');
            let email = document.createElement('p');
                    nameCommentH4.innerText = `${comment.name}`;
                    bodyCommentP.innerText = `"${comment.body}"`;
                    email.innerText = `${comment.email}`;
            div.append(nameCommentH4,bodyCommentP,email);
            document.body.append(div);
        }

    })


