import { setError, setPolyline, setLoading } from "../store/slices/routeSlice";

const fetchPolylineSaga = function* (action) {
  try {
    yield put(setLoading(true)); // Устанавливаем флаг загрузки

    // Получаем выбранный маршрут из состояния
    const { routes } = yield select((state) => state.route);
    const selectedRoute = routes[action.payload];

    // Вызываем HTTP-сервис для получения полилинии
    const polyline = yield call(getRoutePolyline, selectedRoute);

    // Устанавливаем полученную полилинию в состояние
    yield put(setPolyline(polyline));
    yield put(setLoading(false)); // Снимаем флаг загрузки
  } catch (error) {
    yield put(setError("Ошибка при получении полилинии маршрута"));
    yield put(setLoading(false)); // Снимаем флаг загрузки в случае ошибки
  }
};

export const routeSagaWatcher = function* () {
  yield takeLatest("route/selectRoute", fetchPolylineSaga);
};
