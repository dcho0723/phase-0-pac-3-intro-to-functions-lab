const shout = (aStr) => {
    return aStr.toUpperCase();
}

const whisper = (aStr) => {
    return aStr.toLowerCase();
}

const logShout = (aStr) => {
    console.log(aStr.toUpperCase());
}

const logWhisper = (aStr) => {
    console.log(aStr.toLowerCase());
}

const sayHiToGrandma = (aStr) => {
    if (aStr===aStr.toLowerCase()) {
        return "I can't hear you!";
    } else if (aStr === aStr.toUpperCase()) {
        return "YES INDEED!";
    } else if (aStr === "I love you, Grandma.") {
        return "I love you, too.";
    }
}

