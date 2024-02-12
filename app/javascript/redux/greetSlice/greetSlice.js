import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const fetchGreeting = createAsyncThunk(
  'greet/fetchGreetings',
  async () => {
    try {
      let response = await axios('http://127.0.0.1:5000/api/greetings')
      data = response.data
      return data.greeting
    }
    catch(err){
      console.error(err)
    }
  }
  )

const intialState = {
  value: "",
  error: null,
  loading: false
}

const greetSlice = createSlice({
  name: 'greet',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGreeting.pending, state => {
        return {
          ...state,
          loading: true
        }
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        return {
          ...state,
          value: action.payload,
          loading: false,
          error: null
        }
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.error.message
        }
      })
})

export default greetSlice.reducer