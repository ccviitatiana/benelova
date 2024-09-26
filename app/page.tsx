'use client';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { inputSchema } from "@/lib/schemaFormEmail/schema";
import { Mail } from "lucide-react";
import Image from "next/image";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useMutation } from "@tanstack/react-query";
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

  const onSubmit = (data: Input) => {
    console.log(data);
    getResponse(data, {
      onError: (err) => {
        console.error(err);
        alert('Hubo un problema al enviar el correo');
      },
      onSuccess: ({ response }) => {
        console.log(response)
      }
    })
  }

  form.watch();

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <h1>IM THE BIGGEST HIT ON THE STAGE -wó</h1>
        <h1>⊹  ࿙࿙  ˖ ࣪   .  †  .   ࣪ ˖ ࿙࿚࿙࿚  ⊹

          𓈒 ⠀ ✟ 🗝 ⠀ᩧ⠀  ۫     ׅ  𐑺 🪽⠀⣷</h1>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: fieldProps }) => (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={field.placeholder} {...fieldProps} />
                      </FormControl>
                      <FormDescription>This is your public display name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <Button>send email <Mail className="w-4 ml-3" /></Button>
        <Image src="/doyu.jpeg" alt="yei" width={200} height={500} />
      </div >
    </>
  );
}