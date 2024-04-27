import Header from "@/components/layout/header";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header></Header>
      {children}
    </section>
  );
}
