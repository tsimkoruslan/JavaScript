// array [users]
let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
     .then(value => value.json())
     .then(value => {
         //create <div> of (id) and (name)
          for (const user of value) {
               let parentDiv = document.createElement('div');
               let idDiv = document.createElement('div');
               let nameDiv = document.createElement('div');
               idDiv.append(user.id);
               nameDiv.append(user.name);
               parentDiv.append(idDiv,nameDiv);
               //create  <button> (more)
               let a = document.createElement('a');
               a.href =  '../user/user-details.html?user=' + JSON.stringify(user);
               a.innerText = 'more';
               let button = document.createElement('button');
               button.append(a);
               parentDiv.append(button);
               //add everything to the <div>
               document.body.append(parentDiv);

          }
     })
