import { Link } from "react-router-dom";
function NotFound() {
  return (
    <h1 style={{ height: "100vh" }}>
      Go to <Link to="/">Home Page</Link>{" "}
    </h1>
  );
}

export default NotFound;
