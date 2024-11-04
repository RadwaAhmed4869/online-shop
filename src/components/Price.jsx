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
    <section id="pricing" className="bg-purple bg-opacity-10 pt-4 pb-5">
      <div className="container-lg">
        <div className="text-center pt-5">
          <h2 className="fw-bold">Simple pricing for everyone</h2>
          <small className="text-muted" style={{ fontSize: "12px" }}>
            Choose a plan and get started
          </small>
        </div>
        <div className="row m-4 align-items-center justify-content-between">
          <Card plan={personalPlan} btnStyles="bg-opacity-10" />
          <Card plan={professionalPlan} btnStyles="text-light" shadow>
            <small className="bg-dark text-light rounded py-1 px-3">
              Popular
            </small>
          </Card>
          <Card plan={enterprisePlan} btnStyles="bg-opacity-10" />
        </div>
      </div>
    </section>
  );
}
