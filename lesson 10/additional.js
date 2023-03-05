let width = document.getElementsByName(`width`)[0];
let height = document.getElementsByName(`height`)[0];
let item = document.getElementsByName(`item`)[0];
let creat = document.getElementsByName(`creat`);
creat[0].onclick = function (ev) {
    ev.preventDefault();
    let topDiv =  document.createElement(`div`);
    for (let i = 0; i < width.value; i++) {
        let parentDiv = document.createElement(`div`);
        for ( let x = 0; x < height.value ; x++){
            let childrenDiv = document.createElement(`div`);
            childrenDiv.classList.add(`children`);
            childrenDiv.append(item.value);
            parentDiv.appendChild(childrenDiv);
        };
        topDiv.append(parentDiv);
        topDiv.classList.add(`parentStyle`);
        document.body.append(topDiv);
    };
}
