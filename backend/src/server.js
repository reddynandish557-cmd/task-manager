import connect from "../config/db.js";
import app from "./app.js";

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
