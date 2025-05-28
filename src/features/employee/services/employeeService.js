import axios from "../../../api/axios";

export const getEmployees = () => axios.get('/employee');
export const createEmployee = (data) => axios.post('/employee', data);
export const updateEmployee = (id, data) => axios.put(`/employee/${id}`, data);