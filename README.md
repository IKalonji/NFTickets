# NFTickets
NFT Ticketing for mass public transport with Unstoppable Domains integration. 

1. **Login** with [Unstoppable Domains](https://docs.unstoppabledomains.com/login-with-unstoppable/login-integration-guides) / [Moralis](https://moralis.io/)
1. **Logout**

## Configuration

You need to set your **UD Server properties** in the `Unstoppable_Server/src/index.ts` file.<br>
```
  UAuth: {
    clientID: 'UD Client ID',
    clientSecret: 'UD Client Secret',
  }
```

You need to set your **Moralis server properties** in the `env.ts` file.<br>
```
export const defaultEnv: Env = {
  ...
  moralis: {
    appId: 'MORALIS_APPLICATION_ID',
    serverUrl: 'MORALIS_SERVER_URL',
  }
};
```

You need to set your **NFTPort properties** in the `env.ts` file.<br>
```
export const defaultEnv: Env = {
  ...
  NFTPort: {
    Api Key: 'NFTPort key',

  }
};
```

You need to set your **NFT Storage properties** in the `env.ts` file.<br>
```
export const defaultEnv: Env = {
  ...
  NFT storage: {
    Api Key: 'Storage key',
  }
};
```

## Run project
Clone repo.

npm install in both Unstoppable Server and nftickets fron end.

#### Run Server
ts-node index.ts

#### Run frontend
ionic serve

### Video Demo


