import React, { Component } from 'react';
import DiagnosesHeading from '../Components/DiagnosesHeading';
class DropdownForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'Malaria',
        };
    }


    handleDropdownChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    renderForm() {
        const { selectedOption } = this.state;

        switch (selectedOption) {
            case 'COVID19':
                return (
                    <form >
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
                    <form action='/diagnose_Diabetes' method='POST'>
                        <div >
                            <input type="text" placeholder='Pregnancies'  className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                            <input type="text" placeholder='Glucose'  className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                        </div>
                        <div>
                            <input type="text" placeholder='BloodPressure' className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                            <input type="text"  placeholder='SkinThickness' className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                        </div>
                        <div>
                            <input type="text" placeholder='Insulin' className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                            <input type="text" placeholder='BMI' className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                        </div>
                        <div>
                            <input type="text" placeholder='DiabetesPedigreeFunction'  className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]" />
                            <input type="text" placeholder='Age' className="w-[200px]  m-[10px] h-[50px] rounded-xl my-[10px] border-[1px] border-[#979797] p-[10px]"/>
                        </div>
                        <button className="w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-xl my-[10px]" type='submit'>Diagnose</button>
                    </form>
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
    }

    render() {
        return (
            <section className="py-[100px]">
                <div className='text-center inline-block'>
                    <DiagnosesHeading />
                    <div className="text-start ">
                        <select className="" onChange={this.handleDropdownChange}>
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
                        <div className="py-[10px] ">
                            {this.renderForm()}
                        </div>
                       
                    </div>
                </div>
            </section>
        );
    }
}

export default DropdownForm;
