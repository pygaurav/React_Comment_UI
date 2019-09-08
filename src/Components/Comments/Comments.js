import React from 'react'
import CommentsTextBox from '../CommentsTextBox/CommentsTextBox'
import CommentActions from '../CommentActions/CommentActions'

function Comments(props) {
    let p = null;
    if(props.commentsVal.reply!==undefined){
        if(props.commentsVal.reply.length!==0){
            p = props.commentsVal.reply.map((e,i) => (
                <Comments commentsVal={e} key={e.cId}></Comments>
            ))
        }
    }

    return (
        <div>
        <li className="CommentFoo">{props.commentsVal.cText}
        <CommentActions commentId={props.commentsVal.cId}></CommentActions>
        <CommentsTextBox commentId={props.commentsVal.cId} isWhat="R"></CommentsTextBox>
        {p}
        </li>
        </div>
    )
}
export default Comments
