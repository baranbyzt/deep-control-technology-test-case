import { configureStore } from "@reduxjs/toolkit";
import Session from "./Session";

export default configureStore({
  reducer: {
    session: Session,
  },
});
