// * Normal Function
// * Arrow Function

function add(x: number, y: number): number {
    return x + y;
}

add(3, 2)

const addArrow = (x: number, y: number = 4) : number => {
    return x + y;
}
addArrow(2, 4)


// Object -> Function -> Method
const userSajib = {
    name : "Sajib",
    balance: 1000,
    addBalance(balance: number): string {
        return `My current balance is: ${this.balance + balance}`;
    }
}

const arr : number[] = [1, 2, 3];

const newArr: number[] = arr.map((num : number) : number => num * num)