//components/ui/Card.tsx
interface CardProps {
  title?: React.ReactNode; // Opcional
  bg?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-brand-gray">
      {title && <h3 className="text-xl font-nunito font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
