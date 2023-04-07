import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "6d22abd2f03b4ec2a7f032bad3f30d4c";
const redirectUri = "https://music-player-20194516.vercel.app";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
