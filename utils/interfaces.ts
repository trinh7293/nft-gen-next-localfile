export interface ConfigItem {
  source: File;
  bit: number;
}

export interface ConfigLayer {
  folder: string;
  items: ConfigItem[];
}

export interface AmountInfo {
  [key: number]: number;
}

export interface ChangeInfo {
  [key: number]: number;
}

export interface JSONAttribute {
  trait_type: string;
  value: string;
}

export interface JSONMapping {
  [key: number]: JSONAttribute;
}

export interface JSONOutputType {
  name: string;
  description: string;
  attributes: JSONAttribute[];
}
