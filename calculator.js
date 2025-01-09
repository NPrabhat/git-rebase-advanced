class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result = parseFloat((this.result + num).toFixed(2));
        return this;
    }
}
