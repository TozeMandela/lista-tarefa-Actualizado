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

        ajax.onload = evt =>{
            try {
                dados = JSON.parse(ajax.responseText)
            } catch (error) {
                console.error(e);
                reject(e)
            }
            resolve(dados);
            
        }
            console.log('objecto1: ', obj)
            ajax.setRequestHeader('Content-type', 'application/json')
            ajax.send(obj);
            
            
        })
    }
}