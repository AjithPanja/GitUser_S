const user = document.querySelector("#user_n");
const butt = document.querySelector("#submit");


var kummu = 0;
var temp = 0;

const fetch_user = async (userr) => {
  const api_call = await fetch(`https://api.github.com/search/users?q=${userr}`);
  const data = await api_call.json();
  return {
    data
  };
};

const show = () => {
  fetch_user(user.value).then((res) => {
    var k = res.data.items.length;
    var i;

    var jg = 0;
    if (k >= 3) {
      jg = 3;
    } else if (k == 2) {
      jg = 2;
    } else {
      jg = 1;
    }
    // console.log(k);
    if(kummu>0)
    {
    if(jg==2 && temp > 2)
    {
      document.getElementById('im3o').remove();
    }
    else if(jg==1 && temp > 1)
    {
      document.getElementById('im2o').remove();
      document.getElementById('im3o').remove();
    }
  }kummu=kummu+1;
  temp = k;
    // console.log(jg);
    for (i = 1; i <= jg; i++) {
      var id = 'no' + i;
      var img = 'img' + i;
      var j = 'im' + i;
      //
      // console.log(id);
      // console.log(j);

      // console.log(user_here[i - 1]);
      var jumma = j + 'o';
      document.getElementById(j).innerHTML = `<div class="card">

      <div class="card-image" id = ${jumma}>
        <img class="activator" src=${res.data.items[i-1].avatar_url}>
        <span style = "font-weight = bold" class="card-title"> ${res.data.items[i-1].login} </span>
        <a class="activator btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons ${res.data.items[i-1].login}">add</i></a>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${res.data.items[i-1].login}<i class="material-icons right">close</i></span>
        <p >User-Name : ${res.data.items[i-1].login} </p>
        <p >GitHub-Link : <a href = ${res.data.items[i-1].html_url} > ${res.data.items[i-1].html_url} </p>

      </div>
    </div>`

    }
  });
};

butt.addEventListener("click", () => {
  show();
});
