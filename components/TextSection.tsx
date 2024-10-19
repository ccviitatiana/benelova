import React from 'react'
import Image from "next/image";

const palabras: string[] = [
    'Salud',
    'Estética',
    'Belleza',
    'Exfoliación',
    'Confianza',
    'Bienestar'
]

const TextSection = () => {
    return (
        <>
            <div className="flex mt-32 justify-between gap-0 overflow-hidden">
                <div className="hidden lg:flex">
                    <Image src="/text_main.svg" alt="frame" width={650} height={200} className="m-5" />
                </div>
                <div className="flex gap-2 m-6 self-end justify-end w-full">
                    {palabras.map((palabra: string, index: number) => (
                        <div key={index} className="bg-white/90 rounded-2xl text-gray-950 px-4 py-2 backdrop-blur-md h-10">
                            {palabra}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TextSection