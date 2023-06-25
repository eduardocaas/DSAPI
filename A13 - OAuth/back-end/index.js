import express, {json} from "express";
import cors from "cors";
import axios from "axios";
import qs from "query-string";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.post("/login", async (req, res) => {
  try {
    const token = await exchangeCodeForAccessToken(req.body.code);
    console.log(token);
    const user = await fetchUser(token);
    res.send(user);
  } catch (error) {
    console.log("err", error.response.data);
    res.sendStatus(500);
  }
});

async function exchangeCodeForAccessToken(code) { 
  const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
  const {REDIRECT_URL, CLIENT_ID, CLIENT_SECRET} = process.env;
  const body = {
    code,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URL,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  };

  const {data} = await axios.post(GITHUB_ACCESS_TOKEN_URL, body, {
    headers: {
      'Content-Type' : 'application/json'
    }
  });
  const parsedData = qs.parse(data);
  return parsedData.access_token;
 }

async function fetchUser(token) {
  const response = await axios.get("http://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

app.listen(5000, () => {
  console.log("Server running in port 5000");
})

