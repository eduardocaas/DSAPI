import axios from "axios";
import qs from "query-string";
import moment from 'moment';

function redirectToGitHub() {
  const GITHUB_URL = 'https://github.com/login/oauth/authorize';
  const params = {
    response_type: 'code',
    scope: 'user',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
  }
  const queryStrings = qs.stringify(params);
  const authURL = `${GITHUB_URL}?${queryStrings}`;
  window.location.href = authURL;
}

async function displayUserInfo() {
  const { code } = qs.parseUrl(window.location.href).query;
  if (code) {
    try {
      const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code });
      const user = response.data;
      console.log(user);

      const { name, login, location, plan } = user;
      const formattedDate = moment(user.created_at).format('DD/MM/YYYY');
      const planName = plan.name;

      const userHTML = `
        <h2>Informações do usuário:</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Login:</strong> ${login}</p>
        <p><strong>Localização:</strong> ${location}</p>
        <p><strong>Criado em:</strong> ${formattedDate}</p>
        <p style="text-transform: capitalize;"><strong>Plano:</strong> ${planName}</p>
      `;
      document.getElementById('user').innerHTML = userHTML;
    } catch (error) {
      alert('Erro!');
      console.log("err ", error);
    }
  }
}

window.onload = async () => {
  document.querySelector(".login").addEventListener("click", redirectToGitHub);
  await displayUserInfo();
}
