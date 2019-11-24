# Calculator Skeleton
This project contains an empty calculator skeleton that you should use to test out events in JavaScript. A helper object called "Calculator" has been created to help you perform calculator-related calculations. Further down in this README, you will find the methods you can use.


### Tasks
1. Add event listeners to the buttons so that the appropriate actions happen when the buttons are clicked.
    - When a button is clicked, append its content to the _formula_ variable.
    - When the equal (`=`) button is clicked, perform the calculation by passing the _formula_ variable to the appropriate _Calculator_ method.
2. Use the "`your code.js`" file for your script

---
## Methods

| Method                            | Parameters                                | Returns                   |
| --------------------------------- | ----------------------------------------- | ------------------------- |
| Calculator.setDisplayValue()      | a string that the display should show     | nothing                   |
| Calculator.clearDisplay()         | nothing                                   | nothing                   |
| Calculator.calculate()            | The formula as a string                   | The answer to the formula |

---
## Example

Here is an example of how to use the Calculator methods:

```javascript
var formula = "";   //empty string variable
var answer = null;

formula += "21";    //appends 21 to the end of the string
formula += "/";     //appends the divide symbol to the end of the string
formula += "3";     //appends 3 to the end of the string

Calculator.setDisplayValue(formula); // the display will now show "21/3"

answer = Calculator.calculate(formula); // the answer is now 7

Calculator.setDisplayValue(answer); // the display will now show "7"
```


If at any time you need to clear the display, use:

```javascript
Calculator.clearDisplay()
```


To add an event listener to the button, you can use:

```javascript
variableContainingButton.addEventListener("EVENT_TYPE",function(event){
    //anything in here will run when the event is triggered.
});
```
Note that in the example above, `variableContainingButton` and `EVENT_TYPE` should be replaced with your values respectively.