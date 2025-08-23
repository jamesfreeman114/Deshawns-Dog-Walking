
export const findCity = (walker, allCities) => {
    let walkerCity = null
    
    for (const city of allCities) {
        if (city.id === walker.cityId) {
            walkerCity = city
        }
    }
    return walkerCity    
}


