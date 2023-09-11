import React from 'react'

function Logout() {
    if(localStorage.getItem('token') && localStorage.getItem('token')!=null){
          
        window.location.replace('/login')
    }
    return (
    <div></div>
  )
}

export default Logout