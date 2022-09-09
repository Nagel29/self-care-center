var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
];
var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather.",
];
var affirmationButton = document.querySelector('.affirmation');
var mantraButton = document.querySelector('.mantra');
var receiveMessageButton = document.querySelector('.receive-message-button');
var clearMessageButton = document.querySelector('.clear-message-button');
var addMessageButton = document.querySelector('.add-message-button')
var submitButton = document.querySelector('.submit-button');
var messageSection = document.querySelector('.message');
var addAffirmationButton = document.querySelector('.affirmation-add');
var addMantraButton = document.querySelector('.mantra-add');
var bellImage = document.querySelector('svg');
var addMessageForm = document.querySelector('#add-message-form');
var messageInput = document.querySelector('.add-message-input');


receiveMessageButton.addEventListener('click', randomize);
clearMessageButton.addEventListener('click', clearMessage);
addMessageButton.addEventListener('click', displayInput);
submitButton.addEventListener('click', submitMessage);

function findType(affirmation, mantra) {
  if (affirmation.checked) {
    return affirmations;
  }
  if (mantra.checked) {
    return mantras;
  }
}
function randomize() {
  if (!findType(affirmationButton, mantraButton)) {
    alert('Please select a type of message.')
  }
  var randomIndex = Math.floor(Math.random() * findType(affirmationButton, mantraButton).length);
  var randomMessage = findType(affirmationButton, mantraButton)[randomIndex];
  displayMessage(randomMessage);
}
function displayMessage(message) {
  bellImage.classList.add('hidden');
  addMessageForm.classList.add('hidden');
  messageSection.innerText = message;
  clearMessageButton.classList.remove('hidden');
}
function clearMessage() {
  if (bellImage.classList.contains('hidden')) {
    addMessageForm.classList.add('hidden');
    messageSection.innerText = "";
    clearMessageButton.classList.add('hidden');
    bellImage.classList.remove('hidden');
  } else {
    alert('No message to clear!')
  }
}
function displayInput() {
  bellImage.classList.add('hidden');
  messageInput.value = "";
  messageSection.innerText = "";
  addMessageForm.classList.remove('hidden');
  clearMessageButton.classList.add('hidden');
}
function submitMessage() {
  event.preventDefault();
  if (!findType(addAffirmationButton, addMantraButton)) {
    return alert('Please select a type of message.');
  }
  if (!messageInput.value) {
    return alert('Cannot submit blank message');
  }
  for (var i = 0; i < findType(addAffirmationButton, addMantraButton).length; i++) {
    if (findType(addAffirmationButton, addMantraButton)[i] === messageInput.value) {
      return alert(`This message already exists!`);
    }
  }
  findType(addAffirmationButton, addMantraButton).push(messageInput.value);
  addMessageForm.classList.add('hidden');
  messageSection.innerText = messageInput.value;
  clearMessageButton.classList.remove('hidden');
}
