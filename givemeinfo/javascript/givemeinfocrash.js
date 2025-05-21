let img = document.getElementsByClassName('sitecrash')[0];
window.addEventListener('load', animation)

// The for loop updates the content of <p> using the array every 5 seconds. 
function animation() {
    let arrJapanese = [`あっ・・・`, `・・・`, `まさかここでサイトが落ちるとは・・・`, `まぁそんなこともあるか。`, `次こそはデータ盗らせてね！`, `ばいばいー`];
    let arrEnglish = [`Oh...`, `...`, `The site crashed before I could get your credit card info.`, `Oh well, something something entropy.`, `I'll get your info someday.`, `See ya!`];
    let crashText = document.querySelector('.crash-text');
    let query = new URLSearchParams(window.location.search);
    let lang = query.get("lang");

    if (lang === "english") {
        for (let i = 0; i < arrEnglish.length; i++) {
            setTimeout(function() {
            crashText.textContent = arrEnglish[i];
            }, i * 5000);
        }
        let img = document.getElementsByClassName('sitecrash')[0];
        setTimeout(function() {
            img.style.display = 'none';
        }, arrEnglish.length * 5000);  
    } else {
        for (let i = 0; i < arrJapanese.length; i++) {
            setTimeout(function() {
            crashText.textContent = arrJapanese[i];
            }, i * 5000);
        }
        let img = document.getElementsByClassName('sitecrash')[0];
        setTimeout(function() {
            img.style.display = 'none';
        }, arrJapanese.length * 5000);    
    }
}

// Stupid advertisement that re-pops in 2s even if you pressed the X button.
let ad = document.querySelector('.advertisement');
let yanAdvertisement = document.getElementById('yan-advertisement-img');
let adX = document.querySelector('.advertisement-x');
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


/* 
    for (let i = 0; i < arrJapanese.length; i++) {
        setTimeout(function() {
        crashText.textContent = arrJapanese[i];
        }, i * 5000);
    }
    let img = document.getElementsByClassName('sitecrash')[0];
    setTimeout(function() {
        img.style.display = 'none';
    }, arrJapanese.length * 5000);

*/