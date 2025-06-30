export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex flex-wrap md:flex-nowrap w-full h-full overflow-hidden pr-48">
    <div>{children}</div>
  );
}
