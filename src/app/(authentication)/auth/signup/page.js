import React from 'react'
import SignUpPage from '../../../_components/signup/BasicAuthSignup';

export async function generateMetadata(){
    const title = 'Sign Up :: Splitwise';
    const describe = 'Splitwise Sign Up Page';
    return{
        title, describe
    }
}
const page = () => {
  return <div>Sign-Up component
    <div className="md-3">
      <SignUpPage/>
    </div>
  </div>;
}

export default page