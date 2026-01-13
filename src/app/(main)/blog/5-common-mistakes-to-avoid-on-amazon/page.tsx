
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPostPage() {
  const image = placeholderImages.find(p => p.id === 'blog-2');

  return (
    <div className="pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">5 Common Mistakes to Avoid When Starting on Amazon</h1>
            <p className="text-muted-foreground">Posted on November 28, 2024</p>
          </header>

          {image && (
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none mx-auto text-foreground">
            <p>Starting an Amazon FBA business is an exciting venture, but it's filled with potential pitfalls. By learning from the common mistakes of others, you can set yourself up for a much smoother launch and a faster path to profitability.</p>
            
            <h3>1. Inadequate Product Research</h3>
            <p>Many new sellers fall in love with a product idea without validating its market demand, competition, and profitability. Don't let this be you.</p>
            <ul>
              <li><strong>Solution:</strong> Use product research tools (like Jungle Scout or Helium 10), analyze sales data, check keyword search volume, and calculate your potential profit margins after all Amazon fees.</li>
            </ul>

            <h3>2. Ignoring Listing Optimization (SEO)</h3>
            <p>You can have the best product in the world, but if customers can't find it, you won't make any sales. A poorly optimized listing is a recipe for failure.</p>
            <ul>
              <li><strong>Solution:</strong> Invest time in keyword research. Craft a compelling, keyword-rich title, bullet points, and description. Use high-quality images and consider A+ Content once you have Brand Registry.</li>
            </ul>

            <h3>3. Neglecting PPC and Launch Strategy</h3>
            <p>Simply listing your product isn't enough. The "if you build it, they will come" mentality doesn't work on Amazon. You need a proactive launch strategy to gain initial sales velocity and ranking.</p>
            <ul>
              <li><strong>Solution:</strong> Plan to run Amazon PPC (Pay-Per-Click) campaigns from day one. Start with automatic campaigns to discover keywords, then move to manual campaigns for better control and ROI.</li>
            </ul>

            <h3>4. Setting Up Your Business Incorrectly</h3>
            <p>Operating as a sole proprietor without a proper legal structure like an LLC can put your personal assets at risk. Incorrectly setting up your Amazon account can also lead to suspensions.</p>
            <ul>
              <li><strong>Solution:</strong> Form an LLC to protect your personal assets. Ensure all your verification documents match your account details exactly. This is where a professional service can save you massive headaches.</li>
            </ul>
            
            <h3>5. Poor Inventory Management</h3>
            <p>Running out of stock is a sales killer. It not only means lost revenue but also a drop in your Best Seller Rank (BSR), which can be hard to recover. Conversely, over-ordering can lead to crippling storage fees.</p>
            <ul>
              <li><strong>Solution:</strong> Monitor your sales velocity closely and plan your reorders well in advance, accounting for manufacturing and shipping lead times. Use inventory management software as you scale.</li>
            </ul>

            <div className="bg-card border p-6 rounded-lg my-8 text-center">
              <h3 className="font-headline text-xl font-semibold mb-2">Need Help Launching Your Business?</h3>
              <p className="text-muted-foreground mb-4">Our expert team can guide you through every step, from company formation to your first sale.</p>
              <Button asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
