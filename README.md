# Simple Nodejs Docker
creating Docker Image for your nodejs application.

# Prerequisties
  1. A Sample Nodejs application
  2. Docker Toolbox [My OS is Windows 7 64 bit], you can use the link https://docs.docker.com/toolbox/toolbox_install_windows

# Run nodejs application using node
		node index.js

* Access the application

          http://localhost:3000
          
          Output in your brower:
          Message from Hello World Sample nodejs application.

# Now, get ready to build Docker Image for your node application

* <b>create Dockerfile</b>

        Go to your node application directory and create a file named as <b>"Dockerfile"</b> [without any extension]

    * 1st Line : Node Version

                FROM node:7
    * 2nd Line : Working Directory in Docker container to store files, run npm, and launch our application

                WORKDIR /app
                
    * 3rd,4th,5th Line : Copy your node application folder to /app and install your dependencies and run your code.

                COPY package.json /app
                RUN npm install
                COPY . /app
                
    * 6th Line : Following line will get executed when docker image is lauched.
    
                CMD node index.js
                
    * 7th Line : As we are using port 3000, expose it outside once the container is launched.
    
                EXPOSE 3000
    
    * Your final Dockerfile will look like this..
    
                FROM node:7
                WORKDIR /app
                COPY package.json /app
                RUN npm install
                COPY . /app
                CMD node index.js
                EXPOSE 3000

* <b>Build your Docker Image file</b>

        docker build -t hellonodejsdocker .

* <b>Run your Docker Image file</b>

        docker run -p 3000:3000 hellonodejsdocker

* <b>Access your node application with your IP Address allocated to Docker, in my case it was 192.168.99.100</b>

        http://192.168.99.100:3000
        

# Share your Docker Image

* I have used hub.docker.com for sharing the docker image.
* Build your image with your docker login id
 
        docker build -t username/hellonodejsdocker .

* Login to docker hub

        docker login

* Push the image to docker hub

        docker push username/hellonodejsdocker
        
* Check your Docker REPOSITORY
 
        https://hub.docker.com/r/username/hellonodejsdocker/

# Done..Now you can now use the image on any system with Docker installed

        docker run username/hellonodejsdocker
