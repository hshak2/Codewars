function oracle(gestures) {
    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    const losesTo = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    };

    const winningGestures = [];

    for (const ourGesture of ["rock", "paper", "scissors"]) {
        let wins = 0;
        let losses = 0;

        for (const opponentGesture of gestures) {
            if (beats[ourGesture] === opponentGesture) {
                wins++;
            } else if (losesTo[ourGesture] === opponentGesture) {
                losses++;
            }
        }

        if (wins > losses) {
            winningGestures.push(ourGesture);
        }
    }

    if (winningGestures.length > 0) {
        const gestureOrder = ["rock", "paper", "scissors"];
        const result = gestureOrder.filter(g => winningGestures.includes(g));
        return result.join("/");
    }

    return "tie";
}