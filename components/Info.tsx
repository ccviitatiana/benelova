import React from 'react'
import Image from "next/image";

const Info = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-10 items-center justify-center mb-16'>
                <Image src="/woman-2.jpg" alt="yei" width={500} height={500} className='rounded-[100px]' />
                <div>
                    <h1 className='font-bold'>Clínica de Belleza certificada</h1>
                    <p>Una clínica de belleza es un espacio dedicado al cuidado estético y
                        al bienestar personal, donde se ofrecen una amplia variedad de
                        tratamientos diseñados para mejorar y realzar la apariencia física
                        de las personas. Estas clínicas están orientadas a brindar servicios
                        tanto para hombres como para mujeres que buscan mejorar su imagen,
                        corregir imperfecciones o simplemente mantener un aspecto saludable y radiante.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Info