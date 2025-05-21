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
let pNameCommentSmartphone = document.getElementsByClassName('main-text-smartphone')[0];

// Object with all texts (Japanese/English) stored.
const translation = {
    japanese: {
        title: `あなたのこと、教えてよ！`,
        return: `メインページに戻る`,
        textone: `あなたのこと教えて欲しいな！`,
        texttwo: `このサイトは娯楽を目的としています。個人情報を入力しないでください。`,
        textthree: `まずはあなたの名前を教えてくれるかな？`,
        textfourone: `なるほど・・・[username]って言うのね！ホームページのタイトルにメモしておくわね！上を見てみて！`,
        textfourtwo: `なるほど・・・[username]って言うのね！タブのタイトルにメモしておくわね！タブ一覧を開いてみて！`,
        textfive: `次にあなたの好きな食べ物を教えてくれる？`,
        textsix: `[userfood]が好きなんだ・・・珍しいね。`,
        textseven: `じゃあさ、その[userfood]って食べ物、一日に何個食べられる？`,
        texteight: `え・・・？食べすぎじゃない？`,
        textnine: `変な人。カエル化しちゃった＞＜`,
        textten: `最後にこれらだけ質問させて?質問の意図は深く考えないでね。`,
        texteleven: `最後にクレジットカードの情報を教えて？`,
        submitone: `スタート！`,
        submittwo: `送信！`,
        submitthree: `送信！`,
        submitfour: `送信！`,
        labelone: `好きな色は？`,
        labeltwo: `ペットの名前は？`,
        labelthree: `産まれた町の名前は？`,
        labelfour: `一番好きなゲームは？`,
        usernameplaceholder: "名前を入力してね",
        foodplaceholder: "食べ物の名前を入力してね",
        foodamountplaceholder: "数字を入力してね（小数点なし）"
    },

    english: {
        title: `Welcome, user!`,
        return: `Return to main page`,
        textone: `Tell me about yourself!`,
        texttwo: `This website is made for fun. Please do not input any personal details or information.`,
        textthree: `Let's start with telling me your name!`,
        textfourone: `Ah, So your name is [username]! I'll keep it memo-ed on the tab menu. Take a look!`,
        textfourtwo: `Ah, so your name is [username]! I'll keep it memo-ed in the tab menu. Take a look!`,
        textfive: `Next, why don't you tell me about your favorite food?`,
        textsix: `Oh... you like [userfood]...? In-interesting...`,
        textseven: `How many [userfood] do you think you can eat in a day?`,
        texteight: `Wha-, you fatass.`,
        textnine: `You're weird...`,
        textten: `Ok, just answer theses questions and we can wrap it up. Don't think too hard about what the questions are for.`,
        texteleven: `And your credit card number please?`,
        submitone: `Start!`,
        submittwo: `Submit!`,
        submitthree: `Submit!`,
        submitfour: `Submit!`,
        labelone: `What's your favorite color?`,
        labeltwo: `What's the name of your pet?`,
        labelthree: `Where were you born?`,
        labelfour: `What is your favorite game?`,
        usernameplaceholder: "Enter your name here!",
        foodplaceholder: "Enter your favorite food here!",
        foodamountplaceholder: "Enter a number here (no decimals please)!"
    }
}

// Displays the page "name".
buttonOne.onclick = function() {
    intro.style.display = 'none';
    name.style.display = 'flex';
}

/*  Displays the page "nameComment". Checks if the user has filled in something; returns an alert if nothing is inputted ("").
    Note to self: .trim() removes spaces from the beginning and end of a string. This prevents users from submitting only spaces as input. */
buttonTwo.onclick = function() {
    let lang = document.getElementById('language-select').value;
    let currentTranslation = translation[lang];
    let nameInput = document.getElementById('username').value;

    if (nameInput.trim() === "") {
        alert(lang === "english" ? "I told you to enter your name, didn't I?" : "名前教えてって言ったよね？");
        return;
    } else {
            name.style.display = 'none';
            nameComment.style.display = 'flex';
            document.title = lang === "english" ? `Welcome, ${nameInput}!` : `${nameInput}のこと、教えてよ！`;
            pNameComment.innerHTML = currentTranslation.textfourone.replace('[username]', nameInput);
            pNameCommentSmartphone.innerHTML = currentTranslation.textfourtwo.replace('[username]', nameInput);
            setTimeout(nextOne, 5000);
    }
}

// Displays the page "favoriteFood".
function nextOne() {
    let lang = document.getElementById('language-select').value;
    let nameInput = document.getElementById('username').value;

    nameComment.style.display = 'none';
    favoriteFood.style.display = 'flex';
    favoriteFoodH2.innerHTML = lang === "english" ? 
    `Next, why don't you tell me about your favorite food?` : `次にあなたの好きな食べ物を教えてくれる？`
}

// Displays the page "favoriteFoodComment". Checks if the user has filled in something; returns an alert if nothing is inputted.
buttonThree.onclick = function() {
    let lang = document.getElementById('language-select').value;
    let nameInput = document.getElementById('username').value;
    let foodInput = document.getElementById('food').value;

    if (foodInput.trim() === "") {
        alert(lang === "english" ? "I said, tell me your favorite food." : "好きな食べ物の名前を入れろって言ってんの！");
        return;
    } else if (nameInput === foodInput) {
        alert(lang === "english" ? "You like eating yourself?" : "共食いやめてね？");
        return;
    } else {
        favoriteFood.style.display = 'none';
        favoriteFoodComment.style.display = 'flex';
        favoriteFoodCommentP.innerHTML = lang === "english" ?
        `You like ${foodInput}...? In-interesting...` : `${foodInput}が好きなんだ・・・珍しいね。`;
        setTimeout(nextTwo, 5000);
    }
}

// Displays the page "howManyFood".
function nextTwo() {
    let lang = document.getElementById('language-select').value;
    let foodInput = document.getElementById('food').value;

    favoriteFoodComment.style.display = 'none';
    howManyFood.style.display = 'flex';
    howManyFoodH2.innerHTML = lang === "english" ? 
    `How many ${foodInput} do you think you can eat in a day?` : `じゃあさ、その${foodInput}って食べ物、一日に何個食べられる？`;
}

/*  Displays different message depending on the number input. Checks for decimals and returns an alert if there is one. 
    Note to myself cause I had to google this: By default, anything the user enters is seen as a string. Number() turns the user's input into a number.
    And Number.isInteger (not to be confused with Number() like I did) checks if the value is a full number aka integer. */
buttonFour.onclick = function() {
    let lang = document.getElementById('language-select').value;
    let numberInput = Number(document.getElementById('food-amount').value);

    if (!Number.isInteger(numberInput)) {
        alert(lang === "english" ? "Can you read? I said no decimals." : "小数点入れないでって言ったよね？");
        return;
    } else if (numberInput <=2) {
        howManyFoodCommentP.innerHTML = lang === "english" ? "Seriously? But I thought you said its your favorite food.": `え、まじ？好物なのに？`
    } else {
        howManyFoodCommentP.innerHTML = lang === "english" ? "Wha- You fatass." : `え・・・？食べすぎじゃない？`;
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
let lang = document.getElementById('language-select').value;
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
        document.title = lang === "english" ? `Let me steal your info, ${nameInput}!`: `${nameInput}の情報、盗らせてよ！`;
    }
}

// Listens to if the user interacted with the input field. When intereacted, will relocate the user to "givemeinfocrash.html".
let cardInput = document.getElementById('credit-card');
cardInput.addEventListener('click', nextSix);

function nextSix() {
    let lang = document.getElementById('language-select').value;

    if (lang === "english") {
        window.location = "/givemeinfo/html/givemeinfocrash.html?lang=english";
    } else {
        window.location = "/givemeinfo/html/givemeinfocrash.html?lang=japanese";    
    }
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

// Listens to when the user interacts with the pulldown, and initiates the function changeLanguage which you've guessed it, changes the language.
let select = document.getElementById('language-select');
select.addEventListener('change', changeLanguage);

/*  lang gets the value of the selected option in the HTML dropdown. translation[lang] works the same as arr[i].
    It uses the value to pick the correct language object, so the text updates to Japanese or English automatically.
    The value in each <option> must exactly match the key in the translation object for this to work! */

/*  The for...in loop goes through each key in the translation object and updates the text of elements with matching IDs.
    It skips textfourone, textfourtwo, textsix, and textseven because these contain dynamic text that is handled separately. */
function changeLanguage() {
    console.log('changed!');
    let lang = document.getElementById('language-select').value;
    let currentTranslation = translation[lang];
    for (let key in currentTranslation) {
        if (["textfourone", "textfourtwo", "textsix", "textseven"].includes(key)) continue;
        let keyName = document.getElementById(key);
        if (keyName !== null) {
            keyName.textContent = currentTranslation[key];
        }
    }

    let nameInput = document.getElementById('username').value;
    let foodInput = document.getElementById('food').value;
    
    let textFourOne = currentTranslation.textfourone.replace('[username]', nameInput);
    document.getElementById('textfourone').textContent = textFourOne;

    let textFourTwo = currentTranslation.textfourtwo.replace('[username]', nameInput);
    document.getElementById('textfourtwo').textContent = textFourTwo;

    let textSix = currentTranslation.textsix.replace('[userfood]', foodInput);
    document.getElementById('textsix').textContent = textSix;

    let textSeven = currentTranslation.textseven.replace('[userfood]', foodInput);
    document.getElementById('textseven').textContent = textSeven;

/*  This updates the placeholder text for each input. I could have included this in my loop,
    but sometimes programming is about making things work, not making them perfect. This code does the job! */
    let inputOne = document.getElementById('username');
    let placeholderOne = translation[lang].usernameplaceholder;
    inputOne.placeholder = placeholderOne;

    let inputTwo = document.getElementById('food');
    let placeholderTwo = translation[lang].foodplaceholder;
    inputTwo.placeholder = placeholderTwo;

    let inputThree = document.getElementById('food-amount');
    let placeholderThree = translation[lang].foodamountplaceholder;
    inputThree.placeholder = placeholderThree;
}