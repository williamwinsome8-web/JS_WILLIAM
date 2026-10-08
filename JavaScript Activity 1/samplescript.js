const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Winsome T. William";
}

)
const background = document.getElementById('changeBackground');
const profile = document.getElementById('profile');

background.addEventListener("click", function(){
    if(profile.style.background==='none'){
        profile.style.background='rgba(190, 114, 225, 0.7)'
    }
    else{
        profile.style.background='none'
    }
}
)
const buttontoggle = document.getElementById('toggleDetails');
const details = document.getElementById('details');

buttontoggle.addEventListener("click", function(){
    if(details.style.display === "none"){
        details.style.display="block";
        buttontoggle.textContent='Hide Details'
    }
    else{
        details.style.display = 'none';
        buttontoggle.textContent='Show Details'
    }
}
)