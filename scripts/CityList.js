import { getWalkers, getCities} from "./database.js"
import { findCityWalkers } from "./findWalkers.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener (
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target 
        
        if (cityTarget.dataset.type === "city")  {

            window.alert(`${cityTarget.dataset.walkers} is the walker for this city.`)
            }

    }   
  
)


export const CityList = () => {
    let citiesHTML = "<ul>"

   

    for (const city of cities) {
        const cityWalkers = findCityWalkers(city, walkers) 
        const walkerName = cityWalkers.map(walker => walker.name)

        citiesHTML += `<li data-type="city"
                        data-walkers="${walkerName}">
                        ${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

