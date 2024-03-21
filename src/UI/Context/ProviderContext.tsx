import { IProps, IModalActive } from "./ContextInterface";
import { FC, useState, createContext } from "react";

export const ProviderContext = createContext({} as IModalActive);

export const ProviderContextWrapper: FC<IProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);
  const chengeActive = () => {
    console.log(active);
    setActive(!active);
    console.log(active);
  };
  const providerValue = {
    active,
    chengeActive,
  };
  return (
    <ProviderContext.Provider value={providerValue}>
      {children}
    </ProviderContext.Provider>
  );
};
