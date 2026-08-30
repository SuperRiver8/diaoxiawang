"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LockKeyhole, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAdminStore } from "@/stores/admin-store";

const schema = z.object({
  email: z.email("請輸入有效電郵"),
  password: z.string().min(1, "請輸入密碼"),
});
export function AdminLogin() {
  const login = useAdminStore((state) => state.login);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const fill = () =>
    form.reset({ email: "admin@demo.hk", password: "admin1234" });
  const finish = () => {
    login();
    navigate("/dashboard");
  };
  return (
    <form
      onSubmit={form.handleSubmit(finish)}
      className="mt-7 space-y-4"
      noValidate
    >
      <div>
        <label className="admin-label" htmlFor="admin-email">
          管理員電郵
        </label>
        <div className="relative">
          <Mail className="absolute top-3.5 left-3 size-4 text-[#8a8093]" />
          <input
            id="admin-email"
            placeholder="例如：admin@demo.hk"
            className="admin-input admin-input-with-icon"
            {...form.register("email")}
          />
        </div>
        {form.formState.errors.email && (
          <p className="mt-1 text-xs text-red-600">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label className="admin-label" htmlFor="admin-password">
          密碼
        </label>
        <div className="relative">
          <LockKeyhole className="absolute top-3.5 left-3 size-4 text-[#8a8093]" />
          <input
            id="admin-password"
            type="password"
            placeholder="輸入管理員密碼"
            className="admin-input admin-input-with-icon"
            {...form.register("password")}
          />
        </div>
        {form.formState.errors.password && (
          <p className="mt-1 text-xs text-red-600">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={fill}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#6d3df5]/35 bg-[#f5f1ff] text-sm font-bold text-[#6d3df5]"
      >
        <Sparkles className="size-4" />
        填入演示帳號
      </button>
      <button className="admin-button w-full">
        登入管理中心 <ArrowRight className="size-4" />
      </button>
      <p className="text-center text-xs leading-5 text-[#91879a]">
        純前端演示系統，不會連接真實會員或發送電郵。
      </p>
    </form>
  );
}
