'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Create a FormData object to submit to Netlify
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("form-name", "contact");
      
      // Submit the form data to Netlify
      await fetch("/", {
        method: "POST",
        body: formData,
      });
      
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-pine-green rounded-2xl shadow-xl p-8 transform transition-transform duration-300 hover:translate-y-[-4px] h-full">
      <h3 className="text-2xl font-serif font-medium text-white mb-6">Contact Us with Questions or to Schedule a Free Consultation</h3>
      
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6"
      >
        {/* Hidden input for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field to prevent spam */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Your Name
          </label>
          <Input
            id="name"
            {...register('name')}
            name="name"
            placeholder="Enter your name"
            className="w-full"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <Input
            id="email"
            {...register('email')}
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            {...register('phone')}
            name="phone"
            placeholder="Enter your phone number"
            className="w-full"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <Textarea
            id="message"
            {...register('message')}
            name="message"
            placeholder="Enter your message"
            className="w-full min-h-[120px]"
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-midnight-green hover:bg-midnight-green/90 text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}