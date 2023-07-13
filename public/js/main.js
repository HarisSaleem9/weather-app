const submitbtn  = document.getElementById("submitBtn")
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp_val')
const temp_status = document.getElementById('temp_status')
const data_hide = document.querySelector('.middle_layer')

const getInfo  = async (event) =>{

    event.preventDefault()
    let cityval = cityName.value
    
    if(cityval===""){
        city_name.innerText = 'PLZ write the name before search' 
        data_hide.classList.add('data_hide')
    }
    else{
        try
        {
        let url  = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=ef0bc8bb5f652743dc700e9ab90cd049`
        const response =await fetch(url)
        let data = await response.json()
        let arrdata = [data]
        console.log(arrdata[0].main.temp)
        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
        temp.innerText= arrdata[0].main.temp
        const temp_mode = arrdata[0].weather[0].temp
        if(temp_mode === 'Clouds'){
            temp_status.innerHTML= `<i class="fa-solid fa-cloud"></i>`
        }else if(temp_mode === 'Clear'){
            temp_status.innerHTML= `<i class="fa-solid fa-sun" style="color: #ce7612;"></i>`
        } 
        else if(temp_mode === 'Rain'){
        temp_status.innerHTML= `<i class="fa-sharp fa-solid fa-raindrops"></i>`}
        else {
        temp_status.innerHTML= `<i class="fa-solid fa-sun" style="color: #ce7612;"></i>`} 

        data_hide.classList.remove('data_hide') 
    }
    catch{
        city_name.innerText = 'PLZ enter the city name properly'
        data_hide.classList.add('data_hide') 
    }

    }
}

submitbtn.addEventListener("click",getInfo)