#!/bin/bash

IMAGE_NAME=nginx-vite

yarn build
docker build -t "$IMAGE_NAME" -f ./docker/Dockerfile .
docker run -d -p 8081:80 "$IMAGE_NAME"