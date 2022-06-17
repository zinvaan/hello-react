const Async = () => {
  let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  };
  let order = (Fruit_index, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.Fruits[Fruit_index]} was selected.`);
      call_production();
    }, 2000);
  };
  let production = () => {
    setTimeout(() => {
      console.log('production has started.');
    }, 0);
    setTimeout(() => {
      console.log('the fruit has been chopped.');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
      }, 1000);
    }, 2000);
  };

  order('0', production);
};
export default Async;
