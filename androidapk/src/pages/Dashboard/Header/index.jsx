import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import HeaderNav from './HeaderNav'
    



function Header({setSection,vars}) {
  const navigate = useNavigate()

  return (
    <>
      <HeaderNav vars={vars} setSection={setSection}/>
      
    </>
  )
}

export default Header
