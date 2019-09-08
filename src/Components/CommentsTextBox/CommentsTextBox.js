
import React,{ useContext } from 'react'
import GlobalContext from '../../Context/global_context'

function CommentsTextBox(props) {
    const context = useContext(GlobalContext);
    let isWhat;
        if(props.isWhat ==="C"){
            isWhat = "Please enter Comments"
        }else{
            isWhat = "Please enter Reply"
        }
    return (
        <div>
             <textarea onKeyDown={(event) => context.enterButtonContext(event,props.commentId)} className="textArea" placeholder={isWhat}></textarea>
        </div>
    )
}

export default CommentsTextBox
