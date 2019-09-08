import React from 'react'
let globalContext = React.createContext(
    {
        enterButtonContext: () => {},
        deleteButtonContext: () => {},
        replyButtonContext: () => {}
    }
)
export default globalContext