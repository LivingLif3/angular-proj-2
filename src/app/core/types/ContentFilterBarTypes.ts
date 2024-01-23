export interface IAccessory {
  title: string;
  subTitles: string[];
}

export interface ISelect {
  title: string;
  items: string[];
}

export interface ICheckbox {
  label: string;
  items: BrandElement[];
}

interface BrandElement {
  value: string;
  count: number;
}
