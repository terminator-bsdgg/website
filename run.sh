#!/bin/bash

sudo docker run -d -it -p 443:443 -p 80:80 -v $(pwd)/routes:/usr/share/nginx/html --rm --name terminator-jq terminator-app-jq

# /bin/ash -c "npm install --global http-server && http-server";
