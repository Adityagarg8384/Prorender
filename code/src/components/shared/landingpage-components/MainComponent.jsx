import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import SubscriptionPlans from "./SubscriptionPlans";
import Testimonials from "./Testimonials";

function MainComponent() {
  return (
    <main className="flex z-10 flex-col self-center w-full max-w-[1409px] max-md:max-w-full">
      {/* <Header /> */}
      <Hero />
      <Dashboard />
      <SubscriptionPlans />
      <Testimonials />
    </main>
  );
}

export default MainComponent;
