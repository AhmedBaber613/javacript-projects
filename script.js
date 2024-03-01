let ul = document.getElementById('p');
let people = ['lorem', 'ipsum', 'dolor', 'dipse'];

let html = ``;

people.forEach(function(person){
    //create html template
    html += `<li style="color: blue;">${person}</li>`
});

console.log(html)
ul.innerHTML += html;

console.log(ul);