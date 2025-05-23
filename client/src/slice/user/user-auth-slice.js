import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isAuthenticate: false,
    isLoading: false,
    user: null,
};

// ------------------ Async Thunks ------------------

// User Auth
export const userLogin = createAsyncThunk('auth/user-login', async (formData) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/user/user-login', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const userRegistration = createAsyncThunk('auth/user-signup', async (formData) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/user/user-register', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const userLogout = createAsyncThunk('auth/user-logout', async () => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/user/user-logout', {}, {
        withCredentials: true,
    });
    return response.data;
});

// Vendor Auth
export const vendorLogin = createAsyncThunk('auth/vendor-login', async (formData) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/vendor/vendor-login', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const vendorRegistration = createAsyncThunk('auth/vendor-signup', async (formData) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/vendor/vendor-register', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const vendorLogout = createAsyncThunk('auth/vendor-logout', async () => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/vendor/vendor-logout', {}, {
        withCredentials: true,
    });
    return response.data;
});

// Auth Check
export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    const response = await axios.get('https://final-yr-project.onrender.com/api/auth/user/checkAuth', {
        withCredentials: true,
        headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
    });
    return response.data;
});

// Forgot/Reset Password - User
export const forgotPasswordUser = createAsyncThunk('auth/forgot-password-user', async ({ email }) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/user/forgot-password', { email }, {
        withCredentials: true,
    });
    return response.data;
});

export const resetPasswordUser = createAsyncThunk('auth/reset-password-user', async ({ token, password }) => {
    const response = await axios.post(`https://final-yr-project.onrender.com/api/auth/user/reset-password/${token}`, { password }, {
        withCredentials: true,
    });
    return response.data;
});

// Forgot/Reset Password - Vendor
export const forgotPasswordVendor = createAsyncThunk('auth/forgot-password-vendor', async ({ email }) => {
    const response = await axios.post('https://final-yr-project.onrender.com/api/auth/vendor/forgot-password', { email }, {
        withCredentials: true,
    });
    return response.data;
});

export const resetPasswordVendor = createAsyncThunk('auth/reset-password-vendor', async ({ token, password }) => {
    const response = await axios.post(`https://final-yr-project.onrender.com/api/auth/vendor/reset-password/${token}`, { password }, {
        withCredentials: true,
    });
    return response.data;
});

// ------------------ Slice ------------------

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ... rest unchanged ...
    }
});

export default userAuthSlice.reducer;
