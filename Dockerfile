FROM node:4-onbuild
COPY apiServer.js /usr/src/app
EXPOSE 8080
CMD ["node", "/usr/src/app/apiServer.js"]