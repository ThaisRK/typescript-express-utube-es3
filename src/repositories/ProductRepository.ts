import { request } from 'express';
import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }

  public update(productStream: Product, id: string): Product | undefined {
    const product = this.products.find(v => v.id === id);

    if (product === undefined) {
      throw Error('Produto não encontrado');
    } else {
      product.code = productStream.code;
      product.description = productStream.description;
      product.buyPrice = productStream.buyPrice;
      product.sellPrice = productStream.sellPrice;
      product.tags = productStream.tags;
      // response.status(200).json(product);
    }
    // this.products.push(product);
    return product;
  }

  public deleteByCode(code: number) {
    const index = this.products.findIndex(v => v.code === code);

    if (index === -1) {
      throw Error('Erro!');
    }
    this.products.splice(index, 1);
    return this.products;
  }
}
