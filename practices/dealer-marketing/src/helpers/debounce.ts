const debounce = (func: Function, delay: number) => {
  const handle = setTimeout(() => {
    func();
  }, delay);

  return () => {
    clearTimeout(handle);
  };
};

export default debounce;
