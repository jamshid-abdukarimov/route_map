import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRoute } from "../store/slices/routeSlice";

import "./route.scss";
import fetchPolyline from "../utils/fetchPolyline";

const RouteTable = () => {
  const routes = useSelector((state) => state.routes);
  const selectedRoute = useSelector((state) => state.selectedRoute);
  const dispatch = useDispatch();

  const handleRouteSelect = (index) => {
    dispatch(selectRoute(index));

    dispatch(fetchPolyline(index));
  };

  return (
    <div className="route-table">
      <h2>Список маршрутов</h2>
      <table>
        <thead>
          <tr>
            <th>Маршрут №</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr
              key={index}
              className={selectedRoute === index ? "selected" : ""}
              onClick={() => handleRouteSelect(index)}
            >
              <td>Маршрут №{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteTable;
