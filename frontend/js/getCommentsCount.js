export function getCommentsCount() {
    return fetch('https://fb-comments.vercel.app/api/comments/count')
    .then(response => response.json())
    .then(data => data.count)
    .catch(error => {
      console.error('Ошибка при получении количества комментариев:', error);
      throw error;
    });
  }