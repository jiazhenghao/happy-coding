function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return {
    bar: "hello",
  };
}
console.log(foo1() == foo2());
console.log(foo1() === foo2());
