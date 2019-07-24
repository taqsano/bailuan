export function PostDataService (type,userData){
    let BaseURL = "http://api.thewallscript.com/resful";
    return new Promise((resovle,reject)=>{
        fetch(BaseURL+type,{
            method:'POST',
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resovle(responseJson);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}
