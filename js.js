const button=document.getElementById("button");
  const namee=document.getElementById("acc1");
    const twitter=document.getElementById("acc2");
      const email=document.getElementById("acc3");
      const followers=document.getElementById("followers");
      const following=document.getElementById("following");
      const locationn=document.getElementById("locationn");
button.addEventListener("click",function(){
    const username=document.getElementById("input").value;
    fetch(`https://api.github.com/users/${username}`)
    .then((res)=>res.json())
    .then((data)=>{
        const img=document.getElementById("img");
        img.src=data.avatar_url;
        namee.textContent=data.name;
        twitter.textContent=data.html_url;
        email.textContent=data.email;
        followers.textContent=data.followers;
        following.textContent=data.following;
        locationn.textContent=data.location;
    })
    .catch((error)=>console.log(error));
})
// good work