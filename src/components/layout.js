import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}