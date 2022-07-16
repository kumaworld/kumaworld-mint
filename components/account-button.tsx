
import { Button, ListItemIcon, MenuItem, Typography } from '@mui/material'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { selectAuth, setAccount } from '../stores/auth-slice'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { setTexts } from '../stores/kuma-slice'
import styles from '../styles/Header.module.css'
import AppMenu from './app-menu'

const AccountButton = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { account } = useAppSelector(selectAuth)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  useEffect( () => {
    const getCurrentAccount = async (): Promise<void> => {
      const { ethereum } = window;
      if (!ethereum) {
        dispatch(setTexts(['First install Metamask', 'Why are you taking so long ?']))
        dispatch(setAccount(''))
        return
      }
      
      const accounts = await ethereum.request({ method: 'eth_accounts' }) as string[];
      
      if ((accounts?.length ?? 0) !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        dispatch(setAccount(account))
        dispatch(setTexts([`Welcome back ${account}`]))
        await setupEventListener()

        return
      }

    }

    getCurrentAccount()
  }, [dispatch])

  const onClickConnectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        dispatch(setTexts(['First install Metamask', 'Why are you taking so long ?']))
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" }) as string[];

      console.log("Connected", accounts[0])
      dispatch(setAccount(accounts[0]))
      dispatch(setTexts([`Welcome ${account}`]))

      await setupEventListener()
    } catch (error) {
      dispatch(setTexts(['Error !!!!, try again']))
      console.log(error)
    }
  }

  const setupEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        //const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        //connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
        //})
        console.log("Setup event listener!")
      } else {
        dispatch(setTexts(['First install Metamask', 'Why are you taking so long ?']))
        console.log("Ethereum object doesn't exist")
      }
    } catch (error) {
      dispatch(setTexts(['Error !!!!, try again']))
      console.log(error)
    }
  }

  const onClickLogout = () => {
    dispatch(setAccount(''))
  }

  return (
    <>
      <Button className={styles.button} variant="contained" size="small">
        <Typography className={styles.wallet} onClick={account != '' ? handleClick : onClickConnectWallet}>
          {account != '' ? account : 'Connect wallet'}
        </Typography>
      </Button>
      <AppMenu anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={onClickLogout}>
          <ListItemIcon>
            <FaArrowCircleRight />
          </ListItemIcon>
          Logout
        </MenuItem>
      </AppMenu>
    </>
  )
}

export default AccountButton
