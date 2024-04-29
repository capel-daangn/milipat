import Header from "@/components/layout/header";
import HeaderWorkspace from "@/components/layout/header-workspace";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
