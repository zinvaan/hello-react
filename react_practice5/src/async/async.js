// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
  return new Promise((resolve, rejcet)=>{
    // do network request in 10 sec...
    return 'ellie';
  })
};

const user = fetchUser();
user
.then(console.log);
console.log(user);