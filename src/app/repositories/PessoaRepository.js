import connection from "../database/connection.js";

class PessoaRepository {

  create(pessoa) {
    const sql = "INSERT INTO pessoas SET ?;"
    return new Promise((resolve, reject) => {
      connection.query(sql, pessoa, (erro, result) => {
        if(erro) return reject('Não foi possivel cadastrar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    }) 
  }

  findAll() {
    const sql = `SELECT * FROM pessoas;`
    return new Promise((resolve, reject) => {
      connection.query(sql, (erro, result) => {
        if(erro) return reject('Não foi possivel encontrar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
  findById(id) {
    const sql = `SELECT * FROM pessoas WHERE id=?;`
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (erro, result) => {
        if(erro) return reject('Não localizado!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
  update(pessoa, id) {
    const sql = "UPDATE pessoas SET ? WHERE id=?;"
    return new Promise((resolve, reject) => {
      connection.query(sql, [pessoa, id], (erro, result) => {
        if(erro) return reject('Não foi possivel atualizar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
  delete(id) {
    const sql = `DELETE FROM pessoas WHERE id=?;`
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (erro, result) => {
        if(erro) return reject('Não foi possivel deletar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }

}

/* exemplo de metodo com abstração de responsabilidade */
//basta substituir todo codigo acima por apenas essas linhas
//e deixar toda responsabilidade no arquivo connection.js
/*
update(selecao, id) {
  const sql = "UPDATE selecoes SET ? WHERE id=?;"
  //toda responsabilidade foi passada para o connection --> go to the line 14 de connection
  //aqui retornamos a função consulta passando parametros obrigatorio ou não
  return consulta(sql, [selecao, id], 'Não foi possivel atualizar!')
}*/


export default new PessoaRepository()