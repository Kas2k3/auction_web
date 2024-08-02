import { message } from 'ant-design-vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import authService from '../../services/auth-service';


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const token = ref(localStorage.getItem('token') || null);
    const isAuth = ref(!!user.value && !!token.value);
    const email = ref(localStorage.getItem('email') || null);
    const loading = ref(false);

    // const user = ref(JSON.parse(localStorage.getItem('user')) || null);
    // const token = ref(localStorage.getItem('token') || null);
    // const isAuth = ref(!!user.value && !!token.value);
    // const email = ref(localStorage.getItem('email') || null);
    // const loading = ref(false);

    function setAuth(data) {
        console.log('Setting auth data:', data);
        user.value = data.user;
        token.value = data.token;
        isAuth.value = true;
        email.value = data.email;
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('email', data.email);
    }

    function clearAuth() {
        user.value = null;
        token.value = null;
        isAuth.value = false;
        email.value = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('email');
    }

    async function login(email, password) {
        const response = await authService.login(email, password);
        setAuth(response.data);
    }

    async function register(data) {
        try {
            const response = await authService.register(data);
            setAuth(response.data);
            return response;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    async function resendOTP() {
        try {
            await authService.resendOTP(email.value);
            message.success('Verification code resent successfully');
            startCountdown();
        } catch (error) {
            console.error('Resend error:', error);
            message.error('Failed to resend verification code. Please try again.');
        }
    }

    async function verifyOTP(email, otp) {
        try {
            const response = await authService.verifyOTP(email, otp);
            console.log('Verification response:', response);
            message.success('OTP verified successfully');
        } catch (error) {
            console.error('Verification error:', error);
            if (error.response && error.response.data && error.response.data.message) {
                message.error(error.response.data.message);
            } else {
                message.error('Verification failed. Please try again.');
            }
        }
    }

    async function logout() {
        console.log('Initiating logout process...');
        try {
            console.log('Token:', this.token);
            await authService.logout(this.token);
            console.log('Logout successful');
            this.clearAuth();
        } catch (error) {
            console.error('Logout error:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    async function introspect() {
        try {
            const response = await authService.introspect(token.value);
            user.value = response.user;
            isAuth.value = true;
        } catch (error) {
            console.error('Introspect error:', error);
            clearAuth();
        }
    }

    async function refreshToken() {
        try {
            const response = await authService.refreshToken(token.value);
            setAuth(response);
        } catch (error) {
            console.error('Refresh token error:', error);
            clearAuth();
        }
    }

    async function forgetPassword(email) {
        try {
            await authService.forgetPassword(email);
            message.success('Please check your email for the new password.');
        } catch (error) {
            message.error('Failed to reset password.');
        }
    }

    async function changePassword(currentPassword, newPassword) {
        try {
            await authService.changePassword(currentPassword, newPassword);
            message.success('Password changed successfully!');
        } catch (error) {
            message.error('Failed to change password.');
        }
    }

    // async function getMyInfo() {
    //     try {
    //         const response = await authService.getMyInfo();
    //         user.value = response.data;
    //     } catch (error) {
    //         message.error('Failed to retrieve user info.');
    //     }
    // }

    // async function updateMyInfo(data) {
    //     try {
    //         await authService.updateMyInfo(data);
    //         message.success('User info updated successfully!');
    //     } catch (error) {
    //         message.error('Failed to update user info.');
    //     }
    // }

    // if (localStorage.getItem('isAuth') === 'true') {
    //     user.value = JSON.parse(localStorage.getItem('user'));
    //     token.value = localStorage.getItem('token');
    //     isAuth.value = true;
    //     email.value = localStorage.getItem('email');
    //     introspect();
    // }


    return {
        user,
        token,
        isAuth,
        email,
        loading,
        login,
        logout,
        introspect,
        refreshToken,
        register,
        resendOTP,
        verifyOTP,
        clearAuth,
        forgetPassword,
        changePassword,
        // getMyInfo,
        // updateMyInfo,
    };
});
