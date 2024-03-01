const students = [
    {
        id: 1,
        name: "Ahmed",
        score: 80,
    },
    {
        id: 2,
        name: "Mazero",
        score: 90,
    },
    {
        id: 3,
        name: "Elham",
        score: 100,
    },
    {
        id: 4,
        name: "Osama",
        score: 70,
    },
    {
        id: 5,
        name: "Gamal",
        score: 85,
    },
];

let studentsCount = students.length
let totalScore = students.reduce(function(prev , current){
    return prev + current.score
},0)
let average = totalScore/ studentsCount ;
console.log(`${average}%`);

