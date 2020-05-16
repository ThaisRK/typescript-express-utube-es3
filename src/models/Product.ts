// Isolamento: geração do uuid não mais na rota, mas na classe.
import { uuid } from 'uuidv4';

export default class Product {
  id: string;

  code: number;

  description: string;

  buyPrice: number;

  sellPrice: number;

  tags: Array<Product>;

  lovers: number;

  // 'new NomeDaClasse' chama o construtor da classe
  // em formato de objeto, não importa a ordem dos parâmetros pois eles são atribuidos pelo nome
  constructor({
    buyPrice,
    code,
    lovers,
    description,
    sellPrice,
    tags,
  }: Omit<Product, 'id'>) {
    this.buyPrice = buyPrice;
    this.code = code;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.tags = tags;
    this.lovers = lovers;
    this.description = description;
    this.id = uuid();
  }
}
