import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';
import Product from '../models/Product';
// Roteador de produto. Chama o objeto do express.
const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { buyPrice, code, description, lovers, sellPrice, tags } = request.body;

  const p = new Product({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  });

  response.json(productRepository.update(p, id));
});

productRouter.delete('/:code', (request, response) => {
  try {
    const code = parseInt(request.params.code, 10);
    return response.json(productRepository.deleteByCode(code));
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
