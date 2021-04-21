// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}*/

// Iteration 1 using callbacks
const steakCooked = new Promise((resolve, reject) => {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  //console.log('Steak cooked');
                  document.getElementById("table").innerHTML +=
                    '<img src="public/images/steak.jpg">';
                  resolve();
                  console.log(steakCooked);
                });
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const potatoesCooked = new Promise((resolve, reject) => {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    // ... your code here
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            document.getElementById("table").innerHTML +=
              '<img src="public/images/mashPotatoes.jpg">';
            resolve();
            console.log(potatoesCooked);
          });
        });
      });
    });
  });
}).catch((err) => {
  console.error(err);
});


// Iteration 3 using async and await

// const sproutsCooked = new Promise ((resolve, reject) => {
//   async function makeFood(steps) {
//     for (let i = 0; i < steps; i++) {
//       await addFood(brusselSprouts[i], "#brusselSprouts").then((result) => {
//         document.getElementById('table').innerHTML+='<img src=\"public/images/brusselSprouts.jpg\">';
//         resolve();
//         console.log(sproutsCooked);
//       });
//     }

//   }
//   makeFood(9);
// });
const sproutsCooked = new Promise((resolve, reject) => {
  async function makeFood() {
    await addFood(brusselSprouts[1], "#brusselSprouts");
    await addFood(brusselSprouts[2], "#brusselSprouts");
    await addFood(brusselSprouts[3], "#brusselSprouts");
    await addFood(brusselSprouts[4], "#brusselSprouts");
    await addFood(brusselSprouts[5], "#brusselSprouts");
    await addFood(brusselSprouts[6], "#brusselSprouts");
    await addFood(brusselSprouts[7], "#brusselSprouts");
    await addFood(brusselSprouts[8], "#brusselSprouts").then((result) => {
      document.getElementById("table").innerHTML +=
        '<img src="public/images/brusselSprouts.jpg">';
      resolve();
      console.log(sproutsCooked);
    });
  }
  makeFood();
});


// //BONUS 2
// Using promise.all when all dinner items (Steak, Mash Potatoes, and Brussels Sprouts) are all done and added to the table, alert Dinner is served!

Promise.all([steakCooked, potatoesCooked, sproutsCooked]).then((resolve) => {
  document.querySelector("body").innerHTML += `<button id="btn">Dinner is served!</button>`;
  document.getElementById("btn").addEventListener("click", audio);
});

const dinnerSound = new Audio();
dinnerSound.src = 'public/media/dinnerIsServed.mp3';

function audio () {
  dinnerSound.play();
}
