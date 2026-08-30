"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/components/app-link";
import { useCustomerDemoStore } from "@/stores/customer-demo-store";

const schema = z
  .object({
    name: z.string().min(2, "請輸入會員姓名"),
    email: z.email("請輸入有效電郵"),
    password: z.string().min(8, "密碼至少需要8個字元"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "兩次密碼不一致",
    path: ["confirm"],
  });

export function CustomerRegister() {
  const registerMember = useCustomerDemoStore((state) => state.register);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  });
  const finish = ({ name, email }: z.infer<typeof schema>) => {
    registerMember(name, email);
    navigate("/member");
  };
  return (
    <div className="member-form-card w-full p-5 sm:p-7">
      <div className="mb-5 flex items-center gap-3 border border-[#ff6b1a]/30 bg-[#ff6b1a]/10 p-4 text-sm text-[#ffd1b5]">
        <Gift className="size-5 shrink-0 text-[#ff7a1a]" />
        完成演示註冊，即送100會員積分。
      </div>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(finish)}
        noValidate
      >
        {[
          ["name", "會員姓名", "text", "例如：陳小蝦"],
          ["email", "電郵地址", "email", "例如：member@example.hk"],
          ["password", "密碼", "password", "至少 8 個字元"],
          ["confirm", "確認密碼", "password", "再次輸入相同密碼"],
        ].map(([key, label, type, placeholder]) => (
          <div className="space-y-2" key={key}>
            <Label htmlFor={`register-${key}`}>{label}</Label>
            <Input
              id={`register-${key}`}
              type={type}
              placeholder={placeholder}
              className="h-12 rounded-xl"
              {...form.register(
                key as "name" | "email" | "password" | "confirm",
              )}
            />
            {form.formState.errors[
              key as keyof typeof form.formState.errors
            ] && (
              <p className="text-xs text-red-600">
                {
                  form.formState.errors[
                    key as keyof typeof form.formState.errors
                  ]?.message
                }
              </p>
            )}
          </div>
        ))}
        <Button className="h-12 w-full bg-[#ff6b1a] text-base text-white hover:bg-[#e9580b]">
          建立會員帳戶 <ArrowRight />
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-[#776d82]">
        已有帳戶？{" "}
        <Link href="/login" className="font-bold text-[#ff8c4a]">
          返回登入
        </Link>
      </p>
    </div>
  );
}
