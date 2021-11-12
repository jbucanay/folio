import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import './contact.css'

export default function Contact() {

        return (

    //         <Box
    //   sx={{
    //     width: 600,
    //     maxWidth: "100%"
    //   }}
    // >
    //             <header>
    //             <h1 className='talk'>Let's talk.</h1>
    //         </header>
    //             <p className='contact'>Get in touch via the form below, or by emailing <a href={"mailto: test@test.com"} target={'_blank'} className='email'>test@test.com</a>.</p>
    //             <TextField fullWidth label="Your name" id="name" variant='filled'/>
    //             <TextField fullWidth label="Email address" id="email" />
    //            <TextField
    //   variant="outlined"
    //   id="outlined-multiline-flexible"
    //   label="Multiline"
    //   multiline
    //   fullWidth
    //   maxRows={5}
    //   />
    //             <Button>Submit</Button>
    // </Box>

            <form>
                <input type="text" className="datepicker">
            </form>
        )

}