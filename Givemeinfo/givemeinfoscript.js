// Sections
let intro = document.querySelector('.intro');
let name = document.querySelector('.name');
let nameComment = document.querySelector('.name-comment');
let favoriteFood = document.querySelector('.favorite-food');
let favoriteFoodComment = document.querySelector('.favorite-food-comment');
let howManyFood = document.querySelector('.how-many-food');
let howManyFoodComment = document.querySelector('.how-many-food-comment');
let frog = document.querySelector('.frog');
let securityQuestion = document.querySelector('.security-question');
let creditCard = document.querySelector('.credit-card');

// Buttons
let buttonOne = document.querySelector('.button-one');
let buttonTwo = document.querySelector('.button-two');
let buttonThree = document.querySelector('.button-three');
let buttonFour = document.querySelector('.button-four');
let adX = document.querySelector('.advertisement-x');

// Comments
let pNameComment = document.querySelector('.p-name-comment'); 
let favoriteFoodH2 = document.querySelector('.favorite-food-h2')
let favoriteFoodCommentP = document.querySelector('.favorite-food-comment-p')
let howManyFoodH2 = document.querySelector('.how-many-food-h2');
let howManyFoodCommentP = document.querySelector('.how-many-food-comment-p')

// For smartphones
let pNameCommentSmartphone = document.getElementsByClassName('main-text-smartphone')[1];
let howManyFoodH2Smartphone = document.getElementsByClassName('main-text-smartphone')[2];

// Displays the page "name".
buttonOne.onclick = function() {
    intro.style.display = 'none';
    name.style.display = 'flex';
}

// Displays the page "nameComment". Checks if the user has filled in something; returns an alert if nothing is inputted.
buttonTwo.onclick = function() {
    let nameInput = document.getElementById('username').value;
    if (nameInput.trim() === "") {
        alert("名前入力してって言ったよね？");
        return;
    } else {
    name.style.display = 'none';
    nameComment.style.display = 'flex';
    document.title = `${nameInput}のこと、教えてよ！`;
    pNameComment.innerHTML = `なるほど・・・${nameInput}って言うのね！ホームページのタイトルにメモしておくわね！上を見てみて！`;
    pNameCommentSmartphone.innerHTML = `なるほど・・・${nameInput}って言うのね！<br>タブのタイトルにメモしておくわね！<br>タブ一覧を開いてみて！`;
    setTimeout(nextOne, 5000);
    }
}

// Displays the page "favoriteFood".
function nextOne() {
    let nameInput = document.getElementById('username').value;
    nameComment.style.display = 'none';
    favoriteFood.style.display = 'flex';
    favoriteFoodH2.innerHTML = `次に${nameInput}の好きな食べ物を教えてくれる？`;
}

// Displays the page "favoriteFoodComment". Checks if the user has filled in something; returns an alert if nothing is inputted.
buttonThree.onclick = function() {
    let nameInput = document.getElementById('username').value;
    let foodInput = document.getElementById('food').value;
    if (foodInput.trim() === "") {
        alert("好きな食べ物の名前を入れろって言ってんの！");
        return;
    } else if (nameInput === foodInput) {
        alert("共食いやめてね？");
        return;
    } else {
    favoriteFood.style.display = 'none';
    favoriteFoodComment.style.display = 'flex';
    favoriteFoodCommentP.innerHTML = `${foodInput}が好きなんだ・・・珍しいね。`;
    setTimeout(nextTwo, 5000);
    }
}

// Displays the page "howManyFood".
function nextTwo() {
    let foodInput = document.getElementById('food').value;
    favoriteFoodComment.style.display = 'none';
    howManyFood.style.display = 'flex';
    howManyFoodH2.innerHTML = `じゃあさじゃあさ、その${foodInput}って食べ物、一日に何個食べられる？`;
    howManyFoodH2Smartphone.innerHTML = `じゃあさ、その${foodInput}って食べ物、<br>一日に何個食べられる？`;
}

// Displays different message depending on the number input. Checks for decimals and returns an alert if there is one.
buttonFour.onclick = function() {
    let numberInput = Number(document.getElementById('food-amount').value);
    if (!Number.isInteger(Number(numberInput))) {
        alert("小数点入れないでって言ったよね？");
        return;
    } else if (numberInput <= 2) {
        howManyFoodCommentP.innerHTML = `え、まじ？好物なのに？`;
    } else {
        howManyFoodCommentP.innerHTML = `え・・・？食べすぎじゃない？`;
    }
    howManyFood.style.display = 'none';
    howManyFoodComment.style.display = 'flex';
    setTimeout(nextThree, 5000);
}

// Displays the page "frog".
function nextThree() {
    howManyFoodComment.style.display = 'none';
    frog.style.display = 'flex';
    setTimeout(nextFour, 5000);
}

// Displays the page "securityQuestion".
function nextFour() {
    frog.style.display = 'none';
    securityQuestion.style.display = 'flex';
}


// Sets a loop to check if all fields are filled. When all fields are filled, displays the page "creditCard".
let colorInput = document.getElementById('fav-color');
let petInput = document.getElementById('pet-name');
let growInput = document.getElementById('grow-street');
let gameInput = document.getElementById('fav-game');

colorInput.addEventListener('blur', nextFive);
petInput.addEventListener('blur', nextFive);
growInput.addEventListener('blur', nextFive);
gameInput.addEventListener('blur', nextFive);

function nextFive() {
    let allFilled = true;
    let arr = [colorInput.value, petInput.value, growInput.value, gameInput.value];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim() === "") {
            allFilled = false;
            break;
        }  
    }     
    if (allFilled === true) {
        let nameInput = document.getElementById('username').value;
        securityQuestion.style.display = 'none';
        creditCard.style.display = 'flex';
        document.title = `${nameInput}の情報、盗らせてよ！`;
    }
}

// Listens to if the user interacted with the input field. When intereacted, will relocate the user to "givemeinfocrash.html".
let cardInput = document.getElementById('credit-card');
cardInput.addEventListener('click', nextSix);

function nextSix() {
    window.location = "givemeinfocrash.html";
}

// Stupid advertisement that re-pops in 2s even if you pressed the X button.
let ad = document.querySelector('.advertisement');
let yanAdvertisement = document.getElementById('yan-advertisement-img');
adX.addEventListener('click', peekabo);

function peekabo() {
    ad.classList.remove('reappear');
    ad.classList.add('hide');
    setTimeout(peekaboo, 2000);
}

function peekaboo() {
    ad.classList.remove('hide');
    ad.classList.add('reappear');
}
