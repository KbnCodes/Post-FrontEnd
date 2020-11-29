import axios from '.././config/axios'
import Swal from 'sweetalert2'
export const setPost = (post)=>{
    return {type : 'SET_POST' ,payload : post}
}

export const  startGetpost =()=>{
    
    return (dispatch)=>{
        axios.get('/posts/show')
        .then((response)=>{
            const post = response.data
            dispatch(setPost(post))
        })
        .catch((err)=>{
            Swal.fire(err)
        })
    }
}
export const addpost =(post)=>{
    return {type : 'ADD_POST',payload : post}
}
export const startAddpost =(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/posts/add', formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    Swal.fire(response.data.message)
                }else{
                    Swal.fire('post created')
                    redirect()
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }

}