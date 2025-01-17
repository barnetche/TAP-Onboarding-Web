import React from 'react'
import { Container, Grid , Button, Checkbox, TextField,  } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const UserDetailsConfirm = ({ prevStep, nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const [selected, setSelected] = React.useState(false);

    return (
        <div class="flex items-center h-screen w-full bg-teal-lighter bg-gray-200">
            <form class="w-full bg-white rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto">
                <Container component="main" maxWidth="xs">
                    <div>
                        <div class= "pt-6 pb-10">
                            <p class="text-indigo-900 text-2xl text-center font-medium font-sans">Confirmá tu nombre</p>
                        </div>
                        <div class= "pt-6 pb-5">
                            <p class="text-gray-500 text-1xl text-center font-sans">DNI: {values.document_id}</p>
                        </div>
                        <form class= "pt-5 pb-10 place-content-evenly">
                            <div class="flex items-center mt-1 flex rounded-md shadow-sm bg-indigo-200 px-3 place-content-evenly">
                                <label for="push-name1" class="mr-32 ml-6 block text-base font-medium text-indigo-800">
                                        Juan Perez
                                </label>
                                <input id="push-name1" name="push-names" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                            </div>
                            <div class = "pt-20 flex flex-col">
                                <div class="pt-12 pb-2">
                                    <Button onClick={Continue} type="submit" variant="contained" class="rounded-full bg-indigo-500 hover:bg-indigo-400 px-9 text-white font-bold py-2"                            >
                                            Siguiente
                                    </Button>
                                </div>
                                <div class = "pb-2">
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

export default UserDetailsConfirm
