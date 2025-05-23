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
    const response = await axios.post('http://localhost:3500/api/auth/user/user-login', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const userRegistration = createAsyncThunk('auth/user-signup', async (formData) => {
    const response = await axios.post('http://localhost:3500/api/auth/user/user-register', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const userLogout = createAsyncThunk('auth/user-logout', async () => {
    const response = await axios.post('http://localhost:3500/api/auth/user/user-logout', {}, {
        withCredentials: true,
    });
    return response.data;
});

// Vendor Auth
export const vendorLogin = createAsyncThunk('auth/vendor-login', async (formData) => {
    const response = await axios.post('http://localhost:3500/api/auth/vendor/vendor-login', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const vendorRegistration = createAsyncThunk('auth/vendor-signup', async (formData) => {
    const response = await axios.post('http://localhost:3500/api/auth/vendor/vendor-register', formData, {
        withCredentials: true,
    });
    return response.data;
});

export const vendorLogout = createAsyncThunk('auth/vendor-logout', async () => {
    const response = await axios.post('http://localhost:3500/api/auth/vendor/vendor-logout', {}, {
        withCredentials: true,
    });
    return response.data;
});

// Auth Check
export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    const response = await axios.get('http://localhost:3500/api/auth/user/checkAuth', {
        withCredentials: true,
        headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
    });
    return response.data;
});

// Forgot/Reset Password - User
export const forgotPasswordUser = createAsyncThunk('auth/forgot-password-user', async ({ email }) => {
    const response = await axios.post('http://localhost:3500/api/auth/user/forgot-password', { email }, {
        withCredentials: true,
    });
    return response.data;
});

export const resetPasswordUser = createAsyncThunk('auth/reset-password-user', async ({ token, password }) => {
    const response = await axios.post(`http://localhost:3500/api/auth/user/reset-password/${token}`, { password }, {
        withCredentials: true,
    });
    return response.data;
});

// Forgot/Reset Password - Vendor
export const forgotPasswordVendor = createAsyncThunk('auth/forgot-password-vendor', async ({ email }) => {
    const response = await axios.post('http://localhost:3500/api/auth/vendor/forgot-password', { email }, {
        withCredentials: true,
    });
    return response.data;
});

export const resetPasswordVendor = createAsyncThunk('auth/reset-password-vendor', async ({ token, password }) => {
    const response = await axios.post(`http://localhost:3500/api/auth/vendor/reset-password/${token}`, { password }, {
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
            // User Login
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticate = false;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.data : null;
                state.isAuthenticate = action.payload.success;
            })
            .addCase(userLogin.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticate = false;
                state.user = null;
            })

            // User Registration
            .addCase(userRegistration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userRegistration.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })
            .addCase(userRegistration.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // User Logout
            .addCase(userLogout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })
            .addCase(userLogout.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // Vendor Login
            .addCase(vendorLogin.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticate = false;
            })
            .addCase(vendorLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.data : null;
                state.isAuthenticate = action.payload.success;
            })
            .addCase(vendorLogin.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // Vendor Registration
            .addCase(vendorRegistration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(vendorRegistration.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })
            .addCase(vendorRegistration.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // Vendor Logout
            .addCase(vendorLogout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(vendorLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })
            .addCase(vendorLogout.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // Check Auth
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticate = action.payload.success;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false;
            })

            // Forgot Password - User
            .addCase(forgotPasswordUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPasswordUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(forgotPasswordUser.rejected, (state) => {
                state.isLoading = false;
            })

            // Reset Password - User
            .addCase(resetPasswordUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPasswordUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(resetPasswordUser.rejected, (state) => {
                state.isLoading = false;
            })

            // Forgot Password - Vendor
            .addCase(forgotPasswordVendor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPasswordVendor.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(forgotPasswordVendor.rejected, (state) => {
                state.isLoading = false;
            })

            // Reset Password - Vendor
            .addCase(resetPasswordVendor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPasswordVendor.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(resetPasswordVendor.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export default userAuthSlice.reducer;
