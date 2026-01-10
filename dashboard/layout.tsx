
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="dashboard-layout">
        {children}
        <h1>hello dashboard</h1>
    </div>
  );
}
