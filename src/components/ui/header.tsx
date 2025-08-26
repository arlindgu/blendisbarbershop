







export default function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  );
}
