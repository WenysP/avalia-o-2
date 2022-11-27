const FuncService = require('../services/FuncService');

module.exports = {
    buscarTodos: async (req,res)=>{
        let json = {error:'',result:[]};

        let cadastro = await FuncService.buscarTodos();

        for(let i in cadastro){
            json.result.push({
                nome:cadastro[i].nome,
                cargo:cadastro[i].cargo

            });
        }
res.json(json);
        },
        buscarUm: async(req, res) =>{
            let json = {error:'', result:{}};

            let nome = req.params.nome;
            let cadastro = await FuncService.buscarUm(nome);

            if(cadastro){
                json.result = cadastro;
    }

    res.json(json);
},

Inserir: async(req, res) =>{
    let json = {error:'', result:{}};

    let cargo = req.body.cargo;
    let contrato = req.body.contrato;

    If (cargo && contrato){
    let CadastroNome = await FuncService.inserir(cargo, contrato);
    json.result = {
        nome: CadastroNome,
        cargo,
        contrato
};
}else{
    json.error = 'Campos não enviados';
}

res.json(json);
},

alterar: async(req, res) =>{
    let json = {error:'', result:{}};

    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let contrato = req.body.contrato;

    If (nome && cargo && contrato){
     await FuncService.alterar(nome, cargo, contrato);
    json.result = {
        nome,
        cargo,
        contrato
};
}else{
    json.error = 'Campos não enviados';
}
res.json(json);
},
excluir:async(req, res) => {
    let json = {error:'', result:{}};

    await FuncService.excluir(req.params.nome);

    res.json(json);

}

}


