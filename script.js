const searchedCity = async () =>{
    const inputCity = document.getElementById('inputCity').value;
    const API_KEY = '145580eb12c2cba5be68aca9e8ccf4a8';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    displayTemp(data);
}

const savechanges = (Id, setValue) =>{
    document.getElementById(Id).innerText = setValue;
}

const displayTemp = async data =>{
    // console.log(data)
    savechanges('cityName',data.name);
    savechanges('temp',data.main.temp);
    savechanges('weatherCondition',data.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('icons').setAttribute('src',url);
}