export default function decreasePendingCommentCount() {
  const pendingCountElement = document.querySelector('.pendingCountInner');
  const currentCount = parseInt(pendingCountElement.textContent, 10);
  const newCount = currentCount - 1;
  pendingCountElement.textContent = `${newCount}`;
  }