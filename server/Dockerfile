FROM node:16.13-alpine
WORKDIR "/app"
COPY ./package*.json ./
RUN npm install
COPY . . 
ENV PORT=4000
ENV MONGODB_URL='mongodb://mongo:27017/cinema'
ENV SENDGRID_API_KEY='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'
ENV JWT_SECRET='oneloveonefuture'
ENV TMDB_API_KEY='449cc5cb4e94f5cd055eb55bd9716521'
EXPOSE 4000
CMD ["npm", "run", "start"]