// array [users]
let url = new URL('https://jsonplaceholder.typicode.com/users');
let globalDiv = document.createElement('div');
globalDiv.classList.add('global_div');
fetch(url)
     .then(value => value.json())
     .then(value => {
         //create <div> of (id) and (name)
          for (const user of value) {
               let parentDiv = document.createElement('div');
               parentDiv.classList.add('parent_div');
               let idDiv = document.createElement('div');
               let nameDiv = document.createElement('div');
               nameDiv.classList.add('name')
               idDiv.append(user.id);
               nameDiv.append(user.name);
               parentDiv.append(idDiv,nameDiv);
               //create  <button> (more)
               let button = document.createElement('button');
               button.innerText = 'more';
               button.onclick = function() {
                    window.location.href = '../user/user-details.html?user=' + JSON.stringify(user);
               };
               parentDiv.append(button);
               //add everything to the <div>
               globalDiv.append(parentDiv);
               document.body.append(globalDiv);

          }
     })
