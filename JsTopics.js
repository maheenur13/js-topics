const arr = [
  {
    ok: ["ok", "2"],
    ok1: 2,
  },
  [
    [
      {
        ok: ["ok", "2"],
        ok1: 2,
      },
    ],
  ],
];

console.log(arr.flat(Infinity));
