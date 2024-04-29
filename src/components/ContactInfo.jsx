
const ContactInfo = () => {
    return (
        <div className='w-11/12 container mx-auto mb-10'>
            <section className="bg-white/20 rounded-xl dark:bg-gray-900">
                <div className="container px-12 py-12 mx-auto">
                    <div>
                        <p className="font-medium text-sage-green-500 dark:text-sage-green-400">Contact us</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                            <div>
                                <span className="inline-block p-3 text-sage-green-500 rounded-full bg-sage-green-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm text-sage-green-500 dark:text-sage-green-400">hello@merakiui.com</p>
                            </div>

                            <div>
                                <span className="inline-block p-3 text-sage-green-500 rounded-full bg-sage-green-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                                <p className="mt-2 text-sm text-sage-green-500 dark:text-sage-green-400">100 Smith Street Collingwood VIC 3066 AU</p>
                            </div>

                            <div>
                                <span className="inline-block p-3 text-sage-green-500 rounded-full bg-sage-green-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-sm text-sage-green-500 dark:text-sage-green-400">+1 (555) 000-0000</p>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto drop-shadow-lg">
                            
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10529.951514020837!2d90.38706247515164!3d23.750776709587765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1714384029450!5m2!1sbn!2sbd"
                            width="100%"
                            height="600"
                            style={{ border: "0"  }}
                            allowFullScreen=""
                            loading="lazy"
                            className='rounded-lg'
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>


                        {/* 
                        <iframe
  width="100%"
  height="400"
  frameBorder="0"
  scrolling="no"
  marginHeight="0"
  marginWidth="0"
  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;
  q=51%20Farmgate,%20Dhaka,%20Bangladesh+(ClayNest)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
>
  <a href="https://www.gps.ie/">gps systems</a>
</iframe>

                        
                        */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactInfo;