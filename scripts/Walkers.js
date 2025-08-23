import { getWalkers, getCities } from "./database.js"
import { findCity } from "./findCity.js"

const walkers = getWalkers()
const cities = getCities()


document.addEventListener (
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target 

            if ( whatWasClickedOn.dataset.type === "walker")
                window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
            }
        
)


export const Walkers = () => {
    
    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        const currentCity = findCity(walker, cities)
        walkerHTML += `<li data-id ="${walker.id}"
                           data-city ="${currentCity.name}"
                           data-type ="walker"
                            >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

