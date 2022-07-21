import { useState, createContext } from "react";

let Store = createContext({
  chat: false,
  explore: false,
  notify: false,
});

export let StoreLayout = (props) => {
  let [changeIC, setChangeIc] = useState({
    chat: false,
    explore: false,
    notify: false,
  });

  let states = { changeIC, setChangeIc };

  return <Store.Provider value={states}>{props.children}</Store.Provider>;
};

export default Store;
