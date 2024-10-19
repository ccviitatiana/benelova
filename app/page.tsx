'use client';
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
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import SparklesText from "@/components/ui/sparkles-text";
import TopBar from "@/components/TopBar";
import Countdown from 'react-countdown';
import { useEffect, useState } from "react";
import Map from "@/components/Map";
import TextSection from "@/components/TextSection";

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

export default function Home() {
  const [isDisabledButton, setIsDisabledButton] = useState(false)
  const [countdownEnd, setCountdownEnd] = useState<string | number | Date | undefined>(0);

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
                  <h1 className="">Clínica de belleza especializada y certificada</h1>
                </div>
              </div>


              <TextSection />

            </div>
          </div>

          <main className="md:pb-10">
            <div className="px-6 md:px-0 w-full md:w-4/5 lg:w-3/4 xl:w-3/4 2xl:w-[68%] mx-auto">

              <CarouselDemo />

              <div className="flex flex-col justify-c enter items-center mt-32 mb-10">
                <SparklesText className="text-[5vw] text-center" text="Benelova te está esperando!" />

                <h1 className="text-[3vw] text-center">
                  Ingresa tu email para estar al tanto de todo.
                </h1>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col items-center justify-center">
                  <Image src="/woman-1.jpg" alt="" width={500} height={500} className="rounded-[50px]" />
                  <div className="flex flex-col items-center mt-4"> {/* Center text and apply margin */}
                    <h1 className="text-[3vh] text-center m-2">
                      Llena el formulario y comunícate directamente con nosotros, <br />
                      <p className="font-bold">te atenderémos inmediatamente. ᯓ★</p>
                    </h1>
                  </div>
                </div>

                <div className="px-5 w-full relative mb-16">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#396045"
                        d="M61.1,-15.4C68.6,3.2,56.7,32.5,40.4,40.8C24.1,49.1,3.4,36.5,-7,25.3C-17.3,14.1,-17.2,4.2,-14.4,-8C-11.5,-20.3,-5.7,-35.1,10.5,-38.5C26.8,-41.9,53.6,-34,61.1,-15.4Z"
                        transform="translate(100 100) scale(2)" />
                    </svg>
                  </div>

                  <div className="relative mx-9 md:mx-0">
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

              <Map />

            </div>
          </main>
          <Footer />
        </div >
      </div >
    </>
  );
}