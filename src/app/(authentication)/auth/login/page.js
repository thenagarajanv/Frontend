import LoginPage from "@/app/_components/login/BasicAuthLogin";

export async function generateMetadata() {
  const title = 'Login in :: Splitwise';
  const describe = 'Splitwise login page';

  return {
    title,describe
  };
}


const Page = () => {
  return <div>Login-in component
    <div className="md-3">
      <LoginPage/>
    </div>
  </div>;
};

export default Page;
