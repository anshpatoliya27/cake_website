import "../styles/explore.css";

const categories = [
  { name: "Strawberry Cakes", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3" },
  { name: "Chocolate Cakes", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
  { name: "Theme Cakes", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729" },
  { name: "Photo Cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
  { name: "Gourmet Cakes", img: "https://images.unsplash.com/photo-1559620192-032c4bc4674e" },
  { name: "Cheesecakes", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e" },
];

export default function ExploreSection() {
  return (
    <section className="explore-wrapper">
      
      <h2 className="explore-title">Explore More</h2>

      <div className="explore-scroll">

        {categories.map((item, i) => (
          <div key={i} className="explore-card">
            
            <div className="explore-img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>

            <p>{item.name}</p>
          </div>
        ))}

      </div>
    </section>
  );
}