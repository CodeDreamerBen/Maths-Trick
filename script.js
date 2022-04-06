function reload() {
    window.open(document.baseURI, "_self")
}
var dataset = ""
function yes() {
    dataset += "yes"
}
function no() {
    dataset += "no"
}
function main() {
    switch(dataset) {
        case "yes":
            document.getElementById("prompts").innerText = "1, 3, 5, 7, 8, 9";
            break;
        case "yesyes":
            document.getElementById("prompts").innerText = "1, 3, 4, 6, 8, 9";
            break;
        case "yesyesno":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 5!";
            setTimeout(reload, 2000)
            break;
        case "yesyesyes":
            document.getElementById("prompts").innerText = "1, 2, 4, 5, 7, 10";
            break;
        case "yesyesyesyes":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 1!";
            setTimeout(reload, 2000)
            break;
        case "yesyesyesno":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 9!";
            setTimeout(reload, 2000)
            break;
        case "yesno":
            document.getElementById("prompts").innerText = "2, 3, 5, 7, 8, 10";
            break;
        case "yesnono":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 6!";
            setTimeout(reload, 2000)
            break;
        case "yesnoyes":
            document.getElementById("prompts").innerText = "1, 4, 5, 6, 9, 10";
            break;
        case "yesnoyesyes":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 10!";
            setTimeout(reload, 2000)
            break;
        case "yesnoyesno":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 2!";
            setTimeout(reload, 2000)
            break;
        case "no":
            document.getElementById("prompts").innerText = "1, 3, 4, 6, 9, 10";
            break;
        case "noyes":
            document.getElementById("prompts").innerText = "2, 3, 5, 7, 8, 10";
            break;
        case "noyesyes":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 3!";
            setTimeout(reload, 2000)
            break;
        case "noyesno":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 4!";
            setTimeout(reload, 2000)
            break;
        case "nono":
            document.getElementById("prompts").innerText = "1, 2, 5, 7, 9, 10";
            break;
        case "nonoyes":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 7!";
            setTimeout(reload, 2000)
            break;
        case "nonono":
            document.getElementById("prompts").innerText = "3, 4, 6, 8, 9, 10";
            break;
        case "nononono":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 0!";
            setTimeout(reload, 2000)
            break;
        case "nononoyes":
            document.getElementById("question").innerText = "Wait while we generate a new game for you!";
            document.getElementById("prompts").innerText = "Your number is 8!";
            setTimeout(reload, 2000)
            break;
    }
}