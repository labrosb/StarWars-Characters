const formatDate = (d: Date) => (
  `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
);

export { formatDate };
