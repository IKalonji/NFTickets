# NFTickets
NFT Ticketing for mass public transport. NFTHack2022. 

## Project Details
The project combines the storage of a ticket in the form of a unique QR code which is stored on IPFS and redeemed on usage. The dapp has been build in it most simplest form for the hackathon. Process of usage: Contract is deployed (Polygon x NFTport) User logs in (Moralis), adds a ticket to purchase, a ticket is then created and stored (IPFS), for usage user wallet is queried (Covalent) and then the ticket is burnt (NFTport).
