import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

export default class CreateClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute({ name, cpf, lastPurchase, countpurchase }: Client): Client {
    const client = this.repository.findByCpf(cpf);
    if (client) {
      throw Error('Cliente já cadastrado');
    } else {
      const p = new Client({
        name,
        cpf,
        lastPurchase,
        countpurchase,
      });
      this.repository.save(p);
      return p;
    }
  }
}
