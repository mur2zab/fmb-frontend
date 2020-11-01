import React from "react";

import MultiStep from 'react-multistep';
import Step1Form from "./forms/Step1Form";
import Step2Form from "./forms/Step2Form";
import Step3Form from "./forms/Step3Form";

function MultiStepForm(){
    const steps = [
        {name:"Step One", component: <Step1Form/>},
        {name:"Step Two", component: <Step2Form/>},
        {name:"Step Three", component: <Step3Form/>}
    ];

    return(
        <MultiStep showNavigation={true} steps={steps}/>
    );
}

export default MultiStepForm;

