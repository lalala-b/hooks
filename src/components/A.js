import { useContext } from "react";
import { GlobalContext } from "../contexts/global";

const A = () => {
  const { count } = useContext(GlobalContext);

  return <div>我是A {count}</div>;
};

export default A;
