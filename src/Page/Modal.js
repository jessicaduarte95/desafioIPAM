import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '53%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height: "40%",
  bgcolor: 'background.paper',
  boxShadow: 30,
  borderRadius: '5px'
};

const titleDados = {
    marginTop: "1.5%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.8rem",
    fontSize: '130%',
    color: "#0C4701",
    fontWeight: "bold"
};

const styleDados = {
    height: "10%",
    marginLeft: "2%",
    color: "#474747"
};

const button = {
    width: "3rem",
    height: "1.5rem",
    backgroundImage: "linear-gradient(90deg, #052000 20%, #0D5200 80%)",
    borderRadius: "0.2rem",
    border: 0,
    color: "white",
};

export const Dados = (props) => {
    const { open, handleClose, municipioEscolhidoDados, setDisabledButton } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-Dados"
        aria-describedby="modal-DadosMunicipio"
      >
        <Box sx={style}>
          <Typography style={titleDados}>
            Dados do Município
          </Typography>
          <Grid container>
            <Grid 
                item
                direction="column"
                display="flex"
                justifyContent="space-around"
                style={{height: "60%"}}
                >
                <Typography style={styleDados}>Microrregião: {municipioEscolhidoDados[0]}</Typography>
                <Typography style={styleDados}>Mesorregião: {municipioEscolhidoDados[1]}</Typography>
                <Typography style={styleDados}>UF: {municipioEscolhidoDados[2]}</Typography>
                <Typography style={styleDados}>Região: {municipioEscolhidoDados[3]}</Typography>
            </Grid>
            <Grid 
                item 
                display="flex"
                justifyContent="flex-end"
                style={{height: "40%", marginRight: "3%"}}>
                <button style={button} onClick={() => {setDisabledButton(true); handleClose()}}>OK</button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}