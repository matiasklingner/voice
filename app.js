const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//
const greetings = [
    'Good morning im fine',
    'not so well, and you',
    'fine'
];

const weather = [
    'Weather is fine, today',
    'You need a tent',
    'its a nice day to be with your family'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listenter to the btn

btn.addEventListener('click', () => {
    recognition.onstart();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i dont know what you said';

    if (message,includes('how are you')){
        const finalText = 
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text =  finalText;
    }
    
    if (message, includes('weather')) {
        const finalText =
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch= 1;

    window.speechSynthesis.speak(speech);
}