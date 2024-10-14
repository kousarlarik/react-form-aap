import React, { useEffect, useState } from 'react'
import '../../components/form/form.css'
const Form = () => {
  const [userDetails, setUserDetails] = useState({firstName: "",lastName: '',email: '',password: '',confirmPassword: ''})
  const [userError,setUserError] = useState({firstNameError: false,lastNameError: false,emailError: false,passwordError: false,confirmPasswordError: false})
  console.log(userDetails);
  let {firstName,lastName,email,password,confirmPassword} = userDetails
  let {firstNameError,lastNameError,emailError,passwordError,confirmPasswordError} = userError

  
  const formHandler = (e)=> {
    e.preventDefault()
    if(firstName === ""){
      setUserError({...userError,firstNameError:true})
    } else if(lastName === ""){
      setUserError({...userError,lastNameError:true})
    } else if(email === ""){
      setUserError({...userError,emailError:true})
    } else if(password === ""){
      setUserError({...userError,passwordError:true})
    }else if(confirmPassword === ""){
        setUserError({...userError,confirmPassordwError:true})
    }
}
useEffect(()=>{
    if(firstName !== ""){
      setUserError({...userError,firstNameError:false})
    }
    if(lastName !== ""){
      setUserError({...userError,lastNameError:false})
    }
    if(email !== ""){
      setUserError({...userError,emailError:false})
    }
    if(password !== ""){
      setUserError({...userError,passwordError:false})
    }
    if(confirmPassword !== ""){
      setUserError({...userError,confirmPasswordError:false})
    }

    
})

    
  return (
    <main className="form-signin w-100 m-auto">
    <form onSubmit={formHandler}>

      
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input style={{border:firstNameError && "3px solid red"}} type="text" className="form-control"  placeholder="name"
          onChange={(e)=>{setUserDetails({...userDetails, firstName:e.target.value})
          }
  
          }/>
        <label>First name</label>
        {firstNameError && (<span className='text-danger mt-0'>Enter Last Name</span>)}
      </div>
      
      <div className="form-floating">
        <input style={{border:lastNameError && "3px solid red"}} type="text" className="form-control mt-3" placeholder="name"  
        onChange={(e)=>{setUserDetails({...userDetails, lastName:e.target.value})
      }


        }/>
        <label >Last name</label>
        {lastNameError && (<span className='text-danger mt-0'>Enter Last Name</span>)}
      </div>
      
      
  
      <div className="form-floating">
        <input style={{border:emailError && "3px solid red"}}  type="email" className="form-control"placeholder="name@example.com"
        onChange={(e)=>{setUserDetails({...userDetails, email:e.target.value})
      }


        }
        />
        <label>Email address</label>
        {emailError && (<span className='text-danger mt-0'>Enter Last Name</span>)}
      </div>
      <div className="form-floating">
        <input style={{border:passwordError && "3px solid red"}}  type="password" className="form-control" placeholder="Password"   
       onChange={(e)=>{setUserDetails({...userDetails, password:e.target.value})
      }


        }/>
        <label>Password</label>
        {passwordError && (<span className='text-danger mt-0'>Enter Last Name</span>)}
      </div>
      <div className="form-floating">
        <input style={{border:confirmPasswordError && "3px solid red"}}  type="password" className="form-control" placeholder="Password"   
       onChange={(e)=>{setUserDetails({...userDetails, password:e.target.value})
      }


        }/>
        <label> Confirm Password</label>
        {confirmPassword && (<span className='text-danger mt-0'>Enter Last Name</span>)}
      </div>
  
      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"  
      />
        <label className="form-check-label">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    
    </form>
  </main>
   
  )
}
 export default Form;
