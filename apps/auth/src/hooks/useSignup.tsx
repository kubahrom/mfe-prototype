import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signup } from '@firebaseAuth/auth';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await signup(data.email, data.password);
      localStorage.setItem('mfe-auto-login', 'true');
    } catch (e) {
      const errorMesage = (e as Error).message;
      methods.setError('root', { type: 'manual', message: errorMesage });
    }
    setIsLoading(false);
  });

  return { methods, onSubmit, isLoading };
};

const schema = z
  .object({
    email: z
      .string()
      .min(1, 'Toto pole je povinné')
      .email('Neplatný formát e-mailu')
      .max(255, 'Příliš dlouhý e-mail'),
    password: z
      .string()
      .min(1, 'Toto pole je povinné')
      .min(6, 'Heslo musí mít alespoň 6 znaků')
      .max(1024, 'Příliš dlouhé heslo'),
    passwordConfirmation: z.string().min(1, 'Toto pole je povinné'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Hesla se neshodují',
  });

type FormValues = z.infer<typeof schema>;
