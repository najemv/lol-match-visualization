
type Fruit = "Apple" | "Banana";

type Fruits = {
  fruits: Fruit;
}




export const testFn = () => {
  const f: Fruit = "Apple";
  const a = "Apple";

const b = {
  fruits: "Apple"
};
const c = {
  kek: "wtf"
}

const x: Fruit = a;

const y: any = b;
const z: any = c;
  console.log((y as Fruits).fruits);
  console.log((z as Fruits).fruits);
};