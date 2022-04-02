import { CircularProgress, Link, Div, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import useBlockChain from "../hooks/useBlockChain";
import DeployWalletForm from "../components/DeployWalletForm";

const Form = () => {
  const {
    walletConnected,
    loading,
    getProviderOrSigner,
    connectWallet,
    createNewMultiSig,
    returnWallet,
    address,
    txn,
  } = useBlockChain();

  // console.log(address);

  const addresses = [];

  const host = process.env.url;

  const transaction = {
    hash: txn.hash,
    from: txn.from,
    to: txn.to,
    url: `https://rinkeby.etherscan.io/tx/${txn.hash}`,
    walleturl: `${host}/wallet/${address}`,
    walletexplorer: `https://rinkeby.etherscan.io/address/${address}`,
  };

  console.log(host);

  const RenderWallet = () => {
    return (
      <>
        <Box sx={{ m: 2 }} textAlign="center">
          <Typography variant="h5" gutterBottom component="div" sx={{ mb: 5 }}>
            Wallet Successfully Deployed to {address} 🥳🥳
          </Typography>
          <Link
            href={transaction.walleturl}
            variant="h5"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: 2 }}
            underline="always"
          >
            {transaction.walleturl}
          </Link>
          <Box sx={{ m: 5 }} textAlign="center">
            <Link
              href={transaction.walletexplorer}
              target="_blank"
              variant="h6"
              rel="noopener noreferrer"
              underline="always"
            >
              View on Etherscan
            </Link>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <Box>
      {!address ? (
        !loading ? (
          <DeployWalletForm
            createNewMultiSig={createNewMultiSig}
            returnWallet={returnWallet}
          />
        ) : (
          <Box>
            <CircularProgress />
          </Box>
        )
      ) : (
        <RenderWallet />
      )}
    </Box>
  );
};

export default Form;
