import React from 'react'

const Sos = () => {

    function handleEmergencySms() {
        alert("Sending SMS to all registered emergency contacts!")
        return;
    }
    function handleMedicalCall() {
        alert("Calling ambulance!")
        return;
    }
    return (
        <div className='h-[92vh] bg-sky-50 flex flex-col justify-center items-center'>
            <button onClick={handleEmergencySms} className="btn-md px-10 py-3">SMS Emergency Number</button>
            <button onClick={handleMedicalCall} className="btn-md px-10 py-3">Call Medical Help</button>
        </div>
    )
}

export default Sos