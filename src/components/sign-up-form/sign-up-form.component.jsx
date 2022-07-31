import { async } from "@firebase/util";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFiels] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () =>{
        setFormFiels(defaultFormField);
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!password === confirmPassword){
            alert("Password do not match");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            } else
            console.log('user creation encountered an error',err);
        }
        
    };

    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormFiels({...formFields, [name]: value})
    };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}/>

        <label>Cornfirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;