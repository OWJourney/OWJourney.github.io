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

// Comments
let pNameComment = document.querySelector('.p-name-comment'); 
let favoriteFoodH2 = document.querySelector('.favorite-food-h2')
let favoriteFoodCommentP = document.querySelector('.favorite-food-comment-p')
let howManyFoodH2 = document.querySelector('.how-many-food-h2');
let howManyFoodCommentP = document.querySelector('.how-many-food-comment-p')

buttonOne.onclick = function() {
    intro.style.display = 'none';
    name.style.display = 'flex';
}

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
    setTimeout(nextOne, 100);
    }
}

function nextOne() {
    let nameInput = document.getElementById('username').value;
    nameComment.style.display = 'none';
    favoriteFood.style.display = 'flex';
    favoriteFoodH2.innerHTML = `次に${nameInput}の好きな食べ物を教えてくれる？`;
}

buttonThree.onclick = function() {
    let foodInput = document.getElementById('food').value;
    if (foodInput.trim() === "") {
        alert("好きな食べ物の名前を入れろって言ってんの！");
        return;
    } else {
    favoriteFood.style.display = 'none';
    favoriteFoodComment.style.display = 'flex';
    favoriteFoodCommentP.innerHTML = `${foodInput}が好きなんだ・・・珍しいね。`;
    setTimeout(nextTwo, 100);
    }
}

function nextTwo() {
    let foodInput = document.getElementById('food').value;
    favoriteFoodComment.style.display = 'none';
    howManyFood.style.display = 'flex';
    howManyFoodH2.innerHTML = `じゃあさじゃあさ、その${foodInput}って食べ物、一日に何個食べられる？`;
}

buttonFour.onclick = function() {
    let numberInput = Number(document.getElementById('food-amount').value);
    howManyFood.style.display = 'none';
    howManyFoodComment.style.display = 'flex';
    if (numberInput <= 0) {
        howManyFoodCommentP.innerHTML = `え、まじ？好物なのに？`;
    } else if (numberInput === 1 || numberInput === 2) {
        howManyFoodCommentP.innerHTML = `まぁそれくらいだよね！`;
    } else {
        howManyFoodCommentP.innerHTML = `え・・・？食べすぎじゃない？`;
    }
    setTimeout(nextThree, 100);
}

function nextThree() {
    howManyFoodComment.style.display = 'none';
    frog.style.display = 'flex';
    setTimeout(nextFour, 100);
}

function nextFour() {
    frog.style.display = 'none';
    securityQuestion.style.display = 'flex';
}

let colorInput = document.getElementById('fav-color');
let petInput = document.getElementById('pet-name');
let growInput = document.getElementById('grow-street');
let gameInput = document.getElementById('fav-game');

colorInput.addEventListener('input', nextFive);
petInput.addEventListener('input', nextFive);
growInput.addEventListener('input', nextFive);
gameInput.addEventListener('input', nextFive);

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
        securityQuestion.style.display = 'none';
        creditCard.style.display = 'flex';
    }
}

let cardInput = document.getElementById('credit-card');
cardInput.addEventListener('input', nextSix);

function nextSix() {
    location.reload()
}
