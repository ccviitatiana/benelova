import React from 'react'

const Map = () => {
    return (
        <>
            <div id="map" className="rounded-3xl bg-black m-3 flex flex-col lg:flex-row">
                {/* Map Container - 60% width */}
                <div className="relative w-full lg:w-[60%] h-0 pb-[40.25%]"> {/* 16:9 Aspect Ratio */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-l-2xl "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.8215402064757!2d-75.24342542560727!3d4.444289095529948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c4848b536707%3A0x82df9fee904c0fdd!2sDario%20Echandia%20Library!5e0!3m2!1sen!2sco!4v1727322410570!5m2!1sen!2sco"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Text Container - 40% width */}
                <div className="text-[2vw] text-white p-10 hidden lg:w-[60%] md:flex flex-col justify-center items-center">
                    <p>Dirección :: Cra.xjd x f 3A #11-26, Cra. 3A #11-26.</p>
                    <p className='text-[1.4vw]'>
                    ⊹ㅤ Ubicada en el corazón de la ciudad, nuestra clínica de belleza te
                        ofrece un ambiente acogedor y moderno, diseñado para brindarte
                        la mejor experiencia en tratamientos estéticos y de bienestar.</p>
                    <div className='flex rounded-tl-2xl rounded-r-2xl bg-white/85 my-4 items-center text-center justify-between w-full'>
                        <div className='flex gap-4'>
                            <div className='bg-white rounded-r-2xl rounded-tl-2xl text-black m-2 py-2 px-4 text-sm'>Ibagué 𐙚 Tolima</div>
                        </div>
                        <div className='text-black text-sm justify-end mr-5'> Llámanos!ㅤ➤ㅤ+57 302 58 54 039</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map
