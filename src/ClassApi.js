import axios from "./AxiosSetup";

export default class Api {
  static getDeviceCategories() {
    return axios.get("/deviceCategories").then((res) => res.data);
  }

  static getProducers() {
    return axios
      .get("/producers?deviceCategoryId=1&includeDevices=false")
      .then((res) => res.data);
  }

  static getDevice() {
    let producer = sessionStorage.getItem("producer");
    return axios.get("/device?producerId=" + producer).then((res) => res.data);
  }

  static getDeviceForUpdate(id) {
    return axios.get("/device?producerId=" + id).then((res) => res.data);
  }

  static getPrice() {
    return axios.get("/price?deviceCategoryId=2").then((res) => res.data);
  }

  static login(email, password) {
    return axios
      .post("/auth/login", {
        email: email,
        password: btoa(password),
      })
      .then((res) => res.data);
  }

  static registation(name, email, password, phone) {
    return axios
      .post("/auth/register", {
        name: name,
        email: email,
        phone: phone,
        password: btoa(password),
      })
      .then((res) => res.data);
  }

  static refresh() {
    return axios.post("/auth/refresh").then((res) => res.data);
  }

  static logout() {
    let id = sessionStorage.getItem("idUser");
    return axios.get("/auth/logout/" + id).then((res) => res);
  }

  static getTasks() {
    return axios.get("/tasks").then((res) => res.data);
  }

  static getTask(id) {
    return axios.get("/tasks/" + id).then((res) => res.data);
  }

  static pricesIds(prices) {
    let arr = "";
    for (let i = 0; i < prices.length; i++) {
      arr += "ids=" + prices[i] + "&";
    }
    let arr2 = arr.substr(0, arr.length - 1);
    return axios.get("/price/ids?" + arr2).then((res) => res.data);
  }

  static deleteTasks(id) {
    return axios.delete("/tasks/" + id).then((res) => res.data);
  }

  static updateTask(id, devCategs, device, producer, nameTask, descriptTask) {
    return axios
      .put("/tasks/" + id, {
        producerId: producer,
        deviceCategoryId: devCategs,
        deviceId: device,
        title: nameTask,
        description: descriptTask,
      })
      .then((res) => res);
  }

  static createTask(
    devCategs,
    device,
    producer,
    prices,
    nameTask,
    descriptTask
  ) {
    let user = sessionStorage.getItem("idUser");
    return axios
      .post("/tasks", {
        requesterId: user,
        producerId: producer,
        deviceCategoryId: devCategs,
        deviceId: device,
        priceIds: prices,
        title: nameTask,
        description: descriptTask,
      })
      .then((res) => res);
  }
}
