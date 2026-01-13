'use server';
/**
 * @fileOverview An AI-powered compliance guidance tool.
 *
 * - complianceGuidance - A function that offers preliminary compliance guidance based on user input.
 * - ComplianceGuidanceInput - The input type for the complianceGuidance function.
 * - ComplianceGuidanceOutput - The return type for the complianceGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ComplianceGuidanceInputSchema = z.object({
  businessType: z.string().describe('The type of business (e.g., LLC, corporation).'),
  industry: z.string().describe('The industry the business operates in (e.g., e-commerce, healthcare).'),
  location: z.string().describe('The location of the business (e.g., USA, UK, Canada).'),
  businessActivities: z.string().describe('A description of the business activities.'),
});
export type ComplianceGuidanceInput = z.infer<typeof ComplianceGuidanceInputSchema>;

const ComplianceGuidanceOutputSchema = z.object({
  guidance: z.string().describe('Preliminary compliance guidance for the business.'),
});
export type ComplianceGuidanceOutput = z.infer<typeof ComplianceGuidanceOutputSchema>;

export async function complianceGuidance(input: ComplianceGuidanceInput): Promise<ComplianceGuidanceOutput> {
  return complianceGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'complianceGuidancePrompt',
  input: {schema: ComplianceGuidanceInputSchema},
  output: {schema: ComplianceGuidanceOutputSchema},
  prompt: `You are an AI-powered compliance assistant. Provide preliminary guidance for ensuring business compliance based on the following information:

Business Type: {{{businessType}}}
Industry: {{{industry}}}
Location: {{{location}}}
Business Activities: {{{businessActivities}}}

Provide a summary of the potential compliance requirements. This guidance is preliminary and should not be considered legal advice.  The user should consult with qualified legal professionals.
`,
});

const complianceGuidanceFlow = ai.defineFlow(
  {
    name: 'complianceGuidanceFlow',
    inputSchema: ComplianceGuidanceInputSchema,
    outputSchema: ComplianceGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
