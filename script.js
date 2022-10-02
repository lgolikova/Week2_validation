class Cat {
    constructor(options) {
        this.catname = options.catname;
        this.breed = options.breed;
        this.food = options.food;
        this.gender = options.gender;
        this.age = options.age;
    }
}

// let gender = document.querySelector("input[type='radio']:checked");
// let name1 =  document.getElementById('catname');
let btn = document.getElementById('ok');
// let breed = document.getElementById('breed');
// let age =  document.getElementById('age');
let foodArr = [];

btn.addEventListener('click', () => {
    document.querySelectorAll('.food').forEach((item) => {
        if (item.checked) {
            foodArr.push(item.value);
        }
    })
    let cat = new Cat({
        catname: document.getElementById('catname').value,
        breed: document.getElementById('breed').value,
        food: foodArr,
        gender: document.querySelector("input[type='radio']:checked").value,
        age: document.getElementById('age').value,
    })
    console.log(cat);
})








// let btn = document.getElementById('ok');
// let name1 =  document.getElementById('name');
// let gender = document.getElementById("input[type='radio']:checked");
// let age =  document.getElementById('age');
// let breed = document.getElementById('poroda');
// let foodArr = [];


// class Cat {
//     constructor(catname, breed, food, gender, age) {
//         this.catname = catname;
//         this.breed = breed;
//         this.food = food;
//         this.gender = gender;
//         this.age = age;
//     }
// }

// // let myCat = new Cat (name1, breed, foodArr, gender, age);
// //     console.log(myCat); 

// btn.addEventListener('click', () => {
//     document.querySelectorAll('.food').forEach((item) => {
//         if (item.checked) {
//             foodArr.push(item.value)
//         }
//     })

//     let myCat = new Cat(name1.value, breed.value, foodArr, gender, age.value);
//     console.log(myCat); 

// })

