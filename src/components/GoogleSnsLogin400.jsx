//https://developers.google.com/identity/gsi/web/reference/js-reference?hl=ko
import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

const GoogleSnsLogin400 = () => {
    const CLIENT_ID = '51505245837-beplbb48s211h4qae6iaqge837l3r5p0.apps.googleusercontent.com';

    const handleLoginSuccess = (response) => {
        console.log('로그인 성공:', response);
    };

    const handleLoginFailure = (error) => {
        console.error('로그인 실패:', error);
    };

    return (
        <div>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin width={400}>
                </GoogleLogin>
            </GoogleOAuthProvider>
        </div>
    )
}

export default GoogleSnsLogin400