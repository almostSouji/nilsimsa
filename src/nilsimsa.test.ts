import { compareDigests, digest, hexDigest, compareHexDigests } from "./";

test("hex digest", () => {
  expect(hexDigest(Buffer.from("test string"))).toBe(
    "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010"
  );
});

test("compare equal", () => {
  const a = digest(Buffer.from("some string"));
  expect(compareDigests(a, a)).toBe(128);
});

test("compare similar (hex)", () => {
  // test string
  const a = "42c82c184080082040001004000000084e1043b0c0925829003e84c860410010";
  // best strong
  const b = "00480cba20810802408000000400000a481091b088b21e21003e840a20011016";
  expect(compareHexDigests(a, b)).toBe(90);
});

test("compare dissimilar (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  expect(compareHexDigests(a, b)).toBe(-128);
});

test("compare zero with zero (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "0000000000000000000000000000000000000000000000000000000000000000";
  expect(compareHexDigests(a, b)).toBe(128);
});

test("compare zero with non-zero (hex)", () => {
  const a = "0000000000000000000000000000000000000000000000000000000000000000";
  const b = "6402a0021082c8320943c018f2003023ad0820205844ba30813d00dc0620d18c";
  expect(compareHexDigests(a, b)).toBe(51);
});

test("short 1 (hex)", () => {
  expect(hexDigest(Buffer.from("a"))).toBe(
    "0000000000000000000000000000000000000000000000000000000000000000"
  );
});

test("short 2 (hex)", () => {
  expect(hexDigest(Buffer.from("aa"))).toBe(
    "0000000000000000000000000000000000000000000000000000000000000000"
  );
});

test("short 3 (hex)", () => {
  expect(hexDigest(Buffer.from("aaa"))).toBe(
    "0000000000000000000000000000000040000000000000000000000000000000"
  );
});
