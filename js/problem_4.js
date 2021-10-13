const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// function addS(num) {
//     if(num === 1) {
//         return '';
//     } else {
//         return 's';
//     }
// }


// Write your code here
messageInput.addEventListener('input', () => {

    if(messageInput.value.length <= MAX_CHARACTERS) {
        let charLeft = MAX_CHARACTERS - messageInput.value.length;
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');
        messageFeedback.classList.add('valid-feedback');
        messageFeedback.classList.remove('invalid-feedback');
        messageFeedback.textContent = charLeft + ' character' + addS(charLeft) + ' left';
    }

    else {
        let charExc =  messageInput.value.length - MAX_CHARACTERS;
        messageInput.classList.remove('is-valid');
        messageInput.classList.add('is-invalid');
        messageFeedback.classList.remove('valid-feedback');
        messageFeedback.classList.add('invalid-feedback');
        messageFeedback.textContent = charExc + ' character' + addS(charExc) + ' too long';
    }
});
