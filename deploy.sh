#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ alex@172.105.5.116:/home/alex/voting-app/
echo "Deployment complete"