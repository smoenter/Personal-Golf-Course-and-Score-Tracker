import { useState, useEffect } from "react";

interface GolfCourse {
  id: number;
  name: string;
  address: string;
  architect: string;
}

interface City {
  id: number;
  name: string;
  courses: GolfCourse[];
}

const GolfCoursesPage: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cities");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: City[] = await response.json();
        setCities(data);
      } catch (error) {
        setError("Error fetching data: ");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Cities and Golf Courses</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id} onClick={() => setSelectedCity(city)}>
            {city.name}
          </li>
        ))}
      </ul>
      {selectedCity && <div>Selected City: {selectedCity.name}</div>}
    </div>
  );
};

export default GolfCoursesPage;