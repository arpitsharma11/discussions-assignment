import JSON from "../mockData";

class FetchData {
    static getData() {
        localStorage.setItem("data", JSON);
    }
}

export default FetchData;