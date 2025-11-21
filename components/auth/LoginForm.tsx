"use client";
//LoginForm

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleBtn from "./GoogleBtn";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUser, LoginUserSchema } from "@/models/zod/auth";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
import { toast } from "sonner";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/input";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<LoginUser>({ resolver: zodResolver(LoginUserSchema) });
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res.error) {
      if (res.error === "CredentialsSignin") {
        setError("root", { message: "Credenciales inválidas" });
      } else {
        setError("root", { message: "Error desconocido" });
      }
    } else {
          toast.success("Bienvenida 😄");
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-sm flex flex-col gap-4  p-6">
      <div className="flex flex-col gap-1">
        <input className="border" type="text" placeholder="Nombre de usuario" {...register("name")} />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>
      <FormField label="Email" error={errors.email}>
       <Input placeholder="Email" {...register("email")} />
      </FormField>
      <div className="flex flex-col gap-1">
        <input className="border" type="text" placeholder="Email" {...register("email")} />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col relative">
            <input
              className="border"
              type={passwordVisibility ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password")}
            />
            <button
              className="absolute right-2 top-0 bottom-0"
              type="button"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {passwordVisibility ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
        </div>
        <span>
          <Link href="/login">Olvidaste tu contraseña?</Link>
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-1">
          <button disabled={isSubmitting} className="border-2">
            {isSubmitting ? "Cargando..." : "Continuar"}
          </button>
          {errors.root && <span className="text-sm text-red-500">{errors.root.message}</span>}
        </div>
      </div>
      <hr className="border" />
      <GoogleBtn />
    </form>
  );
}
