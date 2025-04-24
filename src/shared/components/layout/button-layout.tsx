type ButtonLayoutProps = {
  multi: "multi" | "";
  children: React.ReactNode;
};
export function ButtonLayout({ multi, children }: ButtonLayoutProps) {
  return <div className={`flex p-2 w-full ${multi ? "" : ""}`}>{children}</div>;
}
