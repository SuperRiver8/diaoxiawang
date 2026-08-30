"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/components/app-link";
import { useCustomerDemoStore } from "@/stores/customer-demo-store";

const schema = z.object({
  email: z.email("請輸入有效電郵"),
  password: z.string().min(1, "請輸入密碼"),
});

export function CustomerLogin() {
  const login = useCustomerDemoStore((state) => state.login);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const finish = ({ email }: z.infer<typeof schema>) => {
    login(email);
    navigate("/member");
  };
  const fillDemo = () =>
    form.reset({ email: "member@demo.hk", password: "demo1234" });
  return (
    <div className="w-full rounded-[1.75rem] border border-[#2b1b46]/10 bg-white p-5 shadow-[0_24px_70px_rgba(48,28,76,.13)] sm:p-7">
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(finish)}
        noValidate
      >
        <div className="space-y-2">
          <Label htmlFor="member-email">電郵地址</Label>
          <div className="relative">
            <Mail className="absolute top-3.5 left-3 size-4 text-[#8b8099]" />
            <Input
              id="member-email"
              placeholder="例如：member@demo.hk"
              className="h-12 rounded-xl pl-10"
              autoComplete="email"
              {...form.register("email")}
            />
          </div>
          {form.formState.errors.email && (
            <p className="text-xs text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="member-password">密碼</Label>
          <Input
            id="member-password"
            type="password"
            placeholder="輸入會員密碼"
            className="h-12 rounded-xl"
            autoComplete="current-password"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-xs text-red-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={fillDemo}
          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#6d3df5]/35 bg-[#f5f1ff] text-sm font-bold text-[#6d3df5]"
        >
          <Sparkles className="size-4" /> 一鍵填入演示帳號
        </button>
        <Button className="h-12 w-full rounded-xl bg-[#6d3df5] text-base text-white hover:bg-[#5930d3]">
          登入會員中心 <ArrowRight />
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-[#776d82]">
        未有帳戶？{" "}
        <Link href="/register" className="font-bold text-[#6d3df5]">
          立即電郵註冊
        </Link>
      </p>
      <p className="mt-3 text-center text-xs leading-5 text-[#978da1]">
        純前端演示，不會傳送或保存真實個人資料。
      </p>
    </div>
  );
}
