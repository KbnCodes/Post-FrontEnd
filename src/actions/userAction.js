import axios from '../config/axios'
import Swal from 'sweetalert2'
export const setUser = (user) =>{
    return { type : 'SET_USER' ,payload: user}
}

export const startGetUser =()=>{
    return(dispatch)=>{
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err)=>{
            Swal.fire(err)
        })
    }
}

export const startShowUser =()=>{
    return(dispatch)=>{
        axios.get('/users/show')
        .then((response)=>{
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err)=>{
            Swal.fire(err)
        })
    }
}
export const startLoginUser =(formData,redirect) => {
    return (dispatch)=>{
        axios.post('/users/login', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('error')){
                    Swal.fire(response.data.error)
                
                }else{
                    Swal.fire("succefully logged in")
                    localStorage.setItem('authToken', response.data.token)

                    //promise.all
                    axios.get('/users/account', {
                        headers:{
                            'x-auth' : localStorage.getItem('authToken')
                        }
                    })
                    .then((response)=>{
                        const user =response.data
                        dispatch(setUser(user))
                        redirect()
                    })
                    .catch((err)=>{
                        Swal.fire(err)
                    })
                    redirect()
                }
            })
    }
}
export const startRegisterUser =(formData, redirect) =>{
    return(dispatch) => {
        axios.post('/users/register', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    Swal.fire(response.data.message)
                }else{
                    Swal.fire('you have registered succesfully')
                    redirect()
                    //props.history.push('/users/login')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startUserLogout =()=>{
    return(dispatch)=>{
        axios.delete('/users/logout', {
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                Swal.fire(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = "/"
            }
        })
    }
}