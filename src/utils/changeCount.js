import { eventBus } from "../contexts/global";

const changeCount = () => {
  eventBus.emit("setCount", 222);
};

export default changeCount;
