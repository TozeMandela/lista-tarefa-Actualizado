class TarefasControl{
    constructor(formType, btnId, classResp){
        this.$inputs = document.querySelectorAll(formType);
        this.$resp = document.querySelector(classResp);
        this.$btn = document.getElementById(btnId);
        this.onEvent();
        this.showResp();
        this.excluir()
        
    }

    onEvent(){
        this.$btn.addEventListener('click',(e) => {
           let resp = this.addData();
           if(!resp){ return }else{ 
            let item = new Tarefas();
            item.saveStorage(resp);
            this.showResp();
            this.excluir()
        }

       });
    }

    addData(){
        let value = {};
            this.$inputs.forEach(element => {
                value[element.name] = element.value;
            });
            if(!value.name){
                this.$inputs[0].setAttribute('class', 'error');
            }else{
                this.$inputs[0].removeAttribute('class', 'error');
                this.$inputs.forEach(element => {
                    element.value = '';
                });
                return new Tarefas(value.name, value.date,value.descricao); 
            }
    }

    showResp(){

        HttpRequest.get('/users').then(( itens)=>{
            this.$resp.innerHTML=''
            itens.tarefa.forEach(data => {
                let p = document.createElement('p');
                p.innerHTML = `Nome da tarefa: ${data._name} |Data a ser realizada: ${data._date} | 
                Descrição: ${data._descrition} | <button class="excluir">excluir</button>`;
                this.$resp.appendChild(p);
            });
        });
       
            
        
    }
    excluir(){
        
        this.$resp.querySelectorAll('.excluir').forEach((btn, index) => {
        btn.addEventListener('click', () => {

            let itens = new Tarefas();
            let itens1 = itens.isItemtoStorage()
                if((index+1)===itens1[index]._id){
                    itens1.splice(index,1);
                }
                localStorage.setItem('intens','[]');
                itens1.forEach(element => {
                        itens.saveStorage(element)
                });
                this.showResp();
                this.excluir()
            })

        });
    }
}



    






