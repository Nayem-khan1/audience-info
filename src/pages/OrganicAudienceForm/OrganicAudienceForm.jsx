import React from 'react';
import watermarkLogo from '../../assets/m_watermark.png';
import logo from '../../assets/dashboard-logo.png';
import flat_log from '../../assets/logo_flat.png'
import { useState } from 'react';
import { toast } from 'react-toastify';
import './OrganicAudienceForm.css';

const OrganicAudienceForm = () => {
    const [inputMobileNumber, setInputMobileNumber] = useState('');
    const [selectedValues, setSelectedValues] = useState([]);


    function handleInputChange(event) {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setInputMobileNumber(newValue);
    }

    function handleCheckboxChange(event) {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedValues([...selectedValues, value]);
        } else {
            setSelectedValues(selectedValues.filter(v => v !== value));
        }
    }


    const handelStudentInfo = (e) => {
        e.preventDefault();

        const childrenName = e.target.children_name.value;
        if (!childrenName) {
            toast.error('Please enter children name');
            return;
        }

        if (!inputMobileNumber) {
            toast.error('Please enter mobile number');
            return;
        }

        const childrenClass = e.target.children_class.value;
        if (!childrenClass) {
            toast.error('Please enter children class');
            return;
        }

        const childrenAge = e.target.children_age.value;
        if (!childrenAge) {
            toast.error('Please enter children age');
            return;
        }



        const finalInformation = {
            parent_name: e.target.parent_name.value,
            children_name: e.target.children_name.value,
            phone_number: inputMobileNumber,
            children_class: e.target.children_class.value,
            children_age: e.target.children_age.value,
            zilla: e.target.zilla.value,
            interested_course: selectedValues.join(','),
            know_about_mojaru: e.target.know_about_mojaru.value,

        }

        fetch(`${process.env.REACT_APP_BASE_URL_STUDENT}organic-audience-form-save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(finalInformation),
        })
            .then(res => res.json())
            .then(data => {
                if (data.message_type === 'success') {
                    toast.success(data.message);
                    e.target.reset();
                    setInputMobileNumber();
                } else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <section className='container'>
            <div className='container'>
                <div className="row d-flex justify-content-evenly align-items-center py-4">
                    <div className="col-md-6 text-center">
                        <img src={flat_log} alt="" className='img-fluid img' />
                    </div>
                    <div className="col-md-6 text-center pt-2">
                        <h2 className="text-color">রেজিস্ট্রেশন করুন</h2>
                    </div>
                </div>
            </div>
            <div className='container-iframe'>
                <iframe
                    className='responsive-iframe'
                    src="https://www.youtube.com/embed/pvdv_d-VjDs?si=V8pN1HQYJnLrgF__"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            {/* d-flex justify-content-between align-items-center */}
            <div className='mt-4 mb-2'>
                <p className='lead-collect-title mb-0 text-center py-3'>নিচের ফর্মটি পূরণ করুন</p>
                {/* <img src={logo} alt="" className='img-fluid' /> */}
            </div>

            <div className='mb-5'>
                <img src={watermarkLogo} alt="Watermark Logo" className="watermark-logo" />

                <form onSubmit={handelStudentInfo}>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className='mb-2 font-400'>অভিভাবকের নাম</p>
                            <input className="mb-3 form-control form-control-lg student-profile-info" name="parent_name" type="text" placeholder="অভিভাবকের নাম লিখুন" />
                        </div>
                        <div className="col-lg-6">
                            <p className='mb-2 font-400'>সন্তানের নাম<span className='text-danger'>*</span></p>
                            <input className="mb-3 form-control form-control-lg student-profile-info" name="children_name" type="text" placeholder="সন্তানের নাম লিখুন " />
                        </div>
                        <div class="col-lg-6">
                            <p className='mb-2 font-400'>ফোন নাম্বার<span className='text-danger'>*</span></p>
                            <div class="input-group country-code">
                                <div class="input-group-text">
                                    <select name="" id="">
                                        <option value="">+88</option>
                                        <option value="">+1-268</option>
                                        <option value="">+93</option>
                                        <option value="">+355</option>
                                        <option value="">+213</option>
                                        <option value="">+376</option>
                                        <option value="">+673</option>
                                        <option value="">+246</option>
                                        <option value="">+55</option>
                                        <option value="">+267</option>
                                    </select>
                                </div>
                                <input className="mb-3 form-control form-control-lg student-profile-info" name="phone_number" type="text" placeholder="ফোন নাম্বার লিখুন" value={inputMobileNumber} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className='mb-2 font-400'>আপনার সন্তান কোন ক্লাসে পড়ে<span className='text-danger'>*</span></p>
                            <input className="mb-3 form-control form-control-lg student-profile-info" name="children_class" type="text" placeholder="ক্লাস" />
                        </div>
                        <div className="col-lg-6">
                            <p className='mb-2 font-400'>আপনার সন্তানের বয়স<span className='text-danger'>*</span></p>
                            <input className="mb-3 form-control form-control-lg student-profile-info" name="children_age" type="number" placeholder="সন্তানের বয়স লিখুন" />
                        </div>
                        <div className="col-lg-6">
                            <p className='mb-2 font-400'>নিজ জেলা</p>
                            <input className="mb-3 form-control form-control-lg student-profile-info" name="zilla" type="text" placeholder="জেলা" />
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-2">
                                <label className='mb-2'>আপনার সোনামণিকে মজারুতে কোন কোর্সটি করাতে চান<span className='text-danger'>*</span></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="অ্যাবাকাস মাইন্ড ম্যাথ" value="অ্যাবাকাস মাইন্ড ম্যাথ" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="অ্যাবাকাস মাইন্ড ম্যাথ">
                                        অ্যাবাকাস মাইন্ড ম্যাথ
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="ক্যাডেট প্রি-প্রিপারেশন (৩য়, ৪র্থ ও ৫ম শ্রেণির শিক্ষার্থীদের জন্য)" value="ক্যাডেট প্রি-প্রিপারেশন (৩য়, ৪র্থ ও ৫ম শ্রেণির শিক্ষার্থীদের জন্য)" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="ক্যাডেট প্রি-প্রিপারেশন (৩য়, ৪র্থ ও ৫ম শ্রেণির শিক্ষার্থীদের জন্য)">
                                        ক্যাডেট প্রি-প্রিপারেশন (৩য়, ৪র্থ ও ৫ম শ্রেণির শিক্ষার্থীদের জন্য)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="মিশন ক্যাডেট - ২৪ (৬ষ্ঠ শ্রেণির শিক্ষার্থীদের জন্য)" value="মিশন ক্যাডেট - ২৪ (৬ষ্ঠ শ্রেণির শিক্ষার্থীদের জন্য)" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="মিশন ক্যাডেট - ২৪ (৬ষ্ঠ শ্রেণির শিক্ষার্থীদের জন্য)">
                                        মিশন ক্যাডেট - ২৪ (৬ষ্ঠ শ্রেণির শিক্ষার্থীদের জন্য)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="স্মার্ট ইংলিশ" value="স্মার্ট ইংলিশ" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="স্মার্ট ইংলিশ">
                                        স্মার্ট ইংলিশ
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="ম্যাথ চ্যাম্পস- প্রাইমারি" value="ম্যাথ চ্যাম্পস- প্রাইমারি" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="ম্যাথ চ্যাম্পস- প্রাইমারি">
                                        ম্যাথ চ্যাম্পস- প্রাইমারি
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="প্রোগ্রামিং ফর কিডস (৭ থেকে ১২ বছর বয়সী দেরা জন্য)" value="প্রোগ্রামিং ফর কিডস (৭ থেকে ১২ বছর বয়সী দেরা জন্য)" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="প্রোগ্রামিং ফর কিডস (৭ থেকে ১২ বছর বয়সী দেরা জন্য)">
                                        প্রোগ্রামিং ফর কিডস (৭ থেকে ১২ বছর বয়সী দেরা জন্য)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="আদর্শলিপি (৩ থেকে ৪ বছর বয়সী দেরা জন্য)" value="আদর্শলিপি (৩ থেকে ৪ বছর বয়সী দেরা জন্য)" onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor="আদর্শলিপি (৩ থেকে ৪ বছর বয়সী দেরা জন্য)">
                                        আদর্শলিপি (৩ থেকে ৪ বছর বয়সী দেরা জন্য)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-4">
                            <p className='mb-2 font-400'>মজারু সম্পর্কে আপনি কথাথেকে জেনেছেন</p>
                            <select name="know_about_mojaru" className="form-select form-control form-control-lg student-profile-info" id="select_box" >
                                <option value="">নির্বাচন করুন</option>
                                <option value="ফ্রেন্ডস এন্ড ফ্যামিলি মাধ্যমে">ফ্রেন্ডস এন্ড ফ্যামিলি মাধ্যমে</option>
                                <option value="ফেসবুক বিজ্ঞাপনের মাধ্যমে">ফেসবুক বিজ্ঞাপনের মাধ্যমে </option>
                                <option value="মজারু জিনিয়াস গ্রুপের মাধমে">মজারু জিনিয়াস গ্রুপের মাধমে</option>
                                <option value="মজারু ক্যাডেট গ্রুপের মাধমে ">মজারু ক্যাডেট গ্রুপের মাধমে </option>
                                <option value="হোয়াটসঅ্যাপ মেসেজের মাধমে" >হোয়াটসঅ্যাপ মেসেজের মাধমে</option>
                                <option value="ই-মেইলের মাধ্যমে" >ই-মেইলের মাধ্যমে</option>
                            </select>
                        </div>


                    </div>


                    <div className=" d-flex justify-content-end">
                        <input className="btn text-white mt-4 py-2 mb-5" style={{ backgroundColor: '#532D80', fontSize: '22' }} type="submit" value='সংরক্ষণ করুন'></input>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default OrganicAudienceForm;