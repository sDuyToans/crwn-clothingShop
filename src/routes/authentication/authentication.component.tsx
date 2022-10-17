
// import { async } from '@firebase/util';
// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer }  from './authentication.styles'
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
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </AuthenticationContainer>
    )
}

export default Authentication;