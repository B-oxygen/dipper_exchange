import { atom } from "recoil";

export interface Idata {
  indexDate: string;
  routeName: string;
  routeSort: string;
  writtenDate: string;
  routeDescription: string;
}
let currData: Idata[] = [];
const dataTest = localStorage.getItem("storedItem");
if (dataTest !== null) {
  currData = JSON.parse(dataTest);
}
export const storageData = atom<Idata[]>({
  key: "storageData",
  default: currData,
});

export const selectedRouteNameAtom = atom({
  key: "selectedRouteName",
  default: "전체",
});
export const selectedRouteSortAtom = atom({
  key: "selectedRouteSort",
  default: "전체",
});
export const selectedWrittenDateAtom = atom({
  key: "selectedWrittenDate",
  default: "최신순",
});

export const toEditData = atom<Idata>({
  key: "toEditData",
  default: {
    routeName: "",
    routeSort: "",
    routeDescription: "",
    indexDate: "",
    writtenDate: "",
  },
});
