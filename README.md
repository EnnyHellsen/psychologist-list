# 🧑‍⚕️ Psychologist List App 

An expo go app that lists psychologists from mindlers API.

## 🏗️ Prepare environment

 First to prep the environment we will need to start an external node express server. Then we're able to fetch psychologists without running into cors errors we use a proxy server that allows cors. Link to the repo [here](https://github.com/EnnyHellsen/psychologist-node-proxy)

1. Clone and enter app

```bash
git clone git@github.com:EnnyHellsen/psychologist-node-proxy.git
cd psychologist-node-proxy
```

2. Install dependencies and start server

```bash
npm install
node server.js
```

## 📱 Get set up

3. Install dependencies and start the app <s>on your device</s> in your browser

```bash
npm install
npm run web
```

⚠️ Unfortunately it doesn't work properly on a physical/simulated device as the proxy server is not deployed (yet) and only running on the local machine