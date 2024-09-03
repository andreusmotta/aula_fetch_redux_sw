//redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//service
import getPlanetas from "../services/PlanetasService";

const initialState = {
    resposta: null,
    erro: false,
    sucesso: false,
    carregando: false
}

export const planetasGetSlice = createAsyncThunk("planetas/get", async (_, thunkAPI) => {
    
    const resposta = await getPlanetas();

    if (resposta.message) {
        return thunkAPI.rejectWithValue(resposta.message);
    }

    return resposta;

});

export const planetasSlice = createSlice({
    name: "get",
    initialState,
    reducers: {
        reset: (state) => {
            state.carregando = false;
            state.erro = false;
            state.sucesso = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(planetasGetSlice.pending, (state) => {
                state.carregando = true;
                state.erro = false;
            })
            .addCase(planetasGetSlice.fulfilled, (state, action) => {
                state.carregando = false;
                state.sucesso = true;
                state.erro = false;
                state.response = action.payload;
            })
            .addCase(planetasGetSlice.rejected, (state, action) => {
                state.carregando = false;
                state.sucesso = false;
                state.erro = true;
                state.response = action.payload;
            })
    }
});

export const { reset } = planetasSlice.actions;
export default planetasSlice.reducer;