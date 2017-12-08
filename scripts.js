// let btns = document.querySelectorAll(".btn");

document.getElementById('create').addEventListener('click', function(){
  let card = document.createElement("div");
  card.classList.add('card');

  let text = document.getElementById('area').value;
  let button = document.createElement('BUTTON');
  button.classList.add('btn');
  button.innerHTML = 'Delete Card';
    card.textContent = text;

  card.appendChild(button)
  
  document.getElementById('output').appendChild(card);

  let btns = document.querySelectorAll(".btn");
  console.log(btns);
  for(let i=0; i<btns.length; i++){
        let btn = btns[i];    
        console.log(btn, 'btns');
        btn.addEventListener('click', function(){ 
            // console.log(event.Target.par, 'asdasdsa');
            event.currentTarget.parentNode.remove();
        })    
      }
  
});


// console.log(btns);
//  

