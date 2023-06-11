import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

    import Add_PersonForm from './Add_PersonForm'
    



function Add_Person({setSection,vars}) {
  const navigate = useNavigate()

  return (
    <>
      <Add_PersonForm vars={vars} setSection={setSection}/>
      
    </>
  )
}

export default Add_Person
