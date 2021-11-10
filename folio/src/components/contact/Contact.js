import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default class Contact extends React.Component {
    render(){
        return(

            <Box
      sx={{
        width: 600,
        maxWidth: "100%"
      }}
    >
                <header>
                <h1>Let's talk.</h1>
            </header>
                <p>Get in touch via the form below, or by emailing <a href={"mailto: test@test.com"} target={'_blank'}>test@test.com</a></p>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
        )
    }
}