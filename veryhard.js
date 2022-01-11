//veryhard////
function veryhard() {
    number1 = Number(prompt("Please enter the 1st number"));
    mathOperation = prompt("Please enter +, -, *, or /");
    number2 = Number(prompt("Please enter the 2nd number"));

    if (anyOperation === "+") {
        add();
    }
    else if (anyOperation === "-") {
        subtract();
    }
    else if (anyOperation === "*") {
        multiply();
    }
    else if (anyOperation === "/") {
        divide ();
    }
    else {
        console.log(`That the incorrect math function`);
    }
}
///took time to understand it//