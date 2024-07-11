import axios from "axios";

const Get =async(url)=>{
    try {
      const response = axios.get(url)
      return response
    } catch (error) {
        return {error}
    }

}
const Post =async(url)=>{
    try {
      const {data} = axios.get(url)
      return data
    } catch (error) {
        return {error}
    }

}

const Patch =async(url)=>{
    try {
      const {data} = axios.get(url)
      return data
    } catch (error) {
        return {error}
    }

}
const Put =async(url)=>{
    try {
      const {data} = axios.get(url)
      return data
    } catch (error) {
        return {error}
    }

}

const Delete =async(url)=>{
    try {
      const {data} = axios.get(url)
      return data
    } catch (error) {
        return {error}
    }

}

export {Get, Post, Patch, Put, Delete}