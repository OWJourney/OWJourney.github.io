let img = document.getElementsByClassName('sitecrash')[0];

window.addEventListener('load', animation)

function animation() {
    let arr = [`あっ・・・`, `・・・`, `まさかここでサイトが落ちるとは・・・`, `まぁそんなこともあるか。`, `次こそはデータ盗らせてね！`, `ばいばいー`];
    let crashText = document.querySelector('.crash-text');
    for (let i = 0; i < arr.length; i++) {
        setTimeout(function() {
        crashText.textContent = arr[i];
        }, i * 5000);
    }
    let img = document.getElementsByClassName('sitecrash')[0];
    setTimeout(function() {
        img.style.display = 'none';
    }, arr.length * 5000);
}
