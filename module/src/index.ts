{
    function formatString(input: string, toUpper?: boolean): string
{
    if(toUpper=== null|| toUpper ===false){
        return input;
    }else{
       
            let result = "";
            for (let i = 0; i < input.length; i++) {
              result += input[i].toUpperCase();
            }
            return result;
    }
  }
  console.log(formatString("Hello"));        
console.log(formatString("Hello", true));  
console.log(formatString("Hello", false));




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result: { title: string; rating: number }[] = [];
    items.forEach(item => {
      if (item.rating >= 4.0) {
        result.push(item);
      }
    });
    return result;
  }
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  console.log(filterByRating(books));  




function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
      for (let array of arrays) {
      for (let item of array) {
        result.push(item);
      }
    }
    return result;
  }
  console.log(concatenateArrays(["a", "b"], ["c"]));  
console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle{
    constructor(private make:string,private year:number){}
    public getInfo():void{
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle{
    constructor(make:string,year:number,private model:string){
        super(make,year);
    }
    public getModel():void{
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota",2020,"Corolla");
myCar.getInfo();  
myCar.getModel();


function processValue(value: string | number): number{
    if(typeof value === "string") {
        return value.length;
    }else{
        return value*2;
    }
}
console.log(processValue("hello"));
console.log(processValue(10));


interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0){
        return null;
    } else{
        let max= products[0];
        for (let i = 1; i < products.length; i++) {
        if (products[i].price > max.price) {
        max = products[i];
          }
      }
      return max;
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
 


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string{
    switch (day) {
        case Day.Monday:
            return "Weekday";
        case Day.Tuesday:
            return "Weekday";
        case Day.Wednesday:
            return "Weekday";
        case Day.Thursday:
            return "Weekday";
        case Day.Friday:
            return "Weekday";
        case Day.Saturday:
            return "Weekday";
        case Day.Sunday:
            return "Weekend";
        default:
            return "Invalid day";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));



async function squareAsync(n: number): Promise<number>{
    if(n<0){
        throw new Error("Negative number not allowed");
    }
        await new Promise(res=> setTimeout(res, 1000));
        return n * n;
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);


}