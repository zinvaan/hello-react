const Async = () => {
  let stocks = {
    Fruits: [' strawberry ', ' grapes ', ' banana ', ' apple '],
    liquid: [' water ', ' ice '],
    holder: [' cone ', ' cup ', ' stick '],
    toppings: [' chocolate ', ' peanuts '],
  };
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
};
export default Async;
