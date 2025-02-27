import express from 'express';
import cors from 'cors';
import { env, connectDB, logger } from './config'; // Importe as configurações
import routes from './routes';

const app = express();
const PORT = env.PORT;

app.use(cors());
app.use(express.json());

// Conecta ao banco de dados
connectDB();

// Use as rotas
app.use('/api', routes);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});