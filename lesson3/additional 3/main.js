document.write(`<div class="wrap" >`);
for (let i = 0; i < array.length; i++) {
    document.write(`    
      <div class="post-card">
                <h3> ${array[i].id} ${array[i].title}</h3>
                <p> ${array[i].body} </p>
     </div>`);

}
document.write(`</div>`);