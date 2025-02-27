import { env } from './config'; // Importa as variáveis de ambiente
import app from './app'; // Importa a configuração do Express.js

// Define a porta do servidor (usando a variável de ambiente ou 3000 como padrão)
const PORT = env.PORT || 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});