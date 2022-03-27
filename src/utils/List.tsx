interface IList<T> {
  values: T[];
  component: (props: T) => JSX.Element;
  extractKey: (item: T) => string;
}

export const List = <T extends object>({ values, component: Component, extractKey }: IList<T>) => {
  return (
    <>
      {values.map((item) => (
        <Component {...item} key={extractKey(item)} />
      ))}
    </>
  );
};
