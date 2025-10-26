import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Dashboard from "./Dashboard";
import SubscriptionPlans from "./SubscriptionPlans";
import Testimonials from "./Testimonials";

function MainComponent() {
  return (
    <main className="flex z-10 flex-col w-full min-w-0 mx-auto md:max-w-[1409px] px-4 md:px-0">
      {/* <Header /> */}
      <Hero />
      <Dashboard />
      <SubscriptionPlans />
      <Testimonials />
    </main>
  );
}

export default MainComponent;
