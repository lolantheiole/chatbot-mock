function talk() {
    var know = {
        //key is the prompt recognised word from the user input
        //value is the response to the user from the chat bot
        "Hello": "Hi there &#128540",
        "Who are you": "Yolanda here ",
        "What can I do for you": "Buy me mcDonalds &#128540",
        "Okay": "Enkosi wethu, I will owe you one ",
        "Bye": "Okay later, I will wait for you"
    };
    var user = document.getElementById('userBox').value; 
    document.getElementById('chatLog').innerHTML = user + "<br>"; //loops and renders a response to the chatlog

    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I don't understand <br>";
    }
}