import axios from "axios";

const OSRM_API_BASE_URL = "https://router.project-osrm.org/route/v1/driving";

export const getRoutePolyline = async (points) => {
  try {
    points = [...points.map((point) => [point[1], point[0]])];
    const coordinates = points.map((point) => {
      return point.join(",");
    });
    const url = `${OSRM_API_BASE_URL}/${coordinates.join(";")}?overview=full`;
    const response = await axios.get(url);
    return response.data.routes[0].geometry;
  } catch (error) {
    console.error("Ошибка при получении полилинии маршрута:", error);
    throw error;
  }
};
