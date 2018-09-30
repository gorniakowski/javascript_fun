//Budget controller
var budgetController = (function(){
    
    var Expense = function(id, description, value) {
        this.id = id; 
        this.description = description;
        this.value = value;
    } 
    
    var Income = function(id, description, value) {
        this.id = id; 
        this.description = description;
        this.value = value;
    } 
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem;
            //create new ID
            if (data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length -1].id + 1; 
            }else{
                ID = 0; 
            }
          
            //create new item
            if (type === 'exp'){
                newItem = new Expense (ID, des, val);
            }else if (type === 'inc'){
                newItem = new Income (ID, des, val);
            };
            //Push into data structure
            data.allItems[type].push(newItem);
            
            return newItem;

        
        },
        
        testing: function(){
            console.log(data);
        }
    }
    
})();

//UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    return {
        getinput: function () {
            return {
             type: document.querySelector(DOMstrings.inputType).value,
             description: document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value
            }; 

        
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    }


})();

//Global app controller
var controller = (function (budgetCtrl, UICtrl){
    
    var setupEventListeners = function () {
        var DOM = UIController.getDOMstrings();
    
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrAddItem);
    
        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
           
                ctrAddItem();    
            }
        })
    }
    
    
    
    var ctrAddItem = function(){
        var input, newItem; 
        
        input = UIController.getinput();
        newItem  = budgetController.addItem(input.type, input.description, input.value);
    }
  
    return {
        init: function() {
            console.log('App has started');
            setupEventListeners();
        }
    }
//code
})(budgetController, UIController);

controller.init();