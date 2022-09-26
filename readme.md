## Demo: Nodejs expressjs openapi

### Tech stack
- AWS ECR
- AWS ECS
- Docker
- Swagger
- NodeJS

### What do i do?
In this project, i want to try the bellow action
- API Definition: [Swagger](https://swagger.io/)
using `swagger` for definition API (very simple) and use it in project
- Create a Dockerfile to build a docker image
- Push it into [AWS ECR](https://aws.amazon.com/ecr/)
- Run it on [AWS ECS](https://aws.amazon.com/ecs/)

### Architecture
At first, i do the above things manually then All infra and cicd settings will be implemented as code.  
 (will be created in another repo)

<img src="images/architecture.png">


### Test
```sh
npm i
npm run start
```

-　sample curl:　Get dogs list 
```sh
curl --location --request GET 'http://localhost:3000/dogs' \
--header 'User-Agent: sample'
```

- healthcheck
```sh
curl --location --request GET 'http://localhost:3000/healthcheck' --header 'User-Agent: sample'
```