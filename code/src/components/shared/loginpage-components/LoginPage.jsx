import Header from "./Header";
import MainContent from "./MainContent";

const LoginPage = () => {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen justify-center items-center px-20 py-14 bg-white max-md:px-5">
      <div className="flex flex-col container h-1/2 md:h-full md:w-3/4 w-100%">
        {/* <Header /> */}
        <MainContent />
      </div>
    </div>
  );
};

export default LoginPage;
