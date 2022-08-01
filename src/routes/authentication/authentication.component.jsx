
// import { async } from '@firebase/util';
// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss'
const Authentication = () =>{
    // useEffect( () =>{
    //     async function checkDataWhenSignInWithGoogleRedirect(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     checkDataWhenSignInWithGoogleRedirect();
    // }, []);


    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;