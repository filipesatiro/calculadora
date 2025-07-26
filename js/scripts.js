const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }
    // adicionando digitos a calculadora
    addDigit(digit){
        // check if current operation alredy has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
       this.currentOperation = digit;
       this.updateScreen();
    }

    // Process all calculator operations
    processOperation(operation){
        //Check if current is emempty
        if(this.currentOperationText === ""){
            // Change operation
            if(this.previousOperationText.innerText !== ""){
            this.changeOperation(operation);
            }
            return;
        }
        // Get current and previous value
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation){
        case "+":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
              case "-":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
              case "/":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
              case "*":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
            default:
                return;
        }



}
    //change values of the calcutator screen
    updateScreen(
        operationValue = null,
        operation = null, 
        current = null,
        previous = null
    ){

        console.log(operationValue, operation, current, previous);
        
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            //check if value is zero,if  it is just add current value
            if(previous === 0){
                operationValue = current
            }

            //Add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";

        }
    }
    // Change math operation
    changeOperation(operation){
        const mathOperations = ["*","/","+","-"]
        if(!mathOperations.includes(operation)){
            return
        }
        //123 Operations
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else {
            calc.processOperation(value);
        }
    });
});