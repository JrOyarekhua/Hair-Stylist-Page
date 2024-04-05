import "./about.css";
function About() {
  return (
    <section className="about container">
      <div className="about-header">
        <p>Stylist</p>
        <h2>Experience the art of beautiful hair</h2>
      </div>
      <div className="about-content">
        <p>
          "Welcome! I'm Kaylee, a seasoned hairstylist with a passion for
          crafting beautiful and confident looks. With years of experience in
          the industry, I've dedicated myself to mastering the art of
          hairstyling. Through countless hours of practice and dedication, I've
          curated an extensive portfolio of stunning hairstyles that showcase my
          expertise and creativity.
        </p>
        <p>
          My journey in the world of hair has been fueled by a deep love for the
          craft, and this passion shines through in every client interaction.
          When you sit in my chair, you're not just receiving a haircut or
          styling session—you're experiencing personalized care and attention
          tailored to your unique needs and preferences.
        </p>
        <p>
          My goal is to not only leave you looking and feeling your best but
          also to ensure that you feel pampered and well taken care of
          throughout the entire styling process. Whether you're looking for a
          bold new look, a subtle change, or simply some expert advice, I'm here
          to make your hairstyling experience unforgettable.
        </p>
        <p>
          {" "}
          Thank you for considering me as your hairstylist. I look forward to
          the opportunity to work with you and help bring your hair dreams to
          life!"
        </p>
      </div>
    </section>
  );
}

export default About;
