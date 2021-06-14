const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
let clothes = document.querySelector('#tab_1').innerHTML = `

<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>


`

let clothes2 = document.querySelector('#tab_2').innerHTML = `

<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>


`
let clothes3 = document.querySelector('#tab_3').innerHTML = `

<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>


`
let clothes4 = document.querySelector('#tab_4').innerHTML = `

<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>


`
let clothes5 = document.querySelector('#tab_5').innerHTML = `

<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>
<div class="tabs__img"><img class="img" src="http://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="#"></div>


`

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId) ;

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});