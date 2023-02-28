import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import "./css/register.css";

export default function Register() {
    const [step, setstep] = useState(0);
    
    const diseaseSpectrum = [
        "ADHD or attention deficit hyperactivity disorder",
        "Arthritis (osteoarthritis, rheumatoid arthritis or RA, psoriatic arthritis)",
        "Autism spectrum",
        "Bone or joint problems (gout, osteoporosis, back pain, ankylosing spondylitis)",
        "Breathing, respiratory, or lung problems (COPD, asthma, chronic cough)",
        "Cancer",
        "Diabetes (type 1 or type 2)",
        "Headaches (migraine, cluster, tension)",
        "Heart or circulation problems (heart attack, heart failure, stroke)",
        "High blood pressure or hypertension",
        "High cholesterol, triglycerides, or lipids",
        "Intestinal disorders (IBS or irritable bowel syndrome, IBD or Inflammatory bowel disease, Crohn's disease, ulcerative colitis)",
        "Kidney disease",
        "Liver disease (fatty liver disease, NASH, NAFLD, cirrhosis)",
        "Lupus",
        "Mental or emotional health conditions (anxiety, bipolar disorder, depression, PTSD, schizophrenia)",
        "Neurological issues (Alzheimer's disease, memory loss, multiple sclerosis or MS, Parkinson's disease, seizure disorder or epilepsy, fibromyalgia)",
        "Skin problems (eczema or atopic dermatitis, psoriasis, vitiligo)",
        "Sleep problems (insomnia, sleep apnea, narcolepsy)",
        "Stomach problems (Acid reflux, heartburn or GERD, Gastroparesis or delayed gastric emptying)",
        "Urinary or bladder problems (overactive bladder, urinary leakage or incontinence)",
        "Men's health issues (prostate enlargement or BPH, low testosterone)",
        "None of the above",
    ];   

    const aditionaldiseaseSpectrum = [
        "Bipolar disorder",
        "Cancer in the past 5 years, except squamous cell or basal cell skin cancer", 
        "Cirrhosis",
        "Drug or alcohol abuse within the past year",
        "Hepatitis B",
        "Hepatitis C",
        "HIV or AIDS",
        "Kidney disease requiring dialysis",
        "Multiple sclerosis (MS)",
        "Neuropathy (nerve damage due to diabetes or another condition)",
        "Schizophrenia",
        "Seizure disorder such as epilepsy",
        "Active tuberculosis infection (TB)",
        "None of the above",
    ];
  
    const otherDisease = [
        "Eosinophilic esophagitis",
        "Inflamed esophagus due to allergies",
        "Allergic esophagitis",
        "Allergy in the esophagus",
        "Asthma of the esophagus",
        "​None of the above",
    ];

    const cholesterolMedication = [
        "Yes",
        "No",
        "Unsure",
    ];

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const buttonType=window.event.submitter.name;
        if(buttonType==='next'){
            nextStep();
        }else if(buttonType==='back'){
            prevStep();
        }
        console.log(data,step)
    };
    const listDiseaseSpectrum = diseaseSpectrum.map((disease)=>{   
        return  <li className="list-group-item list-item-before-register card">
            {disease}
            <label className="checkbox">
                <input type="checkbox"  value={disease} {...register("disease-spectrum", {})}/>
                <span className="danger"></span>
            </label>
        </li>;   
    });   

    const listAditionalDiseaseSpectrum = aditionaldiseaseSpectrum.map((disease)=>{
        return  <li className="list-group-item list-item-before-register card">
            {disease}
            <label className="checkbox">
                <input type="checkbox"  value={disease} {...register("disease-spectrum", {})}/>
                <span className="danger"></span>
            </label>
        </li>;
    });

    const listOtherDisease = otherDisease.map((disease)=>{
        return  <li className="list-group-item list-item-before-register card">
            {disease}
            <label className="checkbox">
                <input type="checkbox"  value={disease} {...register("disease-spectrum", {})}/>
                <span className="danger"></span>
            </label>
        </li>;
    });

    const anyMedCholesterol = cholesterolMedication.map((disease)=>{
        return  <li className="list-group-item list-item-before-register card">
            {disease}
            <label className="checkbox">
                <input type="checkbox"  value={disease} {...register("disease-spectrum", {})}/>
                <span className="danger"></span>
            </label>
        </li>;
    });
    
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        console.log(step);
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

   
    switch (step) {
        case 0: 
        return (
            <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                <form className="form-height-first" onSubmit={handleSubmit(onSubmit)} >
                    <div className="container forms-register" >
                        <div className="container " >
                            <div className="row contain-forms" >
                                <div className="image" ></div>
                                <div className="col-md-6 offset-md-3"><div >{/* className="card" */}
                                    <div className="card-header title-card">Let's get started to see if there is a study that's right for you!<br/>
                                    <b>Are you age 18 or older?</b></div>
                                            <ul className="list-group list-group-flush">
                                                
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                        </div>
                    <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="yes " className='btn btn-primary buton-down'  />
                    <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="no" className='btn btn-primary buton-down'  />
                    </div>
                </form>
            </div>
        )
        case 1: 
          return (

            <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                <form className="form-height-first" onSubmit={handleSubmit(onSubmit)}>
                <div className="container forms-register" >
                <div className="container ">
                    <div className="row contain-forms">
                        <div className="col-md-12"><div >{/* className="card" */}
                            <div className="card-header title-card"><b>Have you ever been diagnosed with any of the following health conditions?</b></div>
                                    <ul className="list-group list-group-flush">
                                        {listDiseaseSpectrum}
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
                    <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="next" className='btn btn-primary buton-down'  />
                </div>
                </form>
          </div>
          )
        case 2: 
          return (
         
            <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
             <form className="form-height" onSubmit={handleSubmit(onSubmit)}>
             <div className="container forms-register" >
             <div className="container">
                <div className="row">
                    <div className="col-md-12"><div >{/* className="card" */}
                        <div className="card-header title-card"><b>Have you ever been diagnosed with any of the following health conditions?</b></div>
                                <ul className="list-group list-group-flush">
                                    {listAditionalDiseaseSpectrum}
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
            <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="next" className='btn btn-primary buton-down'  />
             </div>
             </form>
             </div>
         
          )
        case 3: 
          return (
            <>
            <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                <form className="form-height" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container forms-register" >
                        <div className="container">
                            What is your approximate height?<br/>
                            <input type="number" placeholder="height cm" {...register("height", {})} /><br/>
                            What is your approximate weight?<br/>
                            <input type="number" placeholder="weight kg" {...register("weight", {})} /><br/>
                            <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
                            <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="next" className='btn btn-primary buton-down'  />
                        </div>
                    </div>
                </form>
            </div>
            </>
          )
        case 4:
          return (
       
              <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                <form className="form-height" onSubmit={handleSubmit(onSubmit)}>
                <div className="container forms-register" >
                <div className="container">
                <div className="row">
                    <div className="col-md-12 "><div >{/* className="card" */}
                        <div className="card-header title-card"><b> Do you currently suffer from any of the following?</b>
                       
                    (The body’s reaction to food, acid or allergies in the esophagus (the muscular tube that connects the throat to the stomach) can cause damage over time. 
                    This condition is called eosinophilic esophagitis (also known as allergic esophagitis, allergy in the esophagus or asthma of the esophagus).  
                    Symptoms may include difficulty swallowing, heartburn, indigestion or feeling food is “stuck” in your throat.)
                   </div>
                                <ul className="list-group list-group-flush">
                                    {listOtherDisease}
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
     
                    <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
                    <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="next" className='btn btn-primary buton-down'  />
                    </div>
                </form>
            </div>
           
          )
        case 5:
            return (
                <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                    <form className="form-height" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container forms-register" >
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 "><div >{/* className="card" */}
                            <div className="card-header title-card"><b> Are you currently taking any medication to manage high cholesterol, triglycerides or lipids?</b>
                        
                    </div>
                                    <ul className="list-group list-group-flush">
                                    {anyMedCholesterol}
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
        
                        <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
                        <input type="submit" onclick={handleSubmit(nextStep)} name='next' value="next" className='btn btn-primary buton-down'  />
                        </div>
                    </form>
                </div>
            )
        case 6:
            return (
                <div style={{backgroundImage: "url('./img/image-form-back.jpg')"}} className="container-forms img-form-container" >
                <form className="form-height" onSubmit={handleSubmit(onSubmit)}>
                <div className="container forms-register" >
                <div className="container">
                <div className="row">
                    <div className="col-md-12 "><div >{/* className="card" */}
                        <div className="card-header title-card"><b> </b>
                    
                            </div>
                                <ul className="list-group list-group-flush">
                                    <div class="form-group">
                                        <span className='input-group-lst'>First name</span><br/>
                                        <input className="input-text-list" type="text"  {...register("First name", {required: true, maxLength: 80})} />
                                    </div>
                                    <div class="form-group">
                                        <span  className='input-group-lst'>Last name</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Last name", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>Email</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>Phone</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Phone", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>Address</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Address", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>Country</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Country", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>City</span><br/>
                                        <input className="input-text-list" type="text"  {...register("City", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>State</span><br/>
                                        <input className="input-text-list" type="text"  {...register("State", {required: true, maxLength: 100})} />
                                    </div>
                                    <div class="form-group">
                                        <span className='input-group-lst'>Zip</span><br/>
                                        <input className="input-text-list" type="text"  {...register("Zip", {required: true, maxLength: 100})} />
                                    </div>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
    
                    <input type="submit" onclick={handleSubmit(prevStep)} name='back' value="back" className='btn btn-primary buton-down'  />
                    <input type="submit" onclick={handleSubmit(nextStep)} name='submit' value="Submit" className='btn btn-primary buton-down'  />
                    </div>
                </form>
            </div>
            )
        default: 
           // do nothing
    }
    
}
