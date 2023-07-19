import sendCommentReply from './sendComment.js' 
import decreasePendingCommentCount from './decreasePendingCommentCount.js'
import generateCommentReplyAPI from './generateCommentReplyAPI.js'

export default async function checkCommentReplied(commentId, accessToken) {
  const apiUrl = 'https://fb-comments.vercel.app/api/check-comment-replied'; 

  const replyText = prompt('Введите ваш текст для формирования ответа');
  if (replyText === null || replyText === '') {
    console.log('Отправка комментария отменена');
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ commentId, replyText }),
    });
    const data = await response.json();

    if (data.replied) {
      console.log('Комментарий уже существует');
      const toast = document.getElementById('toast');
      toast.style.display = 'block';
      const closeBtn = document.querySelector('.btn-close-white');
      closeBtn.addEventListener('click', () => {
        toast.style.display = 'none';
      })
    } else {
      console.log('На комментарий ещё не было ответа');
      const generatedReply = await generateCommentReplyAPI(replyText);
      sendCommentReply(commentId, accessToken, generatedReply);
      decreasePendingCommentCount();
      const toast = document.getElementById('toast2');
      toast.style.display = 'block';
      const closeBtn = document.querySelector('.btn-close-white2');
      closeBtn.addEventListener('click', () => {
        toast.style.display = 'none';
      })
    }
  } catch (error) {
    console.error('Ошибка при проверке комментария:', error);
    throw error;
  }
}