import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="text-xl font-bold tracking-tight text-foreground">
          METAL
        </span>
        <span className="text-xl font-bold tracking-tight text-primary">
          POWDER
        </span>
        <span className="text-xl font-bold tracking-tight text-foreground">
          SUPPLY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
