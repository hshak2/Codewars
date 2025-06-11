function validateHello(greetings) {
    const messages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    const lowerCaseGreetings = greetings.toLowerCase();
  
    for (let i = 0; i < messages.length; i++) {
      if (lowerCaseGreetings.includes(messages[i])) {
        return true;
      }
    }
  
    return false;
  }
    