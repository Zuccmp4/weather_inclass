const calculate = (a : number, b : number)=> {a+b};
let balance = 500;
let deposit = 500;
let hackerStringDeposit = '500';
let total = calculate(balance, deposit);

//Overtyping
 let name: string = "Potato";
 let age: number = 40;
 let likesPizza: boolean = true;
 // let weather: string = "sunny";

 // Type Inference 
let weather = "sunny";


//const weather = "sunny";
function getWeather(weather: string): string {
    return "The weather is " + weather;
}
getWeather(weather)

//undefined used for intentional absence of a value usually for problems
//null used for things to be empty on purpose

//Union Variable Types
let StringOrNumberUnionType: string | number;
StringOrNumberUnionType = "gerb";
StringOrNumberUnionType = 7;
const myFunc = (a: string | number, b: string | number)=> {
    console.log(a);
    console.log(b);
};

//Arrays
let genericArray: [] = [];
genericArray.push(1);
let numberArray: (number | string)[] = [];
numberArray.push(1);
let peopleArray: {}[] = [];
peopleArray.push({name: "Anthony", age: 40});
peopleArray.push({height: "6ft", weight: "too skinny"});

//Objects
// let weatherDetail: {
//     weather: string,
//     zipcode: string,
//     temp: number
// } = {weather: "sunny", zipcode: "00000", temp: 1}
// weatherDetail.weather = 2;
// let dynamicVariable: any = {name: "Gerbersha"};

//Creating a custom type
type WeatherDetailType = {
weather: string;
zipcode: string;
temp?: number;
};

let weatherDetail: WeatherDetailType = {
weather: "sunny",
zipcode: "00000",
temp: 30
};

let nyWeatherType: WeatherDetailType ={
    weather: "Clear",
    zipcode: "11554",
    temp: 45
}

const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;

//Using an interface
interface WeatherProps {
weather: string;
zipcode: string;
temp?: number;
}

let californiaWeather: WeatherProps ={
    weather: "Sunny",
    zipcode: "90210",
    temp: 72
}
const weatherComponent = (props: WeatherProps): string => props.weather;

