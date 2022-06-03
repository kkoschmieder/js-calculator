window.onload = function() {
    console.log('true');
    calculator.init();
}

let calculator = {
    buttons: undefined,
    display: undefined,

    init: function() {
        this.buttons = document.querySelectorAll('button');
        this.display = document.getElementById('calculator-display');
        
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', this.onClick);
        }
    },

    onClick: function(event) {
        let buttonValue = event.target.innerHTML;
        console.log('Click, '+ buttonValue);
        switch(buttonValue) {
            case '=':
                calculator.evaluate();
                break;
            case 'C':
                calculator.clear();
                break;
            case '9':
            case '8':
            case '7':
            case '6':
            case '5':
            case '4':
            case '3':
            case '2':
            case '1':
            case '0':
            case '.':
            case '*':
            case '+':
            case '-':
            case '/':
                calculator.displayUpdate(buttonValue);
                break;
        }

    },

    displayUpdate: function(btnValue) {
        this.display.value += btnValue;
    },

    evaluate: function() {
        let result = math.evaluate(calculator.display.value);
        calculator.display.value = result;
    },

    clear: function() {
        calculator.display.value ='';
    }

};
