class HttpRequest{

    static get(url, obj={}){
        return HttpRequest.Httprequest('GET', url);
    }

    static post(url, obj={}){
        console.log('kkkkkk: ',obj)
        return HttpRequest.Httprequest('post', url, obj);
    }

    static Httprequest( method,url, obj = {}){
        
       return new Promise ((resolve, reject)=>{
        
        let ajax = new XMLHttpRequest();

        let dados = {}

        ajax.open(method.toUpperCase(), url);
    
        ajax.setRequestHeader('Content-Type', 'application/json');

        ajax.send(JSON.stringify(obj));

        ajax.onload = evt =>{
                try {
                    dados = JSON.parse(ajax.responseText)
                } catch (error) {
                    reject(error)
                }
                resolve(dados);
                
            }          
        })
    }
}