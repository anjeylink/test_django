# Django Courses test task

Installation
============

### Step 1: Clone project

Open a command console and clone project with command:

```console
$ git clone https://github.com/anjeylink/test_django.git
```

### Step 2: Start project with docker

*Make sure you have installed docker. https://docs.docker.com/engine/install/*

Go to project directory:

```console
$ cd test_django
```

Run command

```console
$ docker-compose up -d
```

**First run make take a bit longer.**

### Step 3: Run migrations:

In project root directory run command:

```console
$ ./docker/manage.sh migratemigrations
```

### Step 4: Open project in browser:

Now you should be able to open two URLS:

* `http://localhost:8000/` Django REST backend url
* `http://localhost:3000/` Frontend client
