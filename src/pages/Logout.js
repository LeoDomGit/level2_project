import React from 'react'

function Logout() {
    if(localStorage.getItem('token') && localStorage.getItem('token')!=null){
        localStorage.removeItem('token');
        window.location.replace('/')
    }
    return (
    <div></div>
  )
}

export default Logout