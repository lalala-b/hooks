import { useState, createContext } from "react";

export const GlobalContext = createContext({});

export const eventBus = {
  eventList: [],
  on: function (key, fn) {
    if (!eventBus.key) {
      this.eventList[key] = [];
    }
    this.eventList[key].push(fn);
  },
  emit: function (key, data) {
    (this.eventList[key] || []).forEach((fn) => {
      fn(data);
    });
  },
};

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  eventBus.on("setCount", setCount);

  const onChangeCount = () => {
    // 模拟请求，两秒后修改值
    setTimeout(() => {
      setCount("请求后修改");
    }, 2000);
  };

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        onChangeCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
