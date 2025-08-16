## Sample app and image
* A tiny Node.js app with a dummy test
* Dockerfile to build a container image

## Kubernetes manifests:
* Deployment (Pods + ReplicaSet)
* Service (ClusterIP)
* Ingress (nginx-based)
* Secret

## GitHub Actions workflow:
* Checks out code from GitHub
* Runs tests on the Node.js app
* Builds and pushes Docker image to Docker Hub
* Deploys to Kubernetes using a kubeconfig secret

## Run Locally
* Clone the repo
```
git clone https://github.com/your-username/sample-js-app.git
cd sample-js-app
```

* Install dependencies and test the app
```
npm install
npm test
```

* Run
```
node app.js
```

* Build Docker image
```
docker build -t your-dockerhub-username/sample-js-app:latest .
```

## Integrate Prometheus & Grafana for alerting:
* Pod crash or restart
* High CPU/Memory usage
* HTTP 5xx errors
