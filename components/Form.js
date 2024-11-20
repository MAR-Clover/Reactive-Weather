import { useState } from "react"
const cities = require("../data")

function Form ({location,setLocation}) {
    const [typedLocation, setTypedLocation] = useState("")
    const [error, setError] = useState("");


    function handleSubmit (e) {
        e.preventDefault();

        try{
            //throws error if user typed location is not present in city data array
            //can also add a way to check uppercase and lowercase letters to account for 'paris' search to retrieve 'Paris' from city data array
            const match = cities.find((city) => city.city === typedLocation);

            if (!match) {
              setError("No match found for this city");
              return;
            }
            //if no error sets location
            setLocation(typedLocation);
            setTypedLocation("");
            setError(""); 
        }catch (error) {
            setError("An error occurred ");
        }

    }   
    return(
        
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <label className = "city">City:
                    <input value={typedLocation} 
                    onChange={(e)=>setTypedLocation(e.target.value)}
                    type="text"/>
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








// Destructure the location and setLocation props.
// Return a <form> element that has an <input> element that will accept a city input and <button> element. Feel free to create your own or you can use the template code below:

// <div className = "form">
//     <form>
//         <label className = "city">City:
//             <input type="text"/>
//         </label>
//         <button 
//             className = "btn btn-primary" 
//             type="submit"
//         >Submit</button>
//     </form>
// </div>
// Assign the <input> a value of location and create an onChange event handler that sets the location to the current value of the <input> using e.target.value.