// Write your code here
import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    deleteComment,
    initialContainerBackgroundClassNames,
    toggleIsLiked,
  } = props
  const {id, name, comment, isLiked} = commentDetails
  const firstLetterOfName = name[0]
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const randomBgColor = Math.floor(
    Math.random() * initialContainerBackgroundClassNames.length,
  )
  const onDeleteCommentItem = () => {
    deleteComment(id)
  }

  const onClickLikeButton = () => {
    toggleIsLiked(id)
  }

  return (
    <>
      <li className="comment-item">
        <div className="name-container">
          <p
            className={`first-letter ${initialContainerBackgroundClassNames[randomBgColor]}`}
          >
            {firstLetterOfName}
          </p>
          <p className="name">{name}</p>
        </div>
        <p className="comment-line">{comment}</p>
        <div className="reactions-container">
          <div className="like-container">
            <button
              className="like-button"
              type="button"
              onClick={onClickLikeButton}
            >
              <img className="like-image" src={likeImageUrl} alt="like" />
            </button>
            {isLiked && <p className="like">Like</p>}
            {!isLiked && <p className="liked">Like</p>}
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteCommentItem}
          >
            <img
              className="delete-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default CommentItem
