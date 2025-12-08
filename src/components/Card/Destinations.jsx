import turkey from "./../../assets/images/turkey.jpg";
import dubai from "./../../assets/images/dubai.jpg";
import paris from "./../../assets/images/paris.jpg";
import damascus from "./../../assets/images/damascus.jpg";
import bali from "./../../assets/images/bali.jpg";
import UnitedStates from "./../../assets/images/UnitedStates.jpg";

const destinations = [
  { name: "Istanbul", img: turkey, price: "$350" },
  { name: "Dubai", img: dubai, price: "$500" },
  { name: "Paris", img: paris, price: "$750" },
  { name: "Damascus", img: damascus, price: "$550" },
  { name: "Bali", img: bali, price: "$150" },
  { name: "United States", img: UnitedStates, price: "$800" },
];

const Destinations = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold font-caveat text-center text-primary mb-6">
        Discover Amazing Destinations
      </h2>

      <div className="grid gap-6 mob:grid-cols-1 grid-cols-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-white"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
              <p className="text-primary font-bold">{dest.price}</p>
              <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg w-full hover:opacity-90">
                View Offers
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
