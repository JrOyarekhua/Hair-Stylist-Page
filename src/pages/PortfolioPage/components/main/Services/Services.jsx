import "./services.css";
import ServiceCard from "./ServiceCard";
import childerenStyles from "/home/gabrieljr04/projects/Hair-Stylist-Page/src/images/Services1.JPG";
import locStyles from "/home/gabrieljr04/projects/Hair-Stylist-Page/src/images/Services2.JPG";
import braidsStyles from "/home/gabrieljr04/projects/Hair-Stylist-Page/src/images/Services3.JPG";
function Services() {
  return (
    <section className="services container">
      <div className="services-header">
        <p>Stunning</p>
        <h2 className="services-title">Get the Perfect Look</h2>
        <p>Achieve your dream hairstyle with my prefessional services</p>
      </div>

      <div className="services-content">
        <ServiceCard
          image={childerenStyles}
          title="Childeren Styles"
          description="Expertly crafted children's hairstyles to enhance their natural charm."
          price="80"
        />
        <ServiceCard
          image={locStyles}
          title="Locs"
          description="Authentic, stylish locs that embrace your unique personality."
          price="80"
        />
        <ServiceCard
          image={braidsStyles}
          title="Braids"
          description="Elegant and intricate braids showcasing a variety of styles. Perfect for adding flair to any occasion."
          price="80"
        />
      </div>
    </section>
  );
}

export default Services;
