
import { Grid, IconButton, OutlinedInput, TextField } from '@mui/material'
import { FaMinus, FaPaw, FaPlus } from 'react-icons/fa'
import LoadingButton from '@mui/lab/LoadingButton';
import styles from '../styles/MintSection.module.css'
import { useState } from 'react';
import { selectAuth } from '../stores/auth-slice';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { ethers } from 'ethers';
import { setTexts } from '../stores/kuma-slice';

const MintSection = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { account } = useAppSelector(selectAuth)
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)
  const limit = 10

  const onClickIncrease = () => {
    const increment = qty + 1 
    if (increment > 10) {
      return
    }

    setQty(increment)
  }

  const onClickDecrement = () => {
    const decrement = qty - 1 
    if (decrement < 1) {
      return
    }

    setQty(decrement)
  }

  const onClickMint = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner()
        // const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer)

        // let nftTxn = await connectedContract.makeAnEpicNFT()

        setLoading(true);
        dispatch(setTexts(['Adopting bears...', 'Waiting...', 'Generating kumas...']))
        // await nftTxn.wait()
        // console.log(nftTxn)
        // dispatch(setTexts([`Mined, tee transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`))
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist")
        dispatch(setTexts(['First install Metamask', 'Why are you taking so long ?']))
      }
    } catch (error) {
      dispatch(setTexts(['Error !!!!, try again']))
      console.log(error)
    }
  }

  return (
    <div className={styles.mintSection}>
      <Grid className={styles.qtyMint} container textAlign="center" alignItems="center">
        <Grid item xs={4}>
          <IconButton className={styles.actionIcon} onClick={onClickDecrement}>
            <FaMinus />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <TextField className={styles.input} value={qty} disabled/>
        </Grid>
        <Grid item xs={4}>
          <IconButton className={styles.actionIcon} onClick={onClickIncrease}>
            <FaPlus />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems="center" textAlign="center">
        <Grid item xs={3} />
        <Grid item xs={6}>
          <LoadingButton
           loading={loading}
           className={styles.mintButton}
           color="primary"
           disabled={account.length <= 0}
           variant="contained"
           onClick={onClickMint}
           startIcon={<FaPaw />}>
            {loading ? 'Adopting Kumas' : 'Adopt kuma'}
          </LoadingButton>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  )
}

export default MintSection
