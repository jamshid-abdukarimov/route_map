import { getRoutePolyline } from "../http-services/osrmService";
import { setPolyline, setError, setLoading } from "../store/slices/routeSlice";

export default function (selectedRouteIndex) {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const { routes } = getState();
      console.log(routes);
      const selectedRoute = routes[selectedRouteIndex];

      const polyline = await getRoutePolyline(selectedRoute);

      dispatch(setPolyline(polyline));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError("Ошибка при получении полилинии маршрута"));
      dispatch(setLoading(false));
    }
  };
}
