import { Connection, PublicKey } from '@solana/web3.js';
import { mintToCollectionV1 } from '@metaplex-foundation/mpl-bubblegum';
import { generateSigner, Umi } from '@metaplex-foundation/umi';

async function deploy() {
  const umi = Umi.build();
  const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

  const leafOwner = generateSigner(umi);
  const merkleTree = new PublicKey('YOUR_MERKLE_TREE_PUBLIC_KEY');
  const collectionMint = new PublicKey('YOUR_COLLECTION_MINT_PUBLIC_KEY');
  
  const metadata = {
    name: 'My Compressed NFT',
    uri: 'https://example.com/my-cnft.json',
    sellerFeeBasisPoints: 500,
    collection: { key: collectionMint, verified: false },
    creators: [{ address: umi.identity.publicKey, verified: false, share: 100 }],
  };

  await mintToCollectionV1(umi, {
    leafOwner,
    merkleTree,
    collectionMint,
    metadata,
  }).sendAndConfirm(umi);

  console.log('NFT minted successfully');
}

deploy().catch(console.error);
