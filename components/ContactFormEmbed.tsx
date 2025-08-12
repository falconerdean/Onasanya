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

export function ContactFormEmbed() {
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
      formData.append("form-name", "contact-embed");
      
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
    <div className="bg-pine-green rounded-2xl shadow-xl p-8 h-fit">
      <h3 className="text-2xl font-serif text-white mb-6">Get in Touch</h3>
      
      <form 
        name="contact-embed" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6"
      >
        {/* Hidden input for Netlify form name */}
        <input type="hidden" name="form-name" value="contact-embed" />
        
        {/* Honeypot field to prevent spam */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <Input
            {...register('name')}
            name="name"
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register('email')}
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Input
            {...register('phone')}
            name="phone"
            placeholder="Phone Number"
            className="w-full"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            {...register('message')}
            name="message"
            placeholder="Your Message"
            className="w-full min-h-[120px]"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
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