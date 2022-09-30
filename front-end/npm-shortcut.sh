#!/bin/bash
sudo rm -rf node_modules && 
sudo rm -rf package-lock.json &&
sudo npm install --no-optional && 
sudo npm run relocate