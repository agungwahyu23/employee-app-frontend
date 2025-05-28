import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { employeeSchema } from '../schemas/employeeSchema';
import { createEmployee, updateEmployee } from '../services/employeeService';

const defaultValues = {
  name: '',
  nik: '',
  gender: '',
  birth_place: '',
  birth_date: '',
  phone: '',
  province: '',
  city: '',
  subdistrict: '',
  village: '',
  address: '',
  email: '',
  username: '',
  password: '',
  type: [],
  start_contract: '',
  end_contract: '',
  marriage_status: '',
  doctor_code_bpjs: '',
  position: '',
};

const EmployeeForm = ({ selected, onSuccess }) => {
    
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(employeeSchema),
  });

  useEffect(() => {
    console.log('Form errors:', errors);
    if (selected) {
      const { ...data } = selected;
      reset(data);
    } else {
      reset(defaultValues);
    }
  }, [selected]);

  const onSubmit = async (data) => {
    console.log("Form disubmit:", data);
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => {
      if (key === 'photo') {
        if (val?.[0]) formData.append('photo', val[0]);
      } else {
        formData.append(key, val);
      }
    });

    try {
      if (selected) {
        console.log(selected);
        
        await updateEmployee(selected.nik, formData);
        alert('Data diperbarui!');
      } else {
        await createEmployee(formData);
        alert('Data disimpan!');
      }
      onSuccess();
      reset(defaultValues);
    } catch (err) {
      alert('Terjadi kesalahan saat menyimpan');
    }
  };
  
  return (
    <div className="col-md-8 mb-4">
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">{selected ? 'Edit Karyawan' : 'Tambah Karyawan'}</h5>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="row">
                        <div className="col">
                        <div className="mb-3">
                            <label>Nama Lengkap*</label>
                            <input type="text" className="form-control" {...register('name')} />
                            {errors.name && <small className="text-danger">{errors.name.message}</small>}
                        </div>
                        <div className="mb-3">
                            <label>No. Kartu Identitas*</label>
                            <input type="text" className="form-control" {...register('nik')} />
                        </div>
                        <div className="mb-3">
                            <label>Jenis Kelamin</label><br />
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="l" {...register('gender')} />
                            <label className="form-check-label">Laki-laki</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="p" {...register('gender')} />
                            <label className="form-check-label">Perempuan</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Tempat Lahir</label>
                            <input type="text" className="form-control" {...register('birth_place')} />
                        </div>
                        <div className="mb-3">
                            <label>Tanggal Lahir</label>
                            <input type="date" className="form-control" {...register('birth_date')} />
                        </div>
                        <div className="mb-3">
                            <label>No. Telepon</label>
                            <input type="text" className="form-control" {...register('phone')} />
                        </div>
                        <div className="mb-3">
                            <label>Provinsi</label>
                            <input type="text" className="form-control" {...register('province')} />
                        </div>
                        <div className="mb-3">
                            <label>Kota/Kabupaten</label>
                            <input type="text" className="form-control" {...register('city')} />
                        </div>
                        <div className="mb-3">
                            <label>Kecamatan</label>
                            <input type="text" className="form-control" {...register('subdistrict')} />
                        </div>
                        <div className="mb-3">
                            <label>Kelurahan</label>
                            <input type="text" className="form-control" {...register('village')} />
                        </div>
                        <div className="mb-3">
                            <label>Detail Alamat</label>
                            <textarea className="form-control" {...register('address')}></textarea>
                        </div>
                        </div>

                        <div className="col">
                        <div className="mb-3">
                            <label>Username*</label>
                            <input type="text" className="form-control" {...register('username')} />
                        </div>
                        <div className="mb-3">
                            <label>Email*</label>
                            <input type="email" className="form-control" {...register('email')} />
                        </div>
                        <div className="mb-3">
                            <label>Password*</label>
                            <input type="password" className="form-control" {...register('password')} />
                        </div>
                        <div className="mb-3">
                            <label>Tipe</label><br />
                            {['manager', 'admin', 'resepsionis', 'manajemen', 'finance', 'kasir', 'purchasing'].map((role) => (
                            <div className="form-check" key={role}>
                                <input className="form-check-input" type="checkbox" value={role} {...register('type')} />
                                <label className="form-check-label">{role}</label>
                            </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label>Jabatan</label><br />
                            {['perawat', 'bidan', 'dokter'].map((pos) => (
                            <div className="form-check" key={pos}>
                                <input className="form-check-input" type="radio" value={pos} {...register('position')} />
                                <label className="form-check-label">{pos}</label>
                            </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label>Tanggal Mulai Kontrak</label>
                            <input type="date" className="form-control" {...register('start_contract')} />
                        </div>
                        <div className="mb-3">
                            <label>Tanggal Selesai Kontrak</label>
                            <input type="date" className="form-control" {...register('end_contract')} />
                        </div>
                        <div className="mb-3">
                            <label>Status Menikah</label>
                            <select className="form-select" {...register('marriage_status')}>
                            <option value="">Pilih</option>
                            <option value="1">Sudah Menikah</option>
                            <option value="0">Belum Menikah</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Kode Dokter BPJS</label>
                            <select className="form-select" {...register('doctor_code_bpjs')}>
                            <option value="">Pilih Dokter</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                        {selected ? 'Update' : 'Simpan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default EmployeeForm;
