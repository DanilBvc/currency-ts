export interface Store {
    state:{[index: string]: number},
    setCurrency(array : [{cc: string, exchangedate: string, r030: number, rate: number, txt: string}]) : void,
    getCurrency(name: string):number | undefined,
    calculateCurrency(optionFirst: string, optionSecond: string, value: number, currentInput: number): number | undefined
}

 const store: Store = {
    state: {
    },
    setCurrency(array) {
        array.forEach(element => {
            this.state[element.cc] = element.rate
        });
    },
    getCurrency(name) {
        let obj = this.state
        for(let key in obj) {
            if(key === name){
                return obj[key]
            }
        }
    },
    calculateCurrency(optionFirst, optionSecond, value, currentInput) {
        let firstCurrency = null;
        let secondCurrency = null;
        if(optionFirst === optionSecond) {
            return value
           }
       if(optionSecond === "UAH" && currentInput === 1) {
        for(let key in this.state) {
            if(key === optionFirst) {
                return this.state[key] * value
            }
        }
       }else if(optionSecond === "UAH" && currentInput === 2) {
        for(let key in this.state) {
            if(key === optionFirst) {
                return value / this.state[key]
            }
        }
       }else if(optionFirst === "UAH" && currentInput === 2) {
        for(let key in this.state) {
            if(key === optionSecond) {
                return this.state[key] * value
            }
        }
       }else if(optionFirst === "UAH" && currentInput === 1) {
        for(let key in this.state) {
            if(key === optionSecond) {
                return value / this.state[key] 
            }
        }
       }else {
        for(let key in this.state) {
            if(key === optionFirst) {
                firstCurrency = this.state[key]
            }else if(key === optionSecond) {
                secondCurrency = this.state[key]
            }
        }
       }
       if(currentInput === 1 && firstCurrency !== null && secondCurrency !== null) {
        if(firstCurrency > secondCurrency) {
            return value * (firstCurrency / secondCurrency)
        }else {
            return value * (firstCurrency / secondCurrency)
        }
       }
       if(currentInput === 2 && firstCurrency !== null && secondCurrency !== null) {
        if(firstCurrency > secondCurrency) {
            return value * (secondCurrency / firstCurrency)
        }else {
            return value * (secondCurrency / firstCurrency)
        }
       }
    }
}
export default store as Store