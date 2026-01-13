"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { complianceGuidance } from '@/ai/flows/ai-powered-compliance-guidance';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  businessType: z.string().min(2, { message: 'Business type is required.' }),
  industry: z.string().min(2, { message: 'Industry is required.' }),
  location: z.string().min(2, { message: 'Location is required.' }),
  businessActivities: z.string().min(10, { message: 'Please describe your business activities in more detail.' }),
});

type FormData = z.infer<typeof formSchema>;

export function ComplianceForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [guidance, setGuidance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: '',
      industry: '',
      location: '',
      businessActivities: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setGuidance(null);
    setError(null);
    try {
      const result = await complianceGuidance(values);
      setGuidance(result.guidance);
    } catch (e) {
      console.error(e);
      setError('An unexpected error occurred. Please try again later.');
    }
    setIsLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Compliance Information</CardTitle>
          <CardDescription>
            Fill out the details below to get your preliminary compliance guidance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., LLC, Corporation, Sole Proprietorship" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., E-commerce, Healthcare, SaaS" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location of Business</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., USA, UK, California" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessActivities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Activities</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what your business does, e.g., 'Selling handmade jewelry online through Amazon and an independent website.'"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Get Guidance'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="min-h-[400px]">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              AI-Generated Guidance
            </CardTitle>
            <CardDescription>
              Your preliminary compliance guidance will appear below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex flex-col items-center justify-center text-center text-muted-foreground pt-10">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p>Analyzing your information...</p>
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {guidance && (
              <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                {guidance}
              </div>
            )}
             {!isLoading && !guidance && !error && (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground pt-10">
                    <p>Results will be displayed here.</p>
                </div>
            )}
          </CardContent>
        </Card>
        <Alert>
          <AlertTitle>Disclaimer</AlertTitle>
          <AlertDescription>
            This guidance is AI-generated and for informational purposes only. It is not legal advice. Please consult with a qualified legal professional for your specific needs.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
