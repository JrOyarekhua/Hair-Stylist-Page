import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/main/Main";
function PortfolioPage() {
  return (
    <>
      <div className="hero-background">
        <Header />
        <Hero />
      </div>
      <Main />
    </>
  );
}
export default PortfolioPage;
