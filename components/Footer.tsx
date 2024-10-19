'use client';
import { Facebook, Instagram, Linkedin, MessageCircle, Rss, Twitch, Twitter, Youtube } from 'lucide-react';
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black rounded-2xl shadow mx-4 mb-4 mt-10">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-white px-7 pb-1 md:text-md text-sm text-center'>Cada uno de nuestros empleados ha sido seleccionado por su experiencia y pasión por el bienestar y belleza, y están en constante actualización sobre las últimas tendencias y técnicas estéticas.
                    </p>
                    <div className='flex text-white pb-7 px-7 md:text-md text-sm text-center items-center gap-5 justify-center'>
                        <p>Síguenos en nuestras redes sociales  ㅤ➤</p>
                        <div className='flex gap-4'><Linkedin className='w-4' /> <MessageCircle className='w-4'/> <Rss className='w-4'/>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer