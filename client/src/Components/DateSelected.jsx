import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ChevronLastIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import BlurCircle from './BlurCircle';

function DateSelected({ dateTime, id }) {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);

    const onBookHandler = () => {
        if (!selectedDate) {
            return toast('Please select a date');
        }
        navigate(`/movie/${id}/${selectedDate}`);
        window.scrollTo(0, 0);  // Corrected from scrollTop
    };

    return (
        <div className='pt-30 relative' id="dateSelect">

            <BlurCircle top="0" left="-80px" />
             <BlurCircle top="100" right="-80px" />
            <div className="relative flex-col items-start justify-between p-8 border-1 border-primary/20 bg-primary/10 rounded-lg w-full">
                <p className="text-lg font-semibold">Choose Date</p>

                <div className='flex justify-between items-center gap-2 mt-5'>
                   
                   
                   
                    <div className='select-date flex justify-start items-center gap-4'>
                       <ChevronLeft className='w-4.5 h-4.5'/>
                        {
                            Object.keys(dateTime).map((date) => (
                                <button
                                    key={date}
                                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer border border-primary/70 ${selectedDate === date ? 'bg-primary text-white' : ''}`}
                                    onClick={() => setSelectedDate(date)}
                                >
                                    <span>{new Date(date).getDate()}</span>
                                    <span>{new Date(date).toLocaleString('default', { month: 'short' })}</span>
                                </button>
                            ))
                        }

                        <ChevronRight className='w-4.5 h-4.5'/>
                    </div>
                    <button
                        onClick={onBookHandler}
                        className='bg-primary hover:bg-primary-dull transition rounded-sm px-8 py-4 cursor-pointer text-sm'
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DateSelected;
