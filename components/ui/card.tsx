export function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-brand-gray">
      {title && <h3 className="text-xl font-nunito font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
