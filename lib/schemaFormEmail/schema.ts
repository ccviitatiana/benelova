import { z } from 'zod';

export const inputSchema = z.object({
    nombre: z.string()
        .min(4, { message: 'El nombre debe tener al menos 4 letras.' })
        .max(50, { message: 'El nombre no puede exceder 50 letras.' }),

    ciudad: z.string()
        .min(4, { message: 'La ciudad debe tener al menos 4 letras.' })
        .max(50, { message: 'La ciudad no puede exceder 50 letras.' }),

    profesion: z.string()
        .min(4, { message: 'La profesión debe tener al menos 4 letras.' })
        .max(50, { message: 'La profesión no puede exceder 50 letras.' }),

    celular: z.string()
        .min(10, { message: 'El celular debe tener al menos 10 caracteres.' })
        .max(10, { message: 'El celular no puede exceder 10 caracteres.' })
        .refine(value => /^\d+$/.test(value), {
            message: 'El celular solo puede contener números.'
        }),

    correo: z.string()
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            { message: 'Ingresa un correo electrónico válido.' }),

    pqrsContenido: z.string()
        .min(4, { message: 'El contenido debe tener al menos 4 letras.' })
        .max(50, { message: 'El contenido no puede exceder 50 letras.' }),
});