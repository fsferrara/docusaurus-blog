Docker 

## Dependencies

Adds EPEL repositories
    
    
    sudo yum install epel-release
    
    

You can check with the  **yum repolist**  command.  
Install some packages
    
    
    sudo yum install zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel patch gcc git
    
    

## Install Docker 1.6.2

CentOS has docker 1.6.2 in the epel repositories:
    
    
    sudo yum install docker-1.6.2-14.el7.centos.x86_64 docker-logrotate-1.6.2-14.el7.centos.x86_64 docker-selinux-1.6.2-14.el7.centos.x86_64
    
    

these packages provides at least
    
    
    docker
    config(docker)
    docker(x86-64)
    docker-io
    lxc-docker
    docker-logrotate
    docker-io-logrotate
    docker-logrotate(x86-64) 
    docker-selinux
    docker-io-selinux
    docker-selinux(x86-64) 
    
    

## Create a docker group

The docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can access it with sudo. For this reason, docker daemon always runs as the root user.  
To avoid having to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.

To create the docker group and add your user:

  1. Log into Centos as a user with sudo privileges.
  2. Create the `docker` group and add your user. `sudo groupadd docker` `sudo usermod -aG docker your_username` `sudo usermod -aG dockerroot your_username`
  3. Log out and log back in. This ensures your user is running with the correct permissions.



## Start docker daemon

Start the docker daemon:
    
    
    sudo service docker start
    
    

You can check with  **sudo service docker status**  command.  
To ensure Docker starts when you boot your system, do the following:
    
    
    sudo chkconfig docker on
