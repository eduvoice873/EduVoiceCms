import { FieldError } from "react-hook-form";
import { Input } from "./input";

interface FormFieldProps {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-brand-blue">{label}</label>
      {children}
      {error && (
        <span className="text-sm text-red-500">
          {error.message?.toString()}
        </span>
      )}
    </div>
  );
}
