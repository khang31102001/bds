import { Footer, Header, ScrollToTop } from "../components";

// Main layout with header and footer
export const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <>
      <Header />
      <main className="main bg-white flex flex-col gap-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );