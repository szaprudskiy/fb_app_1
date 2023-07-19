import getPostComments  from './getComments.js'
import updateCommentAndPendingCount from './updateCommentAndPendingCount.js'


  const fetchBtn = document.getElementById('fetchBtn');
  fetchBtn.addEventListener('click', async() => {
    const pageId = document.getElementById('pageIdInput').value;
    const pagePost = document.getElementById('pagePostInput').value;
    const accessToken = document.getElementById('accessTokenInput').value;
    const spinnerContainer = document.getElementById('spinnerContainer');
    spinnerContainer.style.display = 'block';

    try {
      const [commentCount, pendingCount] = await getPostComments(pageId, pagePost, accessToken);
      spinnerContainer.style.display = 'none';

      updateCommentAndPendingCount(commentCount, pendingCount);
    } catch (error) {
      console.error('Ошибка при получении комментариев:', error);
    }
  });

  



