import * as yup from 'yup';

export const employeeSchema = yup.object().shape({
    fullname: yup.string().required('Nama wajib diisi'),
    nik: yup.string().required('NIK wajib diisi'),
    username: yup.string().required('Username wajib diisi'),
    password: yup.string().required('Password wajib diisi'),
    email: yup.string().email('Email tidak valid').required('Password wajib diisi'),
});