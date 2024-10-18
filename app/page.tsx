'use client';
// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
// import BlurIn from "@/components/magicui/blur-in";
import { Input } from "@/components/ui/input";
import { inputSchema } from "@/lib/schemaFormEmail/schema";
// import { Mail } from "lucide-react";
import Image from "next/image";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useMutation } from "@tanstack/react-query";
import { CarouselDemo } from "@/components/CarouselImages";
// import HeroMain from "@/components/Hero/HeroMain";
// import Link from "next/link";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
// import { AnimatedShinyTextDemo } from "@/components/Button";
import SparklesText from "@/components/ui/sparkles-text";
// import { AnimatedSubscribeButtonDemo } from "@/components/SendEmailButton";
import TopBar from "@/components/TopBar";
import Countdown from 'react-countdown';
import { useEffect, useState } from "react";

type Input = z.infer<typeof inputSchema>

type FormValues = {
  nombre: string;
  ciudad: string;
  profesion: string;
  celular: string;
  correo: string;
  pqrsContenido: string;
};

const formFields: Array<{
  name: keyof FormValues;
  label: string;
  placeholder: string;
}> = [
    { name: 'nombre', label: 'Nombre', placeholder: 'Nombre' },
    { name: 'ciudad', label: 'Ciudad', placeholder: 'Ciudad' },
    { name: 'profesion', label: 'Profesion', placeholder: 'Profesion' },
    { name: 'celular', label: 'Celular', placeholder: 'Celular' },
    { name: 'correo', label: 'Correo', placeholder: 'Correo' },
    { name: 'pqrsContenido', label: 'Mensaje', placeholder: 'Mensaje' },
  ];

const palabras: string[] = [
  'Salud',
  'Estética',
  'Belleza',
  'Exfoliación',
  'Confianza',
  'Bienestar'
]
export default function Home() {

  const [isDisabledButton, setIsDisabledButton] = useState(false)
  const [countdownEnd, setCountdownEnd] = useState<string | number | Date | undefined>(0); // Track countdown end time
  // const Completionist = () => {
  //   setIsDisabledButton(false);
  //   return null;
  // };

  const form = useForm<Input>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      nombre: '',
      ciudad: '',
      profesion: '',
      celular: '',
      correo: '',
      pqrsContenido: ''
    }
  });

  const { mutate: getResponse } = useMutation({
    mutationFn: async ({
      nombre,
      ciudad,
      profesion,
      celular,
      correo,
      pqrsContenido
    }: Input) => {
      try {
        const response = await axios.post("api/send-email", {
          nombre,
          ciudad,
          profesion,
          celular,
          correo,
          pqrsContenido
        })
        return response.data
      } catch (err) {
        console.error(err);
        return { error: 'Hubo un problema al enviar el correo' };
      }
    }
  });

  useEffect(() => {
    const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
    if (lastSubmissionTime) {
      const timeElapsed = Date.now() - Number(lastSubmissionTime);
      if (timeElapsed < 30000) {
        setIsDisabledButton(true);
        setCountdownEnd(Number(lastSubmissionTime) + 30000);
      }
    }
  }, []);

  const onSubmit = (data: Input) => {
    setIsDisabledButton(true);
    setCountdownEnd(Date.now() + 30000);
    localStorage.setItem("lastSubmissionTime", Date.now().toString());

    setTimeout(() => {
      getResponse(data);
    }, 30000);
  };

  const handleCountdownComplete = () => {
    setIsDisabledButton(false);
    setCountdownEnd(0);
  };

  const countdownRenderer = ({ seconds }: { seconds: number }) => {
    return <span>{seconds}</span>;
  };

  form.watch();

  return (
    <>
      <div className="h-screen w-screen bg-white overflow-x-hidden">

        <TopBar />

        <div className="bg-white">
          <div className="top-0 left-0 right-0">
            <div className="bg-[url('/stylist-1.jpg')] bg-cover bg-center rounded-3xl m-4 mt-0 flex flex-col justify-end h-full"> {/* Use flexbox */}
              <div className="flex flex-col p-5"> {/* Use flex column for stacking */}
                <div className="rounded-2xl w-96 p-5 poppins backdrop-blur-md bg-white/30 mb-4">
                  <h1 className="text-black font-semibold">Benelova: Clínica estética con instalación en Ibagué, Tolima</h1>
                </div>
                <div className="bg-white rounded-2xl w-96 p-5 poppins">
                  <h1>Clínica de belleza especializada y certificada</h1>
                </div>
              </div>


              <div className="flex mt-32 justify-between gap-0">
                <div>
                  <Image src="/text_main.svg" alt="frame" width={650} height={200} className="m-5" />
                </div>
                <div className="flex gap-2 m-6 self-end">
                  {palabras.map((palabra: string, index: number) => (
                    <div key={index} className="bg-white/90 rounded-2xl text-gray-950 px-4 py-2 backdrop-blur-md h-10">
                      {palabra}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <main className="md:pb-10">
            <div className="px-6 md:px-0 w-full md:w-4/5 lg:w-3/4 xl:w-3/4 2xl:w-[68%] mx-auto">
              {/* <HeroMain /> */}
              <CarouselDemo />


              <div className="flex flex-col justify-c enter items-center mt-32 mb-10">
                <SparklesText className="text-[5vw] text-center" text="Benelova te está esperando!" />

                <h1 className="text-[3vw] text-center">
                  Ingresa tu email para estar al tanto de todo.
                </h1>
                {/* <AnimatedSubscribeButtonDemo /> */}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <Image src="/woman-1.jpg" alt="yei" width={700} height={700} className='rounded-[100px]' />
                  <div className="flex">
                    {/* <SparklesText className="text-[5vh] m-2" text="🎁" /> */}
                    <h1 className="text-[3vh] m-2">Llena el formulario y comunícate directamente con nosotros, <p className="font-bold">te atenderémos inmediátamente.</p></h1>
                  </div>
                </div>
                <div className="px-5 w-full relative">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#396045"
                        d="M61.1,-15.4C68.6,3.2,56.7,32.5,40.4,40.8C24.1,49.1,3.4,36.5,-7,25.3C-17.3,14.1,-17.2,4.2,-14.4,-8C-11.5,-20.3,-5.7,-35.1,10.5,-38.5C26.8,-41.9,53.6,-34,61.1,-15.4Z"
                        transform="translate(100 100) scale(2)" />
                    </svg>
                  </div>

                  <div className="relative">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                        {formFields.map((field) => (
                          <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({ field: fieldProps, fieldState: { error } }) => (
                              <FormItem className="mb-2">
                                <FormLabel className="text-black">{field.label}</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={error ? error.message : ""}
                                    {...fieldProps}
                                    className={`border-black border-t-2 border-l-2 border-b-4 border-r-4 ${error ? "border-[#c1978b] placeholder-rose-600" : ""
                                      }`}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        ))}
                        {isDisabledButton ? (
                          <button className="w-full bg-black text-white p-4 mt-3 rounded-xl" disabled type="submit">
                            <p>Enviado! Vuelve a enviar en <Countdown
                              date={countdownEnd}
                              renderer={countdownRenderer}
                              onComplete={handleCountdownComplete}
                            /> segundos</p>
                          </button>
                        ) : (
                          <button className="w-full bg-black text-white p-4 mt-3 rounded-xl" type="submit">
                            <p>Enviar</p>
                          </button>
                        )}


                      </form>
                    </Form>
                  </div>



                </div>
              </div>

              <Info />


              <div id="mapa" className="rounded-3xl bg-black m-3 flex flex-col lg:flex-row">
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.8215402064757!2d-75.24342542560727!3d4.444289095529948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c4848b536707%3A0x82df9fee904c0fdd!2sDario%20Echandia%20Library!5e0!3m2!1sen!2sco!4v1727322410570!5m2!1sen!2sco"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <h1 className="text-[4vw] text-white p-4 hidden md:block">
                  Nos puedes encontrar en xxxxxx-xxxx-xxxxx-xxx-xx Ibagué Tolima
                </h1>
              </div>


            </div>
          </main>
          <Footer />
        </div >
      </div >
    </>
  );
}