const Async = () => {
  let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  };
  // callback hell
  /*
  let order = (Fruit_index, call_production) => {
    setTimeout(() => {
      console.log(`STEP1:${stocks.Fruits[Fruit_index]} was selected.`);
      call_production();
    }, 2000);
  };
  let production = () => {
    setTimeout(() => {
      console.log('*production has started. ');
    }, 0);
    setTimeout(() => {
      console.log('STEP2: the fruit has been chopped.');
      setTimeout(() => {
        console.log(
          `STEP3:${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`,
        );
        setTimeout(() => {
          console.log('STEP4: machine was STARTED!');
          setTimeout(() => {
            console.log(`STEP5: ice cream was placed on${stocks.holder[0]}. `);
            setTimeout(() => {
              console.log(`STEP6:${stocks.toppings[0]} was added.`);
              setTimeout(() => {
                console.log('STEP7: serve ice cream.');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  order('0', production);
*/

  // Promise
  /*
let is_shop_open = true;
  let order = (work, time) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log('our shop is closed.'));
      }
    });
  };

  // 화살표 함수를 사용해 한 줄로 작성할 경우 바로 return 되기 때문에
  // return 을 생략할 수 있으나,
  // 여러 줄로 작성 할 경우 return 을 반드시 명시해주어야 한다.
  // promise 구문에서 .then(),.catch(),.finally() 다음에 세미콜론(;)을 붙이면 안된다.
  order(() => console.log(`STEP1:${stocks.Fruits[0]} was selected.`), 2000)
    .then(() => {
      return order(() => console.log('*Production has started.'), 0);
    })
    .then(() => {
      return order(() => console.log('STEP2: the fruit was chopped.'), 2000);
    })
    .then(() => {
      return order(
        () =>
          console.log(
            `STEP3: ${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`,
          ),
        1000,
      );
    })
    .then(() => {
      return order(() => console.log('STEP4: start the machine.'), 1000);
    })
    .then(() => {
      return order(
        () => console.log(`STEP5: ice cream placed on ${stocks.holder[0]}.`),
        2000,
      );
    })
    .then(() => {
      return order(
        () => console.log(`STEP6: ${stocks.toppings[0]} was selected.`),
        3000,
      );
    })
    .then(() => {
      return order(() => console.log('STEP7: ice cream was served.'), 2000);
    })
    .catch(() => {
      return console.log('Customer left.');
    })
    .finally(() => {
      console.log('Day ended. shop is closed.');
    });
};
*/

  let is_shop_open = true;

  // const order = () => {
  //   return new Promise((resolve, reject) => {
  //     if(true){
  //       resolve()
  //     }
  //     else{
  //       reject()
  //     }
  //   });
  // };

  // order( )
  // .then()
  // .then()
  // .then()
  // .catch()
  // .finally()

  async function order() {
    try {
      await abc;
    } catch (error) {
      console.log("abc doesn't exist", error);
    } finally {
      console.log('runs code anyways');
    }
  }
};
export default Async;
