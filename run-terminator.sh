#!/bin/bash

sudo docker run -it --rm -v ~/projects/terminator/website/:/usr/src/app -p 80:8080 -d --name terminator_app terminator /bin/bash -c "cd routes; http-server";
