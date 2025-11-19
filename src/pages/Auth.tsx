import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ApiError, loginUser, registerUser } from "@/services/api";
import type { RegisterPayload, LoginPayload } from "@/services/api";
import { saveToken } from "@/lib/auth";

const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Nome precisa ter ao menos 3 caracteres")
    .max(80, "Nome muito longo"),
  email: z.string().email("Informe um e-mail válido"),
  phone: z
    .string()
    .min(10, "Informe um telefone válido")
    .max(16, "Telefone inválido")
    .regex(/^[0-9()+\s-]+$/, "Use apenas números e símbolos + ( ) -"),
  password: z
    .string()
    .min(8, "A senha deve ter ao menos 8 caracteres")
    .regex(/[A-Z]/, "Inclua ao menos uma letra maiúscula")
    .regex(/[a-z]/, "Inclua ao menos uma letra minúscula")
    .regex(/[0-9]/, "Inclua ao menos um número")
    .regex(/[^A-Za-z0-9]/, "Inclua um caractere especial"),
});

const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(1, "Informe sua senha"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;
type LoginFormValues = z.infer<typeof loginSchema>;

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("mode") === "login" ? "login" : "register";
  const [currentTab, setCurrentTab] = useState<"register" | "login">(initialTab as "register" | "login");

  const { toast } = useToast();
  const navigate = useNavigate();

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterPayload) => registerUser(payload),
    onSuccess: (data) => {
      toast({
        title: "Cadastro realizado!",
        description: `Bem-vindo(a), ${data.username}. Você já pode acessar sua conta.`,
      });
      registerForm.reset();
      setCurrentTab("login");
      navigate("/auth?mode=login", { replace: true });
    },
    onError: (error) => {
      const message = error instanceof ApiError ? error.message : "Não foi possível concluir o cadastro.";
      toast({
        title: "Erro ao cadastrar",
        description: message,
        variant: "destructive",
      });
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (payload: LoginPayload) => loginUser(payload),
    onSuccess: (data) => {
      saveToken(data.access_token);
      toast({
        title: "Login realizado com sucesso",
        description: "Token salvo com segurança. Você já pode usar o dashboard.",
      });
      loginForm.reset();
      navigate("/");
    },
    onError: (error) => {
      const message = error instanceof ApiError ? error.message : "Não foi possível realizar o login.";
      toast({
        title: "Erro ao entrar",
        description: message,
        variant: "destructive",
      });
    },
  });

  const benefits = useMemo(
    () => [
      "Automação inteligente pelo WhatsApp",
      "Alertas financeiros em tempo real",
      "Gestão de metas com IA",
      "Planos flexíveis e sem burocracia",
    ],
    [],
  );

  return (
    <section className="min-h-screen bg-zank-gray px-4 py-8 max-md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-white/80 p-10 shadow-[0_40px_120px_rgba(32,71,73,0.15)] backdrop-blur max-xl:p-8 max-lg:p-6">
        <div className="flex flex-col gap-2">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.4em] text-zank-dark/70 hover:text-zank-dark transition-colors">
            ← Voltar para Zank
          </Link>
          <h1 className="text-5xl font-bold text-zank-dark max-lg:text-4xl max-md:text-3xl">Acesse a sua conta Zank</h1>
          <p className="text-lg text-zank-dark/80 max-md:text-base">
            Controle suas finanças com a mesma experiência fluida em qualquer dispositivo. Cadastre-se ou faça login para continuar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] bg-zank-dark px-8 py-10 text-white max-lg:order-2 max-lg:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Por que Zank?</p>
            <h2 className="mt-4 text-4xl font-bold text-zank-light">Seu assistente financeiro inteligente</h2>
            <p className="mt-4 text-lg text-white/80">
              Use o WhatsApp para organizar boletos, metas e lembretes. Mais tempo para o que importa, menos planilhas.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base text-white/90">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-zank-light/20 text-sm text-zank-light">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-bold text-zank-light">+50k</p>
                <p className="text-sm text-white/70">alertas enviados</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-bold text-zank-light">4.9/5</p>
                <p className="text-sm text-white/70">satisfação média</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-zank-dark/10 bg-white p-8 shadow-xl max-lg:order-1 max-lg:p-6">
            <Tabs value={currentTab} onValueChange={(value) => setCurrentTab(value as "register" | "login")}>
              <TabsList className="grid h-14 w-full grid-cols-2 rounded-[999px] bg-zank-gray/60 p-1 text-base text-zank-dark">
                <TabsTrigger
                  value="register"
                  className="rounded-[999px] text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-zank-dark"
                >
                  Cadastre-se
                </TabsTrigger>
                <TabsTrigger
                  value="login"
                  className="rounded-[999px] text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-zank-dark"
                >
                  Entrar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="register" className="mt-8">
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit((values) => registerMutation.mutate(values))} className="space-y-6">
                    <FormField
                      control={registerForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="voce@exemplo.com"
                              className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(11) 99999-9999"
                              className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Crie uma senha forte"
                              className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={registerMutation.isPending}
                      className="group flex h-12 w-full items-center justify-center rounded-[25px] bg-zank-light text-lg font-semibold text-zank-dark transition-all duration-300 hover:bg-zank-dark hover:text-zank-light"
                    >
                      {registerMutation.isPending ? "Enviando..." : "Criar conta"}
                      <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-zank-dark text-zank-light group-hover:bg-zank-light group-hover:text-zank-dark transition-all">
                        →
                      </span>
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="login" className="mt-8">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit((values) => loginMutation.mutate(values))} className="space-y-6">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu-email@zank.com"
                              className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Digite sua senha"
                              className="h-12 rounded-2xl border-zank-dark/20 bg-zank-gray/40 text-zank-dark"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={loginMutation.isPending}
                      className="group flex h-12 w-full items-center justify-center rounded-[25px] bg-zank-light text-lg font-semibold text-zank-dark transition-all duration-300 hover:bg-zank-dark hover:text-zank-light"
                    >
                      {loginMutation.isPending ? "Entrando..." : "Entrar agora"}
                      <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-zank-dark text-zank-light group-hover:bg-zank-light group-hover:text-zank-dark transition-all">
                        →
                      </span>
                    </Button>
                  </form>
                </Form>

                <p className="mt-6 text-center text-sm text-zank-dark/70">
                  Esqueceu a senha?{" "}
                  <a href="mailto:suporte@zank.com" className="font-semibold text-zank-dark underline-offset-4 hover:underline">
                    Fale com o suporte
                  </a>
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;


