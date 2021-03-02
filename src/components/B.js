import { useContext } from "react";
import { GlobalContext } from "../contexts/global";
import changeCount from "../utils/changeCount";

const B = () => {
  const { count, setCount, onChangeCount } = useContext(GlobalContext);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleChange = () => {
    onChangeCount();
  };

  const handleOutChange = () => {
    changeCount();
  };

  return (
    <div>
      我是B
      <br />
      <button onClick={handleAdd}>+1</button>
      <br />
      <button onClick={handleSub}>-1</button>
      <br />
      <button onClick={handleChange}>模拟请求修改</button>
      <br />
      <button onClick={handleOutChange}>通过方法修改</button>
    </div>
  );
};

export default B;
