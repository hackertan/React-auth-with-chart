import React, { Component } from 'react'
import axios from 'axios'

class EmpService{
    getListOfEmployees() {
        return axios.get(`http://localhost:8080/employee/listEmployees`)
            .then(res => {
                const employees = res.data;
                this.setState({ employees });
            })
    }
    sayHi(){
        alert("Hi")
    }
}
export default new EmpService()