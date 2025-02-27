// Formatação de data para o padrão brasileiro (DD/MM/YYYY)
export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  // Cálculo de diferença entre datas (em dias)
  export const dateDiffInDays = (startDate: Date, endDate: Date): number => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  };