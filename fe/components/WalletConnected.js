import React from "react";
import useBlockChain from "../hooks/useBlockChain";
import { providers, Contract, ethers, utils } from "ethers";
import { Typography, Grid, Link } from "@material-ui/core";

const WalletConnected = () => {
  const { connectedWallet } = useBlockChain();
  console.log(connectedWallet);

  return (
    <div>
      {" "}
      <Grid>
        {connectedWallet ? (
          <>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >
              {`Metamask connected account: ${connectedWallet.substring(
                0,
                5
              )}...${connectedWallet.slice(-4)}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >
              {" "}
              <Link
                href="https://mumbai.polygonscan.com/address/0x96059123A453FAf85fd5D717F9656DE45e0C2Edf"
                variant="body1"
                align="center"
                underline="hover"
                target="_blank"
              >
                Verified Contract on PolygonScan ✅
              </Link>
            </Typography>
          </>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
};

export default WalletConnected;
