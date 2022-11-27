const db = require('../db');

module.exports = {  
buscarTodos: () =>{ 
return new Promise((aceito, rejeitado)=>{ 
    
    db.query('SELECT * FROM cadastro',(error, results)=>{
        if(error) {rejeitado(error); return; }
        aceito(results);
});
});
},

buscarUm: (nome) => {
    return new Promise((aceito,rejeitado)=>{

        db.query('SELECT * FROM cadastro WHERE nome = ?', [nome], (erro, results)=>{
            if(error) { rejeitado(error); return; }
            if(results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        });
    });
},
Inserir: (cargo, contrato) => {
    return new Promise((aceito,rejeitado)=>{

        db.query('INSERT INTO cadastro (cargo, contrato) VALUES (?, ?)',
         [cargo, contrato], 
         (error, results)=>{
            if(error) { rejeitado(error); return; }
             aceito(results.insertNome);
                        }
        );
        });
    },
    
    
    alterar:(nome, cargo, contrato)=>{
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE cadastro SET cargo = ?, contrato = ? WHERE nome = ?',
            [cargo, contrato, nome],
             (error, results)=>{
               if(error) { rejeitado(error); return; }
               aceito(results);
             }
            );
        });
    },
    buscarTodos: () =>{ 
        return new Promise((aceito, rejeitado)=>{ 
            
            db.query('SELECT * FROM cadastro',(error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
               });
            });
        },
        excluir: (nome) =>{ 
            return new Promise((aceito, rejeitado)=>{ 
                
                db.query('DELETE FROM cadastro WHERE nome = ?', [nome], (error, results)=>{
                    if(error) {rejeitado(error); return; }
                    aceito(results);
                 });
            });
         }
        }; 
             
          