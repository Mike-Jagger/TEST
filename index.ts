type phoneName = string;
type phoneSize = number;
type phoneBuyDate = number;

interface Phone {
    name: phoneName,
    size: phoneSize,
    dateBought: phoneBuyDate
}

type AnotherPhone = Phone;

const myPhone: Phone = {
    name: 'Samsung',
    size: 20,
    dateBought: 2020
}

console.log(myPhone);

const anotherPhone: AnotherPhone = {
    name: 'Apple',
    size: 30,
    dateBought: 2021
}

console.log(anotherPhone);