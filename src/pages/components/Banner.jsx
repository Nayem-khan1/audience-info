import React from 'react';
import image from '../../assets/banner.png'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='container d-flex justify-content-between align-items-end bg-body-secondary rounded px-0'>
            <div className='py-5 ps-5'>
                <h4>যেকোনো প্রয়োজনে কল করো এখনই</h4>
                <p>চ্যাম্পিয়ন কুইজ, তোমার পড়াশোনা সংক্রান্ত যেকোনো জিজ্ঞাসায় কল করো</p>
                <h4>সকাল ৯ টা - রাত ১০ টা</h4>
                <Button><a className="text-light text-decoration-none" href='tel:16290'>16290</a></Button>
                <p className='mt-2'>সকাল ৯ টা - রাত ১০ টা</p>
            </div>
            <div className='pt-5'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;