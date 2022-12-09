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
        height: "45%",
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
        width: '95%',
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        marginRight: "0.8rem",
        fontSize: '120%',
        color: "#474747"
    }
    const titleEstadoMunicipio = {
        height: "30%",
        fontSize: '120%',
        color: "#474747",
    }
    const selectEstadoMunicipio = {
        height: "50%",
        width: "100%"
    }
    const buttonConsultar = {
        height: "50%",
        display: "flex",
        paddingRight: "2rem",
        justifyContent: "flex-end",
        paddingBottom: "1rem",
    }
    const button = {
        width: "6rem",
        height: "2.7rem",
        backgroundImage: "linear-gradient(90deg, #052000 20%, #0D5200 80%)",
        borderRadius: "0.2rem",
        border: 0,
        color: "white",
    }

  return (
    <Grid  container style={containerStyle}>
        <Grid item sm={12} style={titlePrincipal}>
            IPAM
        </Grid>
        <Grid item sm={12} style={SecondPart}>
            <Grid item style={ThirdPart}>
                <Typography style={titleConsulta}>Consulta de dados</Typography>
                <Typography style={textConsulta}>
                    Caso queira consultar dados relativos a um município, selecione 
                    um estado e um município abaixo.
                </Typography>
                <Grid 
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    style={{marginLeft: "0.8rem"}}>
                    <Grid style={{width: '45%'}}>
                        <Typography style={titleEstadoMunicipio}>Estado</Typography>
                        <select name="select" style={selectEstadoMunicipio}>
                            <option></option>
                            <option value="valor1">Valor 1</option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </Grid>
                    <Grid style={{width: '45%'}}>
                        <Typography style={titleEstadoMunicipio}>Município</Typography>
                        <select name="select" style={selectEstadoMunicipio}>
                            <option></option>
                            <option value="valor1">Valor 1</option>
                            <option value="valor2">Valor 2</option>
                            <option value="valor3">Valor 3</option>
                        </select>
                    </Grid>
                </Grid>
                <Grid item style={buttonConsultar}>
                    <button style={button}>Consultar</button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}