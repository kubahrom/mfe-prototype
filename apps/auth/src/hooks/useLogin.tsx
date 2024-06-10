import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { login } from '@firebaseAuth/auth';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      localStorage.setItem('mfe-auto-login', 'true');
    } catch (e) {
      const errorMesage = (e as Error).message;
      methods.setError('root', { type: 'manual', message: errorMesage });
    }
    setIsLoading(false);
  });

  return { methods, onSubmit, isLoading };
};

const schema = z.object({
  email: z
    .string()
    .min(1, 'This field is required')
    .email('Invalid e-mail address')
    .max(255, 'Too long e-mail address'),
  password: z
    .string()
    .min(1, 'This field is required')
    .max(1024, 'Too long password'),
});

type FormValues = z.infer<typeof schema>;
