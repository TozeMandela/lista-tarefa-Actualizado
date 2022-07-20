class Tarefas{
    constructor(name, data, descricao ){

        this._name = name;
        this._date = data;
        this._descrition = descricao;
        this._id;
    }

    get name(){
        return this._name;
    }
    set name (n){
        this._name = n;
    }
    get date(){
        return this._date;
    }
    set date (d){
        this._date = d;
    }
    get descrition(){
        return this._descrition;
    }
    set descrition (des){
        this._descrition = des;
    }
    get id(){
        return this._id;
    }

    isItemtoStorage(){
        console.log('entrei2')
        let itens = [];
           /*  if(localStorage.getItem('intens')){
             itens = JSON.parse(localStorage.getItem('intens'));  
            } */
            return itens;
    }

    addId(json){

        let itens = this.isItemtoStorage();
        json._id = itens.length + 1;
    }
    saveStorage(json){

        let itens = this.isItemtoStorage();
        //this.addId(json)
        itens.push(json);
        //itens = JSON.stringify(itens);
        
        HttpRequest.post('/users', itens[0]);
        console.log('çççç: ',itens[0]);
        
       // localStorage.setItem('intens', );

    }
    
}