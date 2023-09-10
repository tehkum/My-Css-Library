import Navigation from "../aside/Navigation";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <main className="App">
      <Navigation />
      <article>{children}</article>
    </main>
  );
}
