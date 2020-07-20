docker build -t rishu53/energy-frontend:latest -t rishu53/energy-frontend:$GIT_SHA -f ./frontend/Dockerfile ./frontend
docker build -t rishu53/energy-backend:latest -t rishu53/energy-backend:$GIT_SHA -f ./backend/Dockerfile ./backend
docker push rishu53/energy-frontend:latest
docker push rishu53/energy-backend:latest
docker push rishu53/energy-frontend:$GIT_SHA
docker push rishu53/energy-backend:$GIT_SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=rishu53/energy-backend:$GIT_SHA
kubectl set image deployments/client-deployment frontend=rishu53/energy-frontend:$GIT_SHA


