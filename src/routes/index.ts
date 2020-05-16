// Importa a classe do express que trata as rotas da aplicação
import { Router } from 'express';
import productRouter from './product.routes';
import clientRouter from './client.routes';

const routes = Router();

// Define rota '/products' que será mapeada. Um determinado router(product router) vai tratar a rota
// Middleware: qualquer rota que entrar será avaliada, se for /products, vai chamar o p
routes.use('/products', productRouter);
// routes.use('/products/id', productRouter);
routes.use('/clients', clientRouter);

export default routes;
