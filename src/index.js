export const main = () => {
  const myObject = {
    property: "yes",
  };
  console.log(`I have babel. ${myObject?.property}`);
};

main();
