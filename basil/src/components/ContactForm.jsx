import React from 'react'

const ContactForm = ({ image }) => {
    return (
        <div className="section max-w-[1200px]">
            <div className="flex justify-between items-center">
                <form className="text-center">
                    <h2 className="text-left text-[3.125rem] mb-5">Let's Work.</h2>
                    <div className="flex gap-x-5 mb-4">
                        <div className="flex flex-col">
                            <label className="text-left text-[1.5rem] mb-2" htmlFor="fname">
                                First Name <span>*</span>
                            </label>
                            <input className="rounded bg-[#ececec] py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline" id="fname" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left text-[1.5rem] mb-2" htmlFor="lname">
                                Last Name <span>*</span>
                            </label>
                            <input className="rounded bg-[#ececec] py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-left text-[1.5rem] mb-2" htmlFor="email">
                            Email <span>*</span>
                        </label>
                        <input className="rounded bg-[#ececec] py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-[1.5rem] mb-2" htmlFor="message">
                            Message <span>*</span>
                        </label>
                        <textarea className="rounded bg-[#ececec] py-2 px-3 w-full h-32 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" />
                    </div>
                    <button className="py-2 px-4 mt-4 hover:bg-[#fff] hover:text-[#000] border-2 border-black" type="submit">
                        SUBMIT
                    </button>
                </form>
                <img src={image} className="w-1/2 max-w-fit" />
            </div>
        </div>
    )
}

export default ContactForm