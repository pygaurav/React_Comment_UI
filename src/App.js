import React, { Component } from 'react'
import axios from 'axios'
import Comments from './Components/Comments/Comments'
import CommentsTextBox from './Components/CommentsTextBox/CommentsTextBox'
import GlobalContext from './Context/global_context'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments : [
      ]
    }
  }
  _processDelete(payload){
    
    
    axios.delete("https://comments-system-rest-api.herokuapp.com/comment",{data:payload}).then(response=>{
      this.componentDidMount();
    }).catch(err=>{
      console.log(err);
    })
  }
  _postComment(payload){
    axios.post("https://comments-system-rest-api.herokuapp.com/comment",payload).then(response=>{
      this.componentDidMount();
    }).catch(err=>{
      console.log(err);
    })
  }
  _processData2(mdata){
    let newmdata = [...mdata];
    newmdata.map(e=> {return e.reply=[]})
    for(let i of newmdata){
      for(let j of newmdata){
        if(i.cId===j.cAssoc){
          i.reply.push(j)
        }
      }
    }
    let newfilteredArr = newmdata.filter((e)=>e.cAssoc===0);
    return newfilteredArr;
  }
  
  componentDidMount(){
    axios.get("https://comments-system-rest-api.herokuapp.com/comment").then(response=>{
      let data = this._processData2(response.data)
      // console.log(data);
      this.setState({comments:data})
    }).catch(err=>{
      console.log(err);
    })
  }

  enterButtonHandler(event,keys){
    let a = event.target.value;
    if (event.key === 'Enter') {
      let obj = {
        "cText":a,
        "rId":1,
        "cAssoc":keys,
        "cPosted":"Gaurav"
        };
      event.target.value = "";
      event.preventDefault();
      this._postComment(obj);
    }
  }
  deleteButtonHandler(event,key){
    const keyPayload = {
      "cId":key
    }
    this._processDelete(keyPayload);
  }
  replyButtonHandler(event,keys){

  }
  
  render() {
    let rel = this.state.comments.map((e,i)=>(<Comments commentsVal={e} key={e.cId}></Comments>));
    let keyvar = 0;
    return (
      <div>
        <ul>
        <GlobalContext.Provider value={
            {
            enterButtonContext:this.enterButtonHandler.bind(this),
            deleteButtonContext:this.deleteButtonHandler.bind(this),
            replyButtonContext:this.replyButtonHandler.bind(this)
            }
          }>
          <CommentsTextBox isWhat="C" commentId={keyvar}></CommentsTextBox>
          {rel}
          </GlobalContext.Provider>
        </ul>
      </div>
    )
  }
}

export default App
