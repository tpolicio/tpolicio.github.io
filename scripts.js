function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    document.getElementById("chat-log").innerHTML += '<div>User: ' + userInput + '</div>';
    // Aquí iría el código para enviar la entrada al backend y recibir la respuesta
}

