import React, { Component } from 'react';

class DropdownForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
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
            case 'ChronicKidneyDisease':
                return (
                    <form>
                        <input type="text" placeholder='FOR CHRONIC KIDNEY DISEASE' />
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
                <div className="shadow-lg  px-[35px] py-[20px] rounded-lg ">
                    <select className="" onChange={this.handleDropdownChange}>
                        <option value="">Select an option</option>
                        <option value="COVID19">COVID19</option>
                        <option value="BreastCancer">Breast Cancer</option>
                        <option value="Malaria">Malaria</option>
                        <option value="Thyroid">Thyroid</option>
                        <option value="Typhoid">Typhoid</option>
                        <option value="Pneumonia">Pneumonia</option>
                        <option value="ChronicKidneyDisease">Chronic Kidney Disease</option>
                        <option value="BrainTumor">Brain Tumor</option>
                        <option value="Parkinsons">Parkinsons</option>
                    </select>
                    <div className="py-[10px]">
                        {this.renderForm()}
                    </div>
                    <button className="w-[150px] h-[40px] bg-[#18A0A9] text-[#FFFFFF] font-medium rounded-xl my-[10px]">Search</button>
                </div>
            </section>
        );
    }
}

export default DropdownForm;
