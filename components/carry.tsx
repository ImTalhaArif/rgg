// data.ts
export interface SharedData {
  value: string;
}

let sharedData: SharedData = {
  value: 'null',
};

export const updateSharedData = (newValue: string) => {
  sharedData.value = newValue;
};

export default sharedData;
