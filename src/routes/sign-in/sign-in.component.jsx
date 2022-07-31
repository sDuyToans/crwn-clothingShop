
// import { async } from '@firebase/util';
// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {  createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

const SighIn = () =>{
    // useEffect( () =>{
    //     async function checkDataWhenSignInWithGoogleRedirect(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     checkDataWhenSignInWithGoogleRedirect();
    // }, []);

    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SighIn;