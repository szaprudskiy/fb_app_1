export default async function generateCommentReplyAPI(message) {
    try {
      const apiUrl = 'https://fb-comments.vercel.app/api/chat'; // Замените на URL вашей серверной функции
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Ошибка при запросе к серверу:', error);
      throw error;
    }
  }


