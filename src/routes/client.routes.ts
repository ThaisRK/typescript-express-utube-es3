import { Router } from 'express';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/CreateClientService';
// Roteador de produto. Chama o objeto do express.
const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (request, response) => {
  response.json(clientRepository.findAll());
});

clientRouter.post('/', (request, response) => {
  try {
    const service = new CreateClientService(clientRepository);
    const { name, cpf, lastPurchase, countpurchase, id } = request.body;
    const cliente = service.execute({
      name,
      cpf,
      lastPurchase,
      countpurchase,
      id,
    });
    response.status(201).json(cliente);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default clientRouter;
