import { z } from 'zod';

export const contactRequestSchema = z
  .object({
    formType: z.enum(['contact', 'quote']),
    firstName: z.string().trim().min(1).max(80),
    lastName: z.string().trim().min(1).max(80),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(7).max(30),
    message: z.string().trim().min(10).max(2000),
    smsConsent: z.boolean().default(false),
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
