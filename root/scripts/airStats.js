const homeContent = document.getElementById("home_content");
const AnalyzeButton = document.getElementById('analyzeButton');
 

function getWindSpeeds(lat, long){
   const params = 'windSpeed';

   fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
     headers: {
       'Authorization': '61c17f24-f374-11ed-a654-0242ac130002-61c17f9c-f374-11ed-a654-0242ac130002'
     }
   }).then((response) => response.json()).then((jsonData) => {
     console.log(jsonData);
     homeContent.innerHTML += `<p class = 'text'>${JSON.stringify(jsonData)}</p>`;
   });
};


navigator.geolocation.getCurrentPosition((data) =>{
   const {latitude, longitude} = data.coords;
   AnalyzeButton.onclick = () => getWindSpeeds(latitude, longitude);
});



