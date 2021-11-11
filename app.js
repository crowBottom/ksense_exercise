/*
OBJETIVE
You will be developing a one-page web application that receives JSON data and
renders the data into the DOM. You will be using the following API: https://jsonplaceholder.typicode.com/

1.make the endpoint calls
2.loop through user data and render the user's names as buttons
3.create method that takes an id paramaeter and loops through post data looking for posts with the provided user's id
4.render posts
*/

// GET request for all users
const get_users = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  users = res.data;
  for(let x of users){
      document.getElementById('users').innerHTML +=
      '<div class="w3-container">' +
        '<div class="w3-text-blue w3-btn w3-ripple" onclick="get_posts('+ x['id'] + ')">' + x['id'] +'. ' + x['name'] + '</div>' +
      '</div>';
  }
}

// GET request for all posts
let get_posts = async (id) => {
  document.getElementById('posts').innerHTML = '';
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  posts = res.data;
  document.getElementById('posts').innerHTML +=
    '<div class="w3-btn w3-ripple w3-text-blue" onclick="back_btn()"><i>back</i></div>' + '<br>' +
    '<h3>User ' + id + ' Posts</h3>';
  for(let post of posts){
    if(post['userId'] === id){
      document.getElementById('posts').innerHTML +=
        '<b>' + post['title'] + '</b>' + '<br>' +
        post['body'] + '<hr>'
    }
  }
}

//Back button clears POSTS div
let back_btn = () => {
  document.getElementById('posts').innerHTML = '';
}

get_users();
