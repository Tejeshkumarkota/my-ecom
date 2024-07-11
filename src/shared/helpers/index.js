import * as services from './services'
import * as commonHelpers from './commonHelpers'

const getFullUrl=(url)=>{
    return `http://localhost:5175/${url}`
}

export{
    getFullUrl,
    services,
    commonHelpers
}







