const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

let clickCount = 0;
clickCountButton.onclick = function() {
    clickCount += 1;
    clickCountButton.innerHTML = "You click me the button " + clickCount + " time" + addS(clickCount);
};