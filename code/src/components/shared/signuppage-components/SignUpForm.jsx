import Header from "./Header";
import CreateAccountForm from "./CreateAccountForm";
import ProCareHero from "./ProCareHero";

function SignUpForm() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-14 bg-white max-md:px-5">
      <div className="flex flex-col w-full container max-md:max-w-full">
        {/* <Header /> */}
        <main className="pl-20 mt-24 bg-emerald-400 rounded-[40px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <section className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full h-auto">
              <div className="flex flex-col items-start mt-16 text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5385d7d76d6e7f74a8f52afb2d1328ce8f665706e6662795a496f76a0a8ab4af?placeholderIfAbsent=true&apiKey=eb1e27a892cb49d8a25258d2564dfff8"
                  alt=""
                  className="object-contain aspect-square w-[79px]"
                />
                <h1 className="mt-16 text-6xl font-semibold max-md:mt-10 max-md:text-4xl">
                  ProCare
                </h1>
                <p className="mt-10 text-5xl max-md:text-4xl">
                  Stay Strong, Live Long
                </p>
              </div>
            </section>
            <CreateAccountForm />
          </div>
        </main>
      </div>
    </div>
    // <main className="pl-20 mt-16 bg-emerald-00 rounded-[40px]   max-md:pl-5 max-md:mt-10 max-md:max-w-[80%] mb-32">
    //   <div className="flex gap-5 h-full">
    //     <ProCareHero />
    //     <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
    //       <LoginForm />
    //     </div>
    //   </div>
    // </main>
  );
}

export default SignUpForm;
