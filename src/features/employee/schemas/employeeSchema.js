import * as yup from 'yup';

export const employeeSchema = yup.object().shape({
    name: yup.string().required('Nama wajib diisi'),
    nik: yup.string().required('NIK wajib diisi'),
    username: yup.string().required('Username wajib diisi'),
    password: yup.string().required('Password wajib diisi'),
    email: yup.string().email('Email tidak valid').required('Password wajib diisi'),
    type: yup.array().of(yup.string()).min(1, 'Minimal pilih 1 tipe'),
});