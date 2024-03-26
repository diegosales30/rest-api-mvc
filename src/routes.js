import { Router } from "express";
import PessoaControllers from "./app/controllers/PessoaControllers.js";

const router = Router();

/********************API USANDO PADRAO MVC COM MOCK *********************** 
//MOCK
const pessoas = [
  {id: 1, nome: 'João', sobrenome: 'Silva'},
  {id: 2, nome: 'Maria', sobrenome: 'Oliveira'},
  {id: 3, nome: 'Diego', sobrenome: 'Sales'}
]

function getIndexOf(id) {
  return pessoas.findIndex((pessoa) => pessoa.id ===  Number(id));
}

//get * people
router.get('/pessoas', (req, res) => {
  res.status(200).send(pessoas)
})

//get people with ID
router.get('/pessoas/:id', (req, res) => {
  const id = req.params.id;
  res.json(pessoas.find(pessoa => pessoa.id === Number(id)))
})

//Create new people on mock
router.post('/pessoas', (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.status(201).send('Pessoa adicionada com sucesso!')
})

//Update the Existing people on mock
router.put('/pessoas/:id', (req, res) => {
  const getId = req.params.id;
  const index = getIndexOf(getId)
  pessoas[index].nome = req.body.nome;
  pessoas[index].sobrenome = req.body.sobrenome;

  //res.json(pessoas) //pra ver o json no insomnia
  res.status(200).send('Pessoa atualizada com sucesso!')
})

router.delete('/pessoas/:id',(req, res) => {
  const getId = req.params.id;
  const index = getIndexOf(getId);

  pessoas.splice(index, 1);
  res.status(200).send('Deletado com sucesso!')
})
 */

/********************API USANDO PADRAO MVC COM MYSQL *********************** */
router.get('/pessoas', PessoaControllers.index);
router.get('/pessoas/:id', PessoaControllers.show);
router.post('/pessoas', PessoaControllers.store)
router.put('/pessoas/:id', PessoaControllers.update)
router.delete('/pessoas/:id', PessoaControllers.delete)


export default router;