// We need: 
// ~~~ Module for UI ~~~~
// ~~~ Module for Budget ~~~~
// ~~~ Module to connect both ~~~ 
// Use Invoked functions (function(){})();


// **** BUDGET CONTROLLER **** //
var BudgetController = (function(){
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function(totalIncome){
        // a = 10;
        // b = 20;
        // totalIncome = 200;
        // a = (10 / 200 ) * 100 // 5%

        this.percentage = Math.round((this.value / totalIncome) * 100);
    }

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function(type){
        sum = 0;
        data.allItems[type].forEach(function(cur){
            sum+= cur.value;
        })
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, desc, val){
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type

            if(type === 'exp'){
                newItem = new Expense(ID, desc, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, desc, val);
            }

            // Push it into our data stracture
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        deleteItem: function(type, id){
            var ids, index;

            ids = data.allItems[type].map(function(cur){
                return cur.id;  
            })
            
            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function(){
            // Calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if(data.totals.inc > 0 && data.totals.exp > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            } 
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            })
        },
    
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            })
            return allPerc;
        },
        getTotal: function(){
            return {
                totalExp: data.totals.exp,
                totalInc: data.totals.inc,
                budget: data.budget,
                percentage: data.percentage
            }
        },
        testing: function(){
            return data;
        }
    }
})();

// **** UI CONTROLLER **** //
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        monthLabel: '.budget__title--month'
    }

    var formatNumber = function(num, type){
        var numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');
        
        int = numSplit[0];
        dec = numSplit[1];

        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    }

    var nodeListForAll = function(list, callback){
        for(var i=0; i<list.length; i++){
            callback(list[i], i);
        }
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        
        addListItem: function(obj, type){
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if(type === 'inc'){
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                element = DOMStrings.incomeContainer;
            }else if(type === 'exp'){
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                element = DOMStrings.expensesContainer;
            }

            // Replace the placeholder with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function(){
            var field, fieldsArr;

            field = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(field);
            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        deleteListItem: function(selectorId){
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },

        displayBudget: function(obj){
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            nodeListForAll(fields, function(item, index){
                if(percentages[index] > 0){
                    item.textContent = percentages[index] + '%';
                }else{
                    item.textContent = '---';
                }
            })
        },
        getDOMStrings: function() {
            return DOMStrings
        },
        getDate: function(){
            var now, months, month, year;

            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'July', 'June', 'August', 'September', 'October', 'December']

            month = now.getMonth();

            year = now.getFullYear();

            document.querySelector(DOMStrings.monthLabel).textContent = months[month] + ' ' + year;
        },
        changedType: function(){
            var inputs = document.querySelectorAll(
                DOM.inputDescription + ', ' +
                DOM.inputType + ', ' +
                DOM.inputValue
            )

            nodeListForAll(inputs, function(cur){
                cur.classList.toggle('red-focus');
            })

            document.querySelector(DOM.addButton).classList.toggle('red');
        }
    }
})();

var controller = (function(BudgetCtrl, UICtrl){

    var setupEventListeners = function(){
        DOM =  UICtrl.getDOMStrings();
 
        document.querySelector(DOM.addButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keydown', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        })

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    }

    var updateBudget = function (){
        // 1. Calculate the budget
        BudgetCtrl.calculateBudget();

        // 2. Update the budget
        total = BudgetCtrl.getTotal();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(total);
    }

    var updatePercentages = function(){
        //  1. Calculate Percentages
        BudgetCtrl.calculatePercentages();

        //  2. Read percenteges from the BudgetController
        var percentages = BudgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages;
        UICtrl.displayPercentages(percentages);
    }
    
    function ctrlAddItem(){
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();
        
        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            // 2. Add the item to the budget controller
            newItem = BudgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI 
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear fields
            UICtrl.clearFields();

            // 5. Calculate and Update the budget
            updateBudget();

            // 6. Calculate and update the percentages
            updatePercentages();
        }
    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
        }

        // 1. Delete the item from the structure
        BudgetCtrl.deleteItem(type, ID);

        // 2. Delete the item from the UI
        UICtrl.deleteListItem(itemID);

        // 3. Update and show the budget
        updateBudget();

        // 4. Calculate and update the percentages
        updatePercentages();
    }

    return {
        init: function(){
            UICtrl.getDate();
            setupEventListeners();
            UICtrl.displayBudget({
                totalExp: 0,
                totalInc: 0,
                budget: 0,
                percentage: 0
            })
        }
    }

    
})(BudgetController, UIController);

controller.init(); 