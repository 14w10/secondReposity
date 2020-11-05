// const restaurants = [{
//     id: 1, 
//     title: 'Blue Frog',
//     specialty: 'Western BBQ',
//     isExpensive: true,
//     averagePricePerPerson: 90,
//     currency: 'RMB'
// },{
//     id: 2,
//     title: 'Round Table Pizza',
//     specialty: 'pizza',
//     isExpensive: false,
//     averagePricePerPerson: 40,
//     currency: 'RMB'
// },{
//     id: 3,
//     title: 'Red Lobster',
//     specialty: 'seafood',
//     isExpensive: true,
//     averagePricePerPerson: 110,
//     currency: 'RMB'
// },{
//     id: 4,
//     title: 'Chili\'s Grill & Bar',
//     specialty: 'Tex-Mex',
//     isExpensive: false,
//     averagePricePerPerson: 30,
//     currency: 'RMB'
// },{
//     id: 5,
//     title: 'The Habit Burger Grill (Drive-Thru)',
//     specialty: 'Hamburger',
//     isExpensive: true,
//     averagePricePerPerson: 80,
//     currency: 'RMB'
// },{
//     id: 6, 
//     title: 'Denny\'s',
//     specialty: 'diner',
//     isExpensive: false,
//     averagePricePerPerson: 50,
//     currency: 'RMB'
// }]

// const findAverPricOver45 = restaurants.filter(function(item){
//     return (item.averagePricePerPerson >= 45)
// })

// const findNotExpensive = restaurants.filter(function(item){
//     return (!item.isExpensive)
// })

// const getAverPricHigh = function(baseAverPric){
//     const result = restaurants.filter(function(item){
//         return (item.averagePricePerPerson > baseAverPric)
//     })
//     return result
// }

// const getId = function(baseId){
//     const result = restaurants.find(function(item){
//         return (item.id === baseId)
//     })
//     return result
// }

const cityDB = require('all-the-cities')

const getPopulation = function(basePopul){
    const result = cityDB.filter(function(item){
        return (item.population > basePopul)
    })
    return result
}

const getPopulcoun = function(basePopul, baseCoun){
    const result = cityDB.filter(function(item){
        return (item.population > basePopul && item.country === baseCoun)
    })
    return result
}

const getInfoOfCityOfCoun = function(baseCityName, baseCoun){
    const result = cityDB.find(function(item){
        return (item.name === baseCityName && item.country === baseCoun)
    })
    return result
}

const getInfoOfCity = function(baseCityName){
    const result = cityDB.filter(function(item){
        return (item.name === baseCityName)
    })
    return result
}

const getPopulBetw = function(basePopulLower, basePopulUpper){
    const result = cityDB.filter(function(item){
        return (item.population > basePopulLower && item.population < basePopulUpper)
    })
    return result
}

// console.log(getPopulation(1000000))
// console.log(getPopulcoun(1000000,'CN'))
// console.log(getPopulcoun(1000000,'VE'))
// console.log(getInfoOfCity('Paris'))
console.log(getPopulBetw(1000000,3000000))