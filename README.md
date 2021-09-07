A Node.js TypeScript implementation of the nilsimsa locality sensitive hash function as described by Damiani, Ernesto, et al. in "An Open Digest-based Technique for Spam Detection." ISCA PDCS 2004 (2004): 559-564.

- A small modification to the input does not substantially change the resulting hash.
- Compare values range from `-128` (max difference) to `128` (max equality).

```ts
// Digest buffer as hexstring
const digestA = digest(Buffer.from("test string"));
const digestB = digest(Buffer.from("test strong"));
const difference = compare(a, b);
```

```ts
// Digest string as hexstring
const digestA = digest("test string");
const digestB = digest("test strong");
const difference = compare(a, b);
```

```ts
// Digest string as byte arrays
const digestA = digest("test string", true);
const digestB = digest("test strong", true);
const difference = compare(a, b);
```