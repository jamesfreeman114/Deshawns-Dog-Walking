export const findCityWalkers = (city, allWalkers) => {
    let cityWalkers = []

    for (const walker of allWalkers) {
        if (city.id === walker.cityId) {
            cityWalkers.push(walker)
        }
    }
    return cityWalkers
}  