import { compare, digest } from "./";

test("digest not raw default", () => {
  expect(digest(Buffer.from("test string"))).toBe(
    "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010"
  );
});

test("digest raw", () => {
  expect(digest(Buffer.from("test string"), true)).toEqual(
   [
      66, 200,  44,  24, 64, 128, 8, 32,  64,
       0,  16,   4,   0,  0,   0, 8, 78,  16,
      67, 176, 192, 146, 88,  41, 0, 62, 132,
     200,  96,  65,   0, 16
   ]
  );
});

test("digest explicit not raw", () => {
  expect(digest(Buffer.from("test string"), false)).toBe(
    "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010"
  );
});

test("digest string", () => {
  expect(digest("test string")).toBe(
    "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010"
  );
});

test("compare equal", () => {
  const a = digest(Buffer.from("some string"));
  expect(compare(a, a)).toBe(128);
});

test("compare similar (hex)", () => {
  // test string
  const a = "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010";
  // best strong
  const b = "00480cba20810802408000000400000a481091b088b21e21003e840a20011016";
  expect(compare(a, b)).toBe(90);
});

test("compare dissimilar (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  expect(compare(a, b)).toBe(-128);
});

test("compare zero with zero (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "0000000000000000000000000000000000000000000000000000000000000000";
  expect(compare(a, b)).toBe(128);
});

test("compare zero with non-zero (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "6402a0021082c8320943c018f2003023ad0820205844ba30813d00dc0620d18c";
  expect(compare(a, b)).toBe(51);
});

test("short 1 (hex)", () => {
  expect(digest(Buffer.from("a"))).toBe(
    "0000000000000000000000000000000000000000000000000000000000000000"
  );
});

test("short 2 (hex)", () => {
  expect(digest(Buffer.from("aa"))).toBe(
    "0000000000000000000000000000000000000000000000000000000000000000"
  );
});

test("short 3 (hex)", () => {
  expect(digest(Buffer.from("aaa"))).toBe(
    "0000000000000000000000000000000040000000000000000000000000000000"
  );
});

test("compare byte with hex", () => {
  const a = digest ("test string", true);
  const b = digest("test string");
  expect(compare(a, b)).toBe(128)
});

test("compare hex with byte", () => {
  const a = digest ("test string", true);
  const b = digest("test string");
  expect(compare(b, a)).toBe(128)
});