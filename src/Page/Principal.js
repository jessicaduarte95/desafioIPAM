import React from'react';
import './Principal.css'
import { Grid, Typography} from "@mui/material";

export const  Principal = () => {

    const containerStyle = {
        flexDirection: "row"
    }
    const titlePrincipal = {
        backgroundImage: "linear-gradient(90deg, #052000 20%, #0D5200 80%)",
        height: "33%",
        padding: "0% 20% 2% 20%",
        display: "flex",
        alignItems:"flex-end",
        fontFamily: 'Apple Chancery, cursive',
        fontSize: '4.5rem',
        color: 'white'
    }
    const SecondPart = {
        backgroundColor: "#C0C0C0"
    }
    const ThirdPart = {
        margin: '3% 20% 3% 20%',
        backgroundColor: "white",
        height: "40%",
        width: "66%",
        borderRadius: "0.4rem",
        display: "flex",
        flexDirection: "column",
    }
    const titleConsulta = {
        marginTop: "1.5%",
        height: "23%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        fontSize: '165%',
        color: "#0C4701",
        fontWeight: "bold"
    }
    const textConsulta = {
        marginBottom: '4%',
        width: '95%',
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        marginRight: "0.8rem",
        fontSize: '120%',
        color: "#474747"
    }

  return (
    <Grid  container style={containerStyle}>
        <Grid item sm={12} style={titlePrincipal}>
            IPAM
        </Grid>
        <Grid item sm={12} spacing={2}style={SecondPart}>
            <Grid item style={ThirdPart}>
                <Typography style={titleConsulta}>Consulta de dados</Typography>
                <Typography style={textConsulta}>
                    Caso queira consultar dados relativos a um município, selecione 
                    um estado e um município abaixo.
                </Typography>
            </Grid>
        </Grid>
    </Grid>
  );
}