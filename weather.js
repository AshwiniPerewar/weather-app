function weather()
{
let city=document.querySelector("#weather").value;
const url=(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b829cb8dbb712898c23f08fd4a4b603`);

fetch(url)
.then(function(res)
{
    return (res.json());
})
.then(function(res)
{
    if(res.Response=='False')
    {
        error1(res);
    }
    else{
    console.log(res);
    show(res);
    }
})
.catch(function(err)
{
    console.log(err);

})
}



function show(el)
{
    
    document.querySelector("#container").innerHTML=null;
    let box=document.createElement("div");
    
     let name=document.createElement("h2");
     name.innerText=el.name;

     let temp=document.createElement("p");
    temp.innerText=`Current Temprature : ${Math.round(el.main.feels_like-273.15)}°C`;

     let min=document.createElement("p");
     min.innerText=`Min Temprature : ${Math.round(el.main.temp_min-273.15)}°C`;

     
     let max=document.createElement("p");
     max.innerText=`Max Temprature : ${Math.round(el.main.temp_max-273.15)}°C`;

     let humidity=document.createElement("p");
     humidity.innerText=`Humidity: ${el.main.humidity}%`;

     let wind=document.createElement("p");
     wind.innerText=`Wind: ${Math.round(el.wind.speed*3.6)}km/h`;

     let clouds=document.createElement("p");
     clouds.innerText=`clouds : ${el.clouds.all}`;

     var logo=document.createElement("div");
     logo.setAttribute("class","logo")

     let l=document.createElement("img");
     l.src="https://www.graphicsprings.com/filestorage/stencils/fab819ed45776b8504562ee10bb229d8.png?width=500&height=500";
     
     let sunrise=document.createElement("p");
     sunrise.innerText=`Sunrise : ${el.sys.sunrise}`;

     logo.append(l,sunrise);

     var logo1=document.createElement("div");
     logo1.setAttribute("class","logo1")

     let l1=document.createElement("img");
     l1.src="https://cdn.iconscout.com/icon/free/png-256/sunset-view-hotel-restaurant-holiday-sea-vacation-8-22867.png";
     
     let sunset=document.createElement("p");
     sunset.innerText=`Sunset : ${el.sys.sunset}`;

     logo1.append(l1,sunset);

      
     let map=document.querySelector("#gmap_canvas");
    map.src=`https://maps.google.com/maps?q=${el.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


   

     box.append(name,temp,min,max,humidity,wind,clouds,logo,logo1);

     
    
     document.querySelector("#container").append(box);
 
}

function error1()
{
    let image=document.createElement("img");
     image.src="https://c.tenor.com/NpZyGNG3SLEAAAAM/this-content-is-not-available.gif";
    document.querySelector("#container").append(image);
}


function getWeather()
{
navigator.geolocation.getCurrentPosition(success)

function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getLocation(crd.latitude,crd.longitude);
}

} 
  
function getLocation(lat,lon)
{
    const url=(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b829cb8dbb712898c23f08fd4a4b603`);

fetch(url)
.then(function(res)
{
    return (res.json());
})
.then(function(res)
{
    if(res.Response=='False')
    {
        error1(res);
    }
    else{
    console.log(res);
    show(res);
    }
})
.catch(function(err)
{
    console.log(err);

})
}
