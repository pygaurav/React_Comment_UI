import React,{ useContext } from 'react'
import GlobalContext from '../../Context/global_context'

function CommentActions(props) {
    const context = useContext(GlobalContext);
    return (
        <div>
        <button onClick={(event) => context.replyButtonContext(event,props.commentId)} className="btncls ReplyBox">Reply</button>
        <button onClick={(event) => context.deleteButtonContext(event,props.commentId)} className="btncls DeleteBox">Delete</button>
        </div>
    )
}

export default CommentActions
