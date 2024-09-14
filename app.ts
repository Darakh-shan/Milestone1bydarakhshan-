// Milestone1

const button = document.getElementById('Submit') as HTMLButtonElement;
const skills = document.getElementById('skillhide') as HTMLElement;


button.addEventListener('click' , ()=>{
    if(skills.style.display === 'none'){
        skills.style.display ='block'
    }else{
        skills.style.display = 'none'
    }
});
