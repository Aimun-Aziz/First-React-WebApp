import axios from "axios";

const customInstance = axios.create({

baseURL: "https://v1.pos.canary.bleaum.dev/",
headers: { Accept: "application/json",
            consumerid: 13,
            outletchainid: "265594ef-9701-45e8-9562-957a7d16fd74"
},

});

export default customInstance;
