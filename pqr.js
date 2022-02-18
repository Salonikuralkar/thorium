function filterOddNumbers(num) {

        if (num % 2 === 0) {
    
            return true;
    
        } else {
    
            return false;
    
        }
    
    }
    
const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);
console.log(evenNumbers)