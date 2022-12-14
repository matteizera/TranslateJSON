
const TranslateJson = (jsonObject,parsedKeyObject) =>{
    let result = {}
    Object.keys(jsonObject).forEach(key=>{
        
            if(Array.isArray( jsonObject[key]))
            {
            let response = jsonObject[key].map(oneObject=>{
                return TranslateJson(oneObject,parsedKeyObject)                
                })
                let objkey = parsedKeyObject[key]  || key
                return   Object.assign(result, {[objkey]: response })
            } 
            else if( jsonObject[key] instanceof Object){
                let response =  TranslateJson(jsonObject[key],parsedKeyObject)  
                let objkey =  parsedKeyObject[key] || key
                return   Object.assign(result, {[objkey]: response })     
  
            } 
            else{
                let objkey = parsedKeyObject[key]  || key
                return Object.assign(result, {[objkey]: jsonObject[key] })
                }
        })
        return result
  }
  
  module.exports = {TranslateJson}
