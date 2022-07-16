
import {  useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { selectKuma, setTexts } from '../stores/kuma-slice'

import styles from '../styles/AskToTheKuma.module.css'
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, Typography } from '@mui/material';

const AskToTheKuma = () => {
  const dispatch = useAppDispatch()
  const { texts } = useAppSelector(selectKuma)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    const getTotalSupply = async () => {
    }
    const getPrice = async () => {
    }
    const getQtyFreeMint = async () => {
    }
    const getPerWallet = async () => {
    }
    const getTotalMinted = async () => {
    }
    const getHasStillFree = async () => {
      dispatch(setTexts(['eita']))
    }

    if (question === '') {
      return
    }

    if (question === 'totalSupply') {
      getTotalSupply()
    }
    if (question === 'maxFreeMint') {
      getTotalSupply()
    }
    if (question === 'maxPerWallet') {
      getTotalSupply()
    }
    if (question === 'qtyMinted') {
      getTotalSupply()
    }
    if (question === 'freeMints') {
      getHasStillFree()
    }
  }, [question])

  const questions = [
    {
      label: 'Total supply ?',
      value: 'totalSupply'
    },
    {
      label: 'Qty minted ?',
      value: 'qtyMinted'
    },
    {
      label: 'Price after a free ?',
      value: 'price'
    },
    {
      label: 'Max per wallet ?',
      value: 'maxPerWallet'
    },
    {
      label: 'Max free mint per wallet ?',
      value: 'maxFreeMint'
    },
    {
      label: 'Still have free kumas ?',
      value: 'freeMints'
    },
  ]

  return (
    <div className={`${styles.ballon} ${styles.visible}`}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="ask-to-the-kuma">Question</InputLabel>
        <Select
          labelId="ask-to-the-kuma"
          id="ask-to-the-kuma-select"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value)
          }}
          input={<OutlinedInput label="Tag" />}
        >
          {questions.map((question) => (
            <MenuItem key={question.value} value={question.value}>
              <Typography>{question.label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default AskToTheKuma
