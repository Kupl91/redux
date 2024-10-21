import { IUser } from "../../models/IUser";
import { PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state: UserState, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.pending, (state: UserState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.rejected, (state: UserState, action: AnyAction) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default userSlice.reducer;
