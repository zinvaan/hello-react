// JavaScript is synchronous.
// Execute the code black by orger after hoisting.
// hoisting: var, function declaration
// console.log('1');
// setTimeout(()=>console.log('2'),1000);
// console.log('3');

// Synchronous callback
// 호이스팅으로 함수선언은 제일 상단으로 이동된다.
// function printImmediately(print){
//   print();
// }
// printImmediately(()=>console.log('hello'));

// Asynchronous callback
// function printWithDelay(print, timeout){
//   setTimeout(print,timeout);
// }
// printWithDelay(()=>console.log('async callback'),2000);


// Callback Hell example
class UserStorage {
  loginUser(id,password, onSuccess, onError) {
    setTimeout(()=>{
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else{
        onError(new Error('not Found'));
      }
    },2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(()=>{
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin', });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter tour password');
userStorage.loginUser(
  id, 
  password, 
  (user)=>{
  userStorage.getRoles(user, (userWithRole)=>{
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  }, (error)=>{
    console.log(error);
  })
}, 
(error)=>{
  console.log(error);
})