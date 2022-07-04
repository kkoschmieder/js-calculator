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
            case 'Del':
                calculator.delete();
                break;
            case '+/-':
                calculator.signChange();
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
    //--Calculator display update with value from button--//
    displayUpdate: function(btnValue) {
        this.display.value += btnValue;
    },
    //--Calculator evaluate using math.js library method--//
    evaluate: function() {
        let result = math.evaluate(calculator.display.value);
        calculator.display.value = result;
    },
    //--Calculator display clear--//
    clear: function() {
        calculator.display.value ='';
    },
    //--Remove last character of string from Calculator Display--//
    delete: function() {
        let previousValue = calculator.display.value;
        let currentValue = 0;
        if (previousValue < 0) {
            currentValue = '';
        }
        else currentValue = previousValue.slice(0, -1);
        calculator.display.value = currentValue;
    },

    signChange: function() {
        let value = calculator.display.value;
        if (value == '') calculator.display.value = value;

        else {   
            value = value*(-1);
            calculator.display.value = value;
        }
    }

};
