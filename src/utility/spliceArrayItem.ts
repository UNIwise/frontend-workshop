export const spliceArrayItem = <T extends { id: string; }>(items: T[], id: string) => {
  const copy = [...items];
  const itemIndex = copy.findIndex((item) => item.id === id);
  copy.splice(itemIndex, 1);
  return copy;
};
