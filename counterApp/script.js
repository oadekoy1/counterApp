      //1. Create a new variable called 'total' and assign it the div with the id of 'total'
      const total = (document.querySelector('#total'))
      
        //2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
        // Example: 
        function add() {
           total.textContent = Number(total.textContent) + 1
           window.alert(total.textContent)
        }

        function subtract() {
            total.textContent -=1
            window.alert(total.textContent)
        }
        
        function multiplyBy2() {
            total.textContent *=2
            window.alert(total.textContent)
        }

        function divideBy2() {
            total.textContent /=2
            window.alert(total.textContent)
        }

        function multiplyBy5() {
           total.textContent *=5
           window.alert(total.textContent)
        }

        function divideBy5() {
           total.textContent /=5
           window.alert(total.textContent)
        }
        // add 1 to the textContent of the total variable
        // update the value of the total variable textContent
        // use an alert to alert the user

        //3. Attach Functions to Buttons
        addBtn = document.querySelector("#add")
        subBtn = document.querySelector('#subtract')
        mult2Btn = document.querySelector('#mult-2')
        div2Btn = document.querySelector('#div-2')
        mult5Btn = document.querySelector('#mult-5')
        div5Btn = document.querySelector('#div-5')

        addBtn.addEventListener('click', add)
        subBtn.addEventListener('click', subtract)
        mult2Btn.addEventListener('click', multiplyBy2)
        div2Btn.addEventListener('click', divideBy2)
        mult5Btn.addEventListener('click', multiplyBy5)
        div5Btn.addEventListener('click', divideBy5)