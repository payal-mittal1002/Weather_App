const tempField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const timeField=document.querySelector(".weather2 span");
const imgField=document.querySelector(".weather3 img");
const conditionField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".text");
const form=document.querySelector("form")
form.addEventListener("submit",search1);
let target="delhi";

const fetchAPI=async(target)=>{
    try {
        const url=`https://api.weatherapi.com/v1/current.json?key=002a9f9578f249e5a8122000232405&q=${target}`;
        const response = await fetch(url);
        const data= await response.json();
        const {current:{temp_c,condition:{text,icon}},location:{name,localtime}}=data;
       updateAPI(temp_c,name,localtime,icon,text);  
    } catch (error) {
        alert("Location not found")
    }
   
}
fetchAPI(target);
const updateAPI=(temp_c,name,localtime,icon,text)=>{
        tempField.innerHTML=`${temp_c}°`;
        cityField.innerHTML=name;
             const exacttime=localtime.split(" ")[1];
             const exactdate=localtime.split(" ")[0];
             const exactday=new Date(localtime).getDay();
             const day=getdays(exactday);
        timeField.innerHTML=`${exacttime} - ${day} ${exactdate}`;
        imgField.src=icon;
        conditionField.innerHTML=text;
}

const getdays=(exactday)=>{
         switch (exactday) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break; 
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
                
            default:
                return "don't Know"
                break;
         }
}
function search1(e){
    e.preventDefault();
    target=searchField.value
    console.log(target);
    fetchAPI(target);
}

