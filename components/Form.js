import { useState } from "react"
const cities = require("../data")

function Form ({setLocation, setCityName, setCountry, setRegion}) {
    const [typedLocation, setTypedLocation] = useState("")
    const [error, setError] = useState("");

    const apiKey = process.env.ACCU_API_KEY;

  async function handleSubmit (e) {
        e.preventDefault();


        try {
            
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${typedLocation}`);
        
            
            if (!response.ok) {
              throw new Error("API error");
            }
        
            
            const data = await response.json();
            const cityKey = data[0].Key
            const cityLocalName = data[0].LocalizedName
            const country = data[0].Country.ID
            const region = data[0].AdministrativeArea.ID

           
            console.log(data);
            console.log(`city key is: ${cityKey}`)

            setLocation(cityKey);
            setCityName(cityLocalName)
            setCountry(country)
            setRegion(region)
            setTypedLocation("");   
            setError("");           
          } catch (error) {
            console.log(error);
            setError("An error occurred while fetching the data");
          }




    }   
    return(
        
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <label className = "city">City:
                    <input value={typedLocation} 
                    onChange={(e)=>setTypedLocation(e.target.value)}
                    type="text"
                    placeholder="provide state or country for accuracy ex: Edison NJ "
                    style={{width:"500px", fontSize:"20px"}}
                    />
                </label>
                <button 
                    className = "btn btn-primary" 
                    type="submit"
                >Submit</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}
module.exports = Form

