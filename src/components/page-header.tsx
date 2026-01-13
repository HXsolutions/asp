type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-4 py-8 md:py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">{title}</h1>
        {description && <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  );
}
