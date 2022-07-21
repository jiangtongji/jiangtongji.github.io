
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.ico'){
        myImage.setAttribute('src', 'images/firefox2.ico');
    }
    else{
        myImage.setAttribute('src', 'images/firefox.ico')
    }
}


let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName){
        myName = '匿名用户';
    }
    else{
    localStorage.setItem('name', myName);
    }
    myHeading.textContent = '欢迎 '+ myName + " 前来访问";
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = '欢迎 ' + storeName + ' 前来访问';
}

myButton.onclick = function(){
    setUserName();
}
