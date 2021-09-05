A TypeScript implementation of the nilsimsa locality sensitive hash function as described by Damiani, Ernesto, et al. in "An Open Digest-based Technique for Spam Detection." ISCA PDCS 2004 (2004): 559-564. A small modification to the input does not substantially change the resulting hash.

```ts
const digestA = hexDigest(Buffer.from("test string"));
const digestB = hexDigest(Buffer.from("test strong"));
const difference = compareHexDigests(a, b);
```