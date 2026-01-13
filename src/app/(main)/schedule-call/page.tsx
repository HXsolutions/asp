
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Globe, Languages, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5 },
};

const benefits = [
  { icon: Check, text: 'Discuss your business goals and current situation.' },
  { icon: Check, text: 'Explore the best service options for your needs.' },
  { icon: Check, text: 'Clarify timelines, processes, and pricing.' },
  { icon: Check, text: 'Get answers to all your specific questions.' },
];

const consultationDetails = [
    { icon: Clock, label: "Duration", value: "30 Minutes" },
    { icon: Video, label: "Platform", value: "Zoom, Google Meet, Phone" },
    { icon: Globe, label: "Availability", value: "24/7" },
    { icon: Languages, label: "Languages", value: "English, Spanish, Urdu, Hindi" },
];

export default function ScheduleCallPage() {
  return (
    <div className="bg-background">
        <div className="pt-16">
            <motion.div {...fadeIn}>
                 <div className="bg-card border-b">
                    <div className="container mx-auto px-4 py-8 md:py-12 text-center">
                        <h1 className="text-3xl md:text-4xl font-headline font-bold">Schedule a Free Consultation</h1>
                        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Book a free, no-obligation 30-minute call with one of our business setup experts to discuss your specific needs.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeIn} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">What to Expect</CardTitle>
                <CardDescription>During your free consultation, we'll cover:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1 shrink-0">
                        <benefit.icon className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Consultation Details</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {consultationDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                        <detail.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <p className="font-semibold">{detail.label}</p>
                            <p className="text-sm text-muted-foreground">{detail.value}</p>
                        </div>
                    </div>
                ))}
              </CardContent>
            </Card>
             <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-semibold text-green-800">No obligation, no pressure - just expert advice!</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline">Select a Date & Time</CardTitle>
                </CardHeader>
              <CardContent>
                <div 
                  className="min-h-[600px] bg-muted rounded-lg flex items-center justify-center text-center"
                  aria-label="Calendly scheduling widget placeholder"
                >
                    <div className="p-8">
                        <p className="font-semibold text-muted-foreground">Scheduling tool loading...</p>
                        <p className="text-sm text-muted-foreground mt-2">
                            This is a placeholder for a tool like Calendly. In a real application, an interactive calendar would be embedded here.
                        </p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
