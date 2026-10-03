import { z } from 'zod';

export const contactRequestSchema = z
  .object({
    formType: z.enum(['contact', 'quote']),
    name: z.string().min(2).max(120),
    email: z.string().email(),
    phone: z.string().min(7).max(30),
    message: z.string().min(10).max(2000),
    smsConsent: z.boolean(),
    recaptchaToken: z.string().max(5000).optional(),
    website: z.string().max(200).optional(),
  })
  .superRefine((request, context) => {
    if (request.formType === 'contact' && !request.recaptchaToken) {
      context.addIssue({
        code: 'custom',
        path: ['recaptchaToken'],
        message: 'Complete the CAPTCHA verification.',
      });
    }
  });

export type ContactRequest = z.infer<typeof contactRequestSchema>;
