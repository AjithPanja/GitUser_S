const user = document.querySelector("#user_n");
const butt = document.querySelector("#submit");
const get_user = document.querySelector(".username");
const repo = document.querySelector(".Repository");
const url = document.querySelector(".link");

const fetch_user = async(userr) => {
  const api_call = await fetch(`https://api.github.com/search/users?q=${userr}`);
  const data = await api_call.json();
  return {data};
};

const show = () =>
{
  fetch_user(user.value).then((res)=>{
    // get_user.innerHTML = `Name : ${res.data.items[2].name}`;
    // repo.innerHTML = `Repositories : ${res.data.items[2].public_repos}`;
    // url.innerHTML = `Link : ${res.data.items[2].html_url}`;
    var i;
    for(i=1;i<=3;i++)
    {
      var id = 'no'+i;
      var img = 'img'+i;
      console.log(id);
      console.log(img);
      document.getElementById(img).innerHTML=`<img style = "width:100%" src = ${res.data.items[i-1].avatar_url}></img><div class = "containerr">${res.data.items[i-1].login}</div>`;
      document.getElementById(img).href=`${res.data.items[i-1].html_url}`;
    }
    document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.carousel');
       var instances = M.Carousel.init(elems, false);
     });
    console.log(res);
    caro();
  })
};

butt.addEventListener("click" , () => {
  show();
});

var caro = () =>
{document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems, duration = '100');
 });
};
