export default function sendCommentReply(commentId, accessToken, replyText) {
  if (replyText === null || replyText === '') {
    console.log('Пустой комментарий. Отправка отменена.');
    return;
  }

  const apiUrl = `https://graph.facebook.com/v17.0/${commentId}/comments`;

  const params = new URLSearchParams();
  params.append('access_token', accessToken);
  params.append('message', replyText);

  fetch(apiUrl, {
    method: 'POST',
    body: params,
  })
    .then(r => r.json())
    .then(data => {
      console.log('Ответ на комментарий успешно отправлен:', data);
      
    })
    .catch(error => {
      console.error('Ошибка при отправке ответа на комментарий:', error);
    });
  }