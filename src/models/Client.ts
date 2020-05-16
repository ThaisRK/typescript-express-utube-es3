// Isolamento: geração do uuid não mais na rota, mas na classe.
import { uuid } from 'uuidv4';

export default class Client {
  id: string;

  name: string;

  cpf: number;

  lastPurchase: Date;

  countpurchase: number;

  // lovedProducts: Array<Product>;

  // 'new NomeDaClasse' chama o construtor da classe
  // em formato de objeto, não importa a ordem dos parâmetros pois eles são atribuidos pelo nome
  constructor({ name, cpf, lastPurchase, countpurchase }: Omit<Client, 'id'>) {
    this.name = name;
    this.cpf = cpf;
    this.lastPurchase = lastPurchase;
    this.countpurchase = countpurchase;
    // this.lovedProducts = lovedProducts;
    this.id = uuid();
  }
}
