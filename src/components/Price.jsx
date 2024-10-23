import Card from "./Card";

const personalPlan = {
  name: "Personal",
  price: "$12.99",
  user: "user",
  features: [
    "Free licensed icons",
    "Fast and free standard shipping",
    "No credit card required",
    "Friendly supports",
  ],
};

const professionalPlan = {
  name: "Professional",
  price: "$59.99",
  user: "team",
  features: [
    "Full access to all features",
    "Fast and free standard shipping",
    "No credit card required",
    "Use on unlimited projects",
    "Team collaboration feature.",
    "Friendly supports",
  ],
};

const enterprisePlan = {
  name: "Enterprise",
  price: "$99.9",
  user: "team",
  features: [
    "All features in Pro Plan.",
    "Use on unlimited projects",
    "Team collaboration feature.",
    "Friendly supports",
  ],
};

export default function Price() {
  return (
    <section id="pricing" className="bg-light mt-5">
      <div className="container-lg">
        <div className="text-center">
          <h2>Simple pricing for everyone</h2>
          <p className="lead text-mutted">Choose a plan and get started</p>
        </div>
        <div className="row my-5 align-items-center justify-content-between">
          <Card plan={personalPlan}></Card>
          <Card plan={professionalPlan}> </Card>
          <Card plan={enterprisePlan}> </Card>
        </div>
      </div>
    </section>
  );
}
