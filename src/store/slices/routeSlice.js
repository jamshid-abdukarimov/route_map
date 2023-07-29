import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
    [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
    [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ],
  ],
  selectedRoute: null,
  polyline: null,
  loading: false,
  error: null,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
    setPolyline: (state, action) => {
      state.polyline = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { selectRoute, setPolyline, setLoading, setError } =
  routeSlice.actions;
export default routeSlice.reducer;
