import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
interface IModalActive {
  active: boolean;
  chengeActive(): void
}
export type{IProps, IModalActive}
