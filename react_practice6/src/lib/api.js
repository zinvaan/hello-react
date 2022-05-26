import axios from 'axios';

export const getPost = (id) => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
export const getUsers = (id) => {
  axios.get(`https://jsonplaceholder.typicode.com/users`);
};

/*
이번에 만들 컴포넌트는 post의 경우 title, body 만 보여주고,
user의 경우 username과 email만 보여줄 것이다.
 *post
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
 *users
 [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
]
 */
