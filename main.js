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
    get_user.innerHTML = `Name : ${res.data.name}`;
    repo.innerHTML = `Repositories : ${res.data.public_repos}`;
    url.innerHTML = `Link : ${res.data.html_url}`;
    console.log(res);
  })
};

butt.addEventListener("click" , () => {
  show();
});
