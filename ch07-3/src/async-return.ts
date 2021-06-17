const asyncReturn = async () => {
  return [1, 2, 3];
};

asyncReturn().then((value) => console.log(value));
