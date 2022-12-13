import React, { useEffect, useState } from'react';
import '../index.css'
import { Grid, Typography} from "@mui/material";
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Municipios } from '../Store/Municipios/municipios.actions';
import { Dados } from './Modal';
import { MunicipiosDados } from '../Store/DadosMunicipios/municipiosDados.actions';

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

    const dispatch = useDispatch()
    const municipiosRelacionados = useSelector(state => state.municipios);
    const municipioEscolhidoDados = useSelector(state => state.municipiosDados);
    const [ufs, setUfs] = useState([]);
    const [cidade, setCidades] = useState([]);
    const [disabledSelect, setDisabledSelect] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [ufSelecionada, setUfSelecionada] = useState("");
    const [municipioSelecionado, setmunicipioSelecionado] = useState("");
    const [dadosSelecionado, setDadosMunicipio] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const ufAlterada = (event) => {
        document.getElementById("uf")
        setUfSelecionada(event)
    }
    const municipioAlterado = (event) => {
        document.getElementById("municipio")
        setmunicipioSelecionado(event)
    }

    const municipioSelecionadoDados = async () => {
        await Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipioSelecionado}/distritos`)
        .then((response) => {
            setDadosMunicipio(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
        setDisabledButton(false)
    }
    
    const municipiosAssociados = async () => {
        await Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios`)
        .then((response) => {
            setCidades(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
        setDisabledSelect(false);
    }

    useEffect(() => {
        Axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((response) => {
            setUfs(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

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
                        <select name="uf" id="uf" style={selectEstadoMunicipio}  onChange={(e) => ufAlterada(e.target.value)} onClick={() => {municipiosAssociados(); dispatch(Municipios(cidade))}}>
                            <option value="0"></option>
                            {ufs.map(uf => (
                                <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            ))}
                        </select>
                    </Grid>
                    <Grid style={{width: '45%'}}>
                        <Typography style={titleEstadoMunicipio}>Município</Typography>
                        <select name="municipio" style={selectEstadoMunicipio} id="municipio" onChange={(e) => municipioAlterado(e.target.value)} disabled={disabledSelect === true ? true: false}  onClick={() => {dispatch(Municipios(cidade)); municipioSelecionadoDados()}}>
                            <option value="0"></option>
                            {Array.isArray(municipiosRelacionados) ? municipiosRelacionados.map(municipio => (
                                <option value={municipio.id} key={municipio.id}>{municipio.nome}</option>
                            )): []}
                        </select>
                    </Grid>
                </Grid>
                <Grid item style={buttonConsultar}>
                    <button style={button} onClick={() => {handleOpenModal(); dispatch(MunicipiosDados(dadosSelecionado))}} disabled={disabledButton === true ? true: false}>Consultar</button>
                </Grid>
            </Grid>
        </Grid>
        <Dados open={openModal} handleClose={handleCloseModal} municipioEscolhidoDados={municipioEscolhidoDados} setDisabledButton={setDisabledButton}/>
    </Grid>
  );
}