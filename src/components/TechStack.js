import React from "react";
import TechStackCard from "./TechStackCard";

const TechStack = () => {
  return (
    <div className="w-full flex gap-8 px-16 mt-8 justify-stretch items-stretch">
      <TechStackCard
        img="https://d3cmu8mv5wwijw.cloudfront.net/static/media/reactjs.c1795ade.jpg"
        title="ReactJS"
        desc="ReactJS/Redux using the ES2015 (ES6) syntax."
        link="https://facebook.github.io/react"
      />
      <TechStackCard
        img="https://d3cmu8mv5wwijw.cloudfront.net/static/media/createReactApp.e2bb2de3.jpg"
        title="create-react-app"
        desc="Official. No Setup. Built in HMR, ESLint, Jest, Coverage"
        link="https://github.com/facebookincubator/create-react-app"
      />
      <TechStackCard
        img="https://d3cmu8mv5wwijw.cloudfront.net/static/media/reactjs.c1795ade.jpg"
        title="React Router 4"
        desc="Declarative routing for ReactJS apps."
        link="https://reacttraining.com/react-router"
      />
      <TechStackCard
        img="https://d3cmu8mv5wwijw.cloudfront.net/static/media/reactjs.c1795ade.jpg"
        title="BootStrap 4"
        desc="A framework for styling apps for all screen sizes."
        link="http://v4-alpha.getbootstrap.com/"
      />
    </div>
  );
};

export default TechStack;
