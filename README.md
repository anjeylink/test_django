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

Install **yarn** dependencies:

```console
$ docker-compose run --rm node yarn install
```

Start project

```console
$ docker-compose up -d
```

**First run make take a bit longer.**

### Step 3: Run migrations:

In project root directory run command:

```console
$ ./docker/manage.sh migrate
```

---
**NOTE**

If you get an error trying to run migrations, it might be that PostgreSQL didn't start yet. Wait **30s ~ 1m** and try again.

---

### Step 4: Open project in browser:

Now you should be able to open two URLS:

* `http://localhost:8000/` Django REST backend url
* `http://localhost:3000/` Frontend client
