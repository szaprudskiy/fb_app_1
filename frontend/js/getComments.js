 import checkCommentReplied from './checkComment.js'  
 import getPendingCommentCount from './getPendingCommentCount.js'

 export default async function getPostComments(pageId, pagePost, accessToken) {
  const apiUrl = `https://graph.facebook.com/v17.0/${pageId}_${pagePost}/comments?access_token=${accessToken}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';

    if (data.data && data.data.length > 0) {
      let pendingCount = await getPendingCommentCount();

      console.log(data.data)

      for (const comment of data.data) {
        const commentText = comment.message;
        const commentAuthor = comment.from?.name;

        console.log(commentAuthor)

        const commentElement = document.createElement('div');
        commentElement.classList.add("my-class");

        if (commentAuthor) {
          commentElement.textContent = `${commentAuthor}: ${commentText}`;
        } else {
          commentElement.textContent = `Анонимный пользователь: ${commentText}`;
        }

        const replyButton = document.createElement('button');
        replyButton.style.display = 'block'
        replyButton.classList.add("btn");
        replyButton.classList.add("btn-info");
        replyButton.textContent = 'Ответить';
        replyButton.addEventListener('click', () => {
          
          checkCommentReplied(comment.id, accessToken);
        });

        commentElement.appendChild(replyButton);
        commentsContainer.appendChild(commentElement);

           pendingCount++; // Увеличиваем счетчик неотвеченных комментариев
        
      }

      return [data.data.length, pendingCount];
    } else {
      return [0, 0];
    }
  } catch (error) {
    throw error;
  }
}
  
 
  