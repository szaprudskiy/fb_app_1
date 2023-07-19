export default function updateCommentAndPendingCount(commentCount, pendingCount) {
  const commentCountElement = document.getElementById('commentCount');
  commentCountElement.textContent = 'Количество комментариев:';
  const commentCountElementSpan = document.querySelector('.commentCountInner');
  commentCountElementSpan.textContent = `${commentCount}`;


  try {
    const pendingCountElement = document.getElementById('pendingCount');
    pendingCountElement.textContent = 'Количество неотвеченных комментариев:';
    const pendingCountElementSpan = document.querySelector('.pendingCountInner');
    pendingCountElementSpan.textContent = `${pendingCount}`;
  } catch (error) {
    console.error('Количество неотвеченных комментариев', error)
  }
  
  }
 
  
 