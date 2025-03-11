import { useState, useEffect } from "react";
import "../styles/Courses.css";

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
  const [golfCourses, setGolfCourses] = useState<GolfCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/cities");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: City[] = await response.json();
        setCities(data);
      } catch (error) {
        setError("Error fetching data: " + (error instanceof Error ? error.message : "Unknown error"));
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const fetchGolfCourses = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/cities/${selectedCity.id}/golfcourses`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: GolfCourse[] = await response.json();
          setGolfCourses(data);
        } catch (error) {
          setError("Error fetching golf courses: " + (error instanceof Error ? error.message : "Unknown error"));
        } finally {
          setLoading(false);
        }
      };
      fetchGolfCourses();
    }
  }, [selectedCity]);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="Courses">
      <h1>Featured Courses!</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id} onClick={() => handleCityClick(city)}>
            {city.name}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <div className="PostClick">
          <h2>Golf Courses in {selectedCity.name}</h2>
          <ul>
            {golfCourses.length > 0 ? (
              golfCourses.map((course) => (
                <li key={course.id}>
                  <h3>{course.name}</h3>
                  <p>{course.address}</p>
                </li>
              ))
            ) : (
              <li>No golf courses available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GolfCoursesPage;