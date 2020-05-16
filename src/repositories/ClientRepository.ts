import Client from '../models/Client';

export default class ClientRepository {
  private clients: Array<Client>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Client> {
    return this.clients;
  }

  public findByCpf(cpf: number): Client | undefined {
    return this.clients.find(v => v.cpf === cpf);
  }

  public save({ name, cpf, lastPurchase, countpurchase }: Client): Client {
    const client = new Client({
      name,
      cpf,
      lastPurchase,
      countpurchase,
    });
    this.clients.push(client);
    return client;
  }
}
