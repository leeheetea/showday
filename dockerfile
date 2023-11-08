# 빌드 단계
FROM node:16 AS build

WORKDIR /app

# 프로젝트의 package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 프로젝트의 모든 파일 복사
COPY . .

# 리액트 앱 빌드
RUN npm run build

# 실행 단계
FROM nginx:alpine

# 빌드 결과물을 nginx로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 80 포트를 열기
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
