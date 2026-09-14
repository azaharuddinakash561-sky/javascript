const device = {
    name: iPhone,
    model: 14,
    price: 999.99,
    color: "Space Gray",
    isAvailable: true, 
}

const {name: deviceName, ...deviceInfo} = device;

const number2: number[] = [1, 2, 3, 4, 5];

const newNumbers: number[] =[6, 7, 8, 9, 10];
const closeFriend: string[] = ["Alice", "Bob", "Charlie"];

const allNumbers: number[] = [...number2, ...newNumbers];