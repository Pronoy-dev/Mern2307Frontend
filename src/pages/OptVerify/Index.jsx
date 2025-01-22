import axios from 'axios'
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { axiosinstance } from '../../helpers/axios'
import { ErrorToast } from '../../helpers/Toast'

const OtpVerify = () => {
    const params = useParams()
    const [loading, setloading] = useState(false)
    const [otp, setotp] = useState(null)
    const { email } = params;


    const handleOtp = async () => {
        try {
            setloading(true)
            const response = await axiosinstance.post('auth/verify-otp', {
                email: email,
                otp: otp
            })

            if(response.statusText.toLocaleLowerCase() === "oK".toLocaleLowerCase()){
                console.log(response.data);
                
            }

        } catch (error) {
            ErrorToast(error.response.data.error)
            console.error("error from handleopt ", error)
        }
        finally {
            setloading(false)
        }
    }

    return (
        <div className='mb-20'>
            <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
                <div class="flex flex-col space-y-2 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
                    <p class="text-md md:text-xl">
                        Enter the OTP we just sent you.
                    </p>
                </div>
                <div class="flex flex-col max-w-md space-y-5">
                    <input type="number" placeholder="otp"
                        class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" onChange={(e) => setotp(e.target.value)} value={otp} />
                    {loading ? (<button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        loading ...
                    </button>) : (<button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" onClick={handleOtp}>
                        Confirm
                    </button>)}

                </div>
            </div>
        </div>
    )
}

export default OtpVerify
