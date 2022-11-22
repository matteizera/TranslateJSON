function TranslateJson(jsonObject){
    let result = {}
    Object.keys(jsonObject).forEach(key=>{
        
            if(Array.isArray( jsonObject[key]))
            {
            let response = jsonObject[key].map(oneObject=>{
                return TranslateJson(oneObject)                
                })
                return   Object.assign(result, {[dicionario[key]]: response })
            } 
            else if( jsonObject[key] instanceof Object){
                let response =  TranslateJson(jsonObject[key])                
                return   Object.assign(result, {[dicionario[key]]: response })     
  
            } 
            else{
                return Object.assign(result, {[dicionario[key]]: jsonObject[key] })
                }
        })
        return result
  }

function GetKeys(obj){
Object.keys(obj).forEach(key=>{
    let keys = []
    if(Array.isArray( jsonObject[key]))
    {
        let response = jsonObject[key].map(oneObject=>{
        return GetKeys(oneObject)                
        })
        return   keys.concat[response]
    } 
    else if( obj[key] instanceof Object){
       let response = GetKeys(obj[key])
       return   keys.concat[response]
    }else
        return keys.push[key]

})
}
  
module.exports = {TranslateJson,GetKeys}