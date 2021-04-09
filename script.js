var data=fetch("https://restcountries.eu/rest/v2/all");
data.then(function (res){
    return res.json();
})
.then(function (res){
    //console.log(res);
    
    createPage(res);
})
.catch(function (err){
    console.log("404 error");
})
var div= document.createElement('div');
div.setAttribute("class","container newclass");

var row=document.createElement('div');
row.setAttribute("class","row");

function createPage(data){
    data.forEach(element => {
        createweb(element);
    });
}
function createweb(obj){
    let elemant = document.createElement('div');
    elemant.setAttribute('class','col-4 newclass');

    let cont = document.createElement('div');
    cont.setAttribute('class','ourcontainer');

    let country= document.createElement('div');
    country.setAttribute('class','elemant');
    country.innerHTML= obj.name;

    let flag= document.createElement('img');
    flag.setAttribute('src',obj.flag);
    flag.setAttribute('alt','countryflag');

    let capital =document.createElement('div');
    capital.setAttribute('class','elemant2');
    capital.innerHTML='capital : '+obj.capital;

    let region= document.createElement('div');
    region.setAttribute('class','elemant2');
    region.innerHTML= 'region : '+obj.region;

    let countryCode = document.createElement('div');
    countryCode.setAttribute('class','elemant2');
    countryCode.innerHTML = 'code : '+obj.alpha3Code;

    let latlng = document.createElement('div');
    latlng.setAttribute('class','elemant2');
    latlng.innerHTML='latlan : '+obj.latlng[0]+','+obj.latlng[1];

    let temp=document.createElement('div');
    temp.setAttribute('class','custombtn');
    
    let btn = document.createElement('button');
    btn.setAttribute('class','btn btn-primary custombtn');
    var countryCode1= obj.name;
    btn.setAttribute('value',''+countryCode1+'');
    btn.setAttribute('onclick','myFunction(value)');
    btn.innerHTML= 'click for weather';
    temp.append(btn);


    cont.append(country,flag,capital,region,countryCode,latlng,temp);
    elemant.append(cont);
    row.append(elemant);
    div.append(row);
    document.body.append(div);
}
function myFunction(data){
    let climate=fetch("https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=cc7670c9ef868e16633ab398d81a0e1f");

    climate.then((res)=>{
        return res.json();
    }).then((weather)=>{
        console.log(weather)
        alert('Latitude is: ' + weather.coord.lat);
        alert('Longitude is: ' + weather.coord.lon);
        alert('Temperature is: ' + weather.main.temp);
    }).catch((err) => {
        console.log(err);
    })
}