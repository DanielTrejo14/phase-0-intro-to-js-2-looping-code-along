const names = ["Leigh-Anne", "Ashley", "Ingrid"]
const eventName = "surprise"
function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }
    return messages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(5);