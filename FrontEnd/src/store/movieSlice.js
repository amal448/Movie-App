import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerData: [],
  imageURL:""
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData:(state,action)=>{
        state.bannerData=action.payload
    },
    setImageURL:(state,action)=>{
        state.imageURL=action.payload
        console.log("reached",state.imageURL);
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBannerData ,setImageURL } = movieSlice.actions

export default movieSlice.reducer