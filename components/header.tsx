
import { Box,  Grid, IconButton } from '@mui/material'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import styles from '../styles/Header.module.css'
import AccountButton from './account-button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import openseaLogo from '../public/opensea-logo.png'

const Header = (): JSX.Element => {
  const router = useRouter()

  return (
    <Box width="100%" sx={{ p: "2% 0"  }}>
      <Grid container alignItems="center" justifyItems="center">
        <Grid item xs={2} md={2}>
          <IconButton sx={{ background: 'white', mr: 2 }}>
            <FaTwitter color="#1DA1F2"/>
          </IconButton>
          <IconButton sx={{ background: 'white' }}>
            <Image src={openseaLogo} alt="opensea-logo" height={27} width={27} />
          </IconButton>
        </Grid>
        <Grid item xs={0} md={4} sx={{display: { xs: 'none', md: 'block' }}}/>
        <Grid item xs={3} md={2} textAlign="center">
          <Link href="/">
            <p className={`${styles.link} ${!router.pathname.includes('history') ? styles.active : ''}`}>Mint</p>
          </Link>
        </Grid>
        <Grid item xs={4} md={2} textAlign="center">
          <Link href="/history" className={styles.link}>
            <p className={`${styles.link} ${router.pathname.includes('history') ? styles.active : ''}`}>History</p>
          </Link>
        </Grid>
        <Grid item xs={3} md={2} textAlign="center">
          <AccountButton />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
