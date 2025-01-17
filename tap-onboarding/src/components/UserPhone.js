import React, {useState} from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'

const UserPhone = ({ prevStep, nextStep, handleChange, values }) => {
    const urlOriginalBase = 'https://api.qa.auntap.io/public/check_user?phone[equals]=' 
    const [errorBase, setErrorBase] = useState(false);
    const [ayudaErrorBase, setAyudaErrorBase] = useState('');
    var telefonoExistente;

    const Continue = async(e) => {
        e.preventDefault();
        await verificacionBase()
        if(telefonoExistente == false){
            nextStep();
        } else{
            e.preventDefault();
            setErrorBase(true);
            setAyudaErrorBase("El telefono ya esta asociado a un usuario existente")
        }
        
    }

    const verificacionBase = async() => {
        var url = urlOriginalBase + values.phone;
        const response = await fetch(url);
        const json = await response.json();
        telefonoExistente = json.exist;
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-2xl text-center  font-medium font-sans">Ingresá tu celular</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">Lo necesitamos para enviarte un código de verificación</p>
                        </div>
                        <form class= "pt-6 pb-10">   
                            <TextField 
                                error={errorBase} 
                                helperText={ayudaErrorBase}
                                id="textPhone"
                                variant="outlined" 
                                placeholder="Ej. 11 2345 6789" 
                                label="Celular"
                                onChange={handleChange('phone')}   
                                defaultValue={values.phone} 
                                fullWidth
                            />
                            
                            <div class= "pt-6 pb-2">
                            <p class="text-gray-400 text-xs text-left font-sans">EscribÍ tu celular con código de área sin cero ni 15</p>
                        </div>

                            <div class = "pt-3 flex flex-col">
                            <div class="pt-2 pb-2">
                            <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                    Siguiente
                            </Button>
                            </div>
                            <div class="pb-2">
                            <Button onClick={Previous} type="submit" variant="contained" class="rounded-full bg-green-400 hover:bg-green-300 px-12 text-white font-bold py-2"                            >
                                    Volver
                            </Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </form>
        </div>
    )
}
export default UserPhone
