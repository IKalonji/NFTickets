export interface Env {
  production: boolean;
  env: 'dev' | 'prod';

  moralis: {
    /** Moralis Application ID */
    appId: string;
    /** Moralis Server URL */
    serverUrl: string;
  };

  nftStorage: string;
  covalent: string;
  nftport: string;
}

export const defaultEnv: Env = {
  production: false,
  env: 'dev',
  moralis: {
    appId: 'moralis_app_id',
    serverUrl: 'moralis_server',
  },
  nftStorage: "nft_storage_key",
  covalent: "covelent_key",
  nftport: "nft_port_key"
};
