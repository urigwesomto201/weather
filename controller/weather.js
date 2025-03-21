const axios = require("axios");
const weatherModel = require('../model/weather')
const API_KEY= process.env.API_KEY  

exports.weather = async (req,res)=>{
try {
      const {city }= req.query
        if(!city){
            return res.status(404).json({message:'please input the require field'})
        };
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        // const { data } = response
        const {name,main,weather,wind} = response.data;

        res.status(201).json({
            message: "weather gotten  successfully",
            data:{
                city:name,
                temperature:main.temp,
                condition:weather[0].description,
                wind_speed:wind.speed
            }
        })
    
} catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "internal server error" });
}
}