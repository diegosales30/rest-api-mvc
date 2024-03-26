import PessoaRepository from "../repositories/PessoaRepository.js";


class PessoaController {

  //get all *
  async index(req, res) {
    const row = await PessoaRepository.findAll();
    res.json(row);
  }
  //get one people by Id
  async show(req, res) {
    const getId = req.params.id
    const row = await PessoaRepository.findById(getId);
    res.json(row);
  }
  //create new people
  async store(req, res) {
    const pessoa = req.body;
      const row = await PessoaRepository.create(pessoa);
      res.json(row);
  }
  //update an existing people
  async update(req, res) {
    const pessoa = req.body;
      const id = req.params.id;
      const row = await PessoaRepository.update(pessoa, id);
      res.json(row);   
  }
  //delete an existing people by Id
  async delete(req, res) {
    const getId = req.params.id;
      const row = await PessoaRepository.delete(getId);
      res.json(row);
  }

}

//padrão singleton
export default new PessoaController();