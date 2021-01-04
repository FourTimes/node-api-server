
Do not change the environment variable


    export AWS_ACCESS_KEY_ID=""
    export AWS_SECRET_ACCESS_KEY=""
    export REGION=""

Execution Process:

    sudo apt update
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    node --version
    git clone https://github.com/FourTimes/node-api-server.git
    cd node-api-server
    node index.js   # 8080 (Open the security port also)
    git clone https://github.com/FourTimes/react-api-ui.git
    cd react-api-ui
    vim package.json => Replace the proxy url => "proxy": "http://127.0.0.1:8080" => "proxy": "http://xxx.xxx.xxx.xxx:8080"
    npm  start      # 3000 (Open the security port also)
