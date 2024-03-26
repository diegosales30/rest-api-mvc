import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1991',
    database: 'dbpessoas'
});

connection.connect();

/* exemplo de função abstraida reutilizavel  */
//JSDOC
/**
 * 
 * @param {string} sql 
 * @param {string=id | selecao | [selecao, id]} valores 
 * @param {string} msgReject 
 * @returns 
 */
/*
export const consulta = (sql, valores='', msgReject) => {
    return new Promise((resolve, reject) => {
      conexao.query(sql, valores, (erro, result) => {
        if(erro) return reject(msgReject);
  
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
*/

export default connection;