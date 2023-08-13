import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="flex gap-2">
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/email">
        <button>Email</button>
      </Link>
    </div>
  );
};

export default Contact;
