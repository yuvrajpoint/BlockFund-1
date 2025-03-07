// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/app/client";
// import { getAllPublishedContracts } from "thirdweb";

// export default function TestPage() {
//   const [contracts, setContracts] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchContracts() {
//       try {
//         const publishedContracts = await getAllPublishedContracts({
//           client: client,
//           publisher: "your_wallet_address", // Replace with your wallet address
//         });

//         setContracts(publishedContracts);
//         console.log("Published Contracts:", publishedContracts);
//       } catch (error) {
//         console.error("Error fetching contracts:", error);
//       }
//     }

//     fetchContracts();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Published Contracts</h1>
//       {contracts.length > 0 ? (
//         <ul className="mt-4">
//           {contracts.map((contract, index) => (
//             <li key={index} className="p-2 border rounded-md mb-2">
//               <p><strong>Name:</strong> {contract.metadata.name}</p>
//               <p><strong>Contract ID:</strong> {contract.id}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No contracts found.</p>
//       )}
//     </div>
//   );
// }

// import { client } from "@/app/client";
// import { getAllPublishedContracts } from "thirdweb/extensions/thirdweb";

// async function fetchPublishedContracts() {
//   const contracts = await getAllPublishedContracts({
//     client: client,
//     publisher: "your_wallet_address",
//   });

//   console.log(contracts);
// }

// fetchPublishedContracts();

// "use client";

// import { useEffect, useState } from "react";

// const client = new ThirdwebClient({
//   clientId: "your-client-id", // Replace with your Thirdweb Client ID
// });

// export default function MyContracts() {
//   const [contracts, setContracts] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchContracts() {
//       try {
//         const walletAddress = "your-wallet-address"; // Replace with your wallet address
//         const contractList = await getContractList(client, walletAddress);
//         setContracts(contractList);
//       } catch (error) {
//         console.error("Error fetching contracts:", error);
//       }
//     }

//     fetchContracts();
//   }, []);

//   return (
//     <div>
//       <h1>My Deployed Contracts</h1>
//       {contracts.length > 0 ? (
//         <ul>
//           {contracts.map((contract, index) => (
//             <li key={index}>
//               <p>Name: {contract.name}</p>
//               <p>Address: {contract.address}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No contracts found.</p>
//       )}
//     </div>
//   );
// }
