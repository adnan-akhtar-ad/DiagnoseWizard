import React, { useState } from 'react';
import DiagnosesHeading from '../Components/DiagnosesHeading';
import { useEffect } from 'react';
const DropdownForm = () => {
    const [prob,setprob]=useState("");
    const [probColour,setProbColour] = useState("ml-[10px] text-[#07f79f]");
    const [visibility,setVisibility]=useState("font-bold text-[30px] hidden ");
    const [selectedOption, setSelectedOption] = useState('Malaria');
    const [diabetesFormData, setDiabetesFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigreeFunction: '',
        age: '',
    });
   
   
    useEffect(()=>{
        if(parseFloat(prob)>=0.75){
         setProbColour("ml-[10px]  text-[#f70733]")
        }else if(parseFloat(prob)<0.75 && parseFloat(prob)>0.3){
         setProbColour("ml-[10px] text-[#f7db07]")
        }else{
         setProbColour("ml-[10px] text-[#07f79f]")
        }
 },[prob]);

const handleDiabetesFormChange=async (e)=>{
    e.preventDefault();
    try{
        const response = await fetch(`http://127.0.0.1:5000/diagnose_Diabetes`, {
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Pregnancies":parseFloat(diabetesFormData.pregnancies),
                "Glucose":parseFloat(diabetesFormData.glucose),
                "BloodPressure":parseFloat(diabetesFormData.bloodPressure),
                "SkinThickness":parseFloat(diabetesFormData.skinThickness),
                "Insulin" :parseFloat(diabetesFormData.insulin),
                "BMI":parseFloat(diabetesFormData.bmi),
                "DiabetesPedigreeFunction":parseFloat(diabetesFormData.diabetesPedigreeFunction),
                "Age":parseFloat(diabetesFormData.age)
            }),
        })
        const data = await response.json();
        console.log(data);
        if (data.status==='success') {
            console.log("diagnosed");   
            setVisibility("font-bold text-[30px] flex"); 
            setprob(data.probability);

            setDiabetesFormData({
                pregnancies: '',
                glucose: '',
                bloodPressure: '',
                skinThickness: '',
                insulin: '',
                bmi: '',
                diabetesPedigreeFunction: '',
                age: '',
            });
        }
        if (!response.ok) {
            console.log("The status code :", response.status)
            console.log("diagnose failed");
            const errorData = await response.json();
            throw new Error(errorData.error);


        }

     
    }catch(err){
        console.error(`Error diagnosing the user`, err.message);

    }
}
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDiabetesInputChange = (event, fieldName) => {
        setDiabetesFormData({
            ...diabetesFormData,
            [fieldName]: event.target.value,
        });
        setVisibility("font-bold text-[30px] hidden"); 
    };

    const renderForm = () => {
        switch (selectedOption) {
            case 'COVID19':
                return (
                    <form>
                        <input type="text" placeholder='FOR COVID19' />
                    </form>
                );

            case 'Malaria':
                return (
                    <form>
                        <input type="text" placeholder='FOR MALARIA' />
                    </form>
                );

            case 'BreastCancer':
                return (
                    <form>
                        <input className="border-[#979797]" type="text" placeholder='FOR BREAST CANCER' />
                    </form>
                );

            case 'Thyroid':
                return (
                    <form>
                        <input type="text" placeholder='FOR THYROID' />
                    </form>
                );

            case 'Typhoid':
                return (
                    <form>
                        <input type="text" placeholder='FOR TYPHOID' />
                    </form>
                );

            case 'Pneumonia':
                return (
                    <form>
                        <input type="text" placeholder='FOR PNEUMONIA' />
                    </form>
                );

            case 'BrainTumor':
                return (
                    <form>
                        <input type="text" placeholder='FOR BRAIN TUMOR' />
                    </form>
                );

            case 'Diabetes':
                return (
                    <div>
                        <form action='/diagnose_Diabetes'>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Pregnancies'
                                    value={diabetesFormData.pregnancies}
                                    onChange={(e) => handleDiabetesInputChange(e, 'pregnancies')}
                                    className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                                <input
                                    type="text"
                                    placeholder='Glucose'
                                    value={diabetesFormData.glucose}
                                    onChange={(e) => handleDiabetesInputChange(e, 'glucose')}
                                    className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='BloodPressure'
                                    value={diabetesFormData.bloodPressure}
                                    onChange={(e) => handleDiabetesInputChange(e, 'bloodPressure')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                                <input
                                    type="text"
                                    placeholder='SkinThickness'
                                    value={diabetesFormData.skinThickness}
                                    onChange={(e) => handleDiabetesInputChange(e, 'skinThickness')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Insulin'
                                    value={diabetesFormData.insulin}
                                    onChange={(e) => handleDiabetesInputChange(e, 'insulin')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                                <input
                                    type="text"
                                    placeholder='BMI'
                                    value={diabetesFormData.bmi}
                                    onChange={(e) => handleDiabetesInputChange(e, 'bmi')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder='DiabetesPedigreeFunction'
                                    value={diabetesFormData.diabetesPedigreeFunction}
                                    onChange={(e) => handleDiabetesInputChange(e, 'diabetesPedigreeFunction')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                                <input
                                    type="text"
                                    placeholder='Age'
                                    value={diabetesFormData.age}
                                    onChange={(e) => handleDiabetesInputChange(e, 'age')}
                                     className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"
                                />
                            </div>
                        </div>
                        <button className="mx-[auto] w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-xl my-[10px]" type='submit' onClick={handleDiabetesFormChange}>Diagnose Me</button>
                    </form>
                    <div>
                        <h3 className={visibility}>
                            The probability of you having Diabetes is  <span className={probColour}>{prob}</span>!!
                        </h3>
                    </div>
                    </div>
                );

            case 'Parkinsons':
                return (
                    <form>
                        <input type="text" placeholder='FOR PARKINSONS' />
                    </form>
                );

            default:
                return null;
        }
    };

    return (
        <section className="py-[100px]">
            <div className='text-center inline-block'>
                <DiagnosesHeading />
                <div className="text-start">
                    <select className="" onChange={handleDropdownChange}>
                        <option value="Malaria">Malaria</option>
                        <option value="COVID19">COVID19</option>
                        <option value="BreastCancer">Breast Cancer</option>
                        <option value="Thyroid">Thyroid</option>
                        <option value="Typhoid">Typhoid</option>
                        <option value="Pneumonia">Pneumonia</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="BrainTumor">Brain Tumor</option>
                        <option value="Parkinsons">Parkinsons</option>
                    </select>
                </div>
                <div className='text-center shadow-lg  px-[35px] py-[20px] rounded-lg w-[800px] '>
                    <div className="py-[10px]">
                        {renderForm()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DropdownForm;
