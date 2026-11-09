
# TaskManager

## Descripción del proyecto

TaskManager es una aplicación para la gestión de tareas personales. Su objetivo es permitir el registro y la consulta de actividades mediante una API REST, almacenando la información en una base de datos MySQL.

El proyecto utiliza una arquitectura basada en contenedores Docker, facilitando la ejecución y comunicación entre los diferentes servicios.

## Objetivos

- Desarrollar un backend para gestionar tareas.
- Implementar una API REST utilizando Node.js y Express.
- Almacenar la información en una base de datos MySQL.
- Implementar contenedores mediante Docker.
- Administrar los servicios utilizando Docker Compose.
- Gestionar el código fuente mediante GitHub.

## Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| Node.js | Entorno de ejecución del backend |
| Express | Framework para desarrollar la API REST |
| MySQL 8.4 | Sistema de gestión de bases de datos |
| Docker | Ejecución de servicios en contenedores |
| Docker Compose | Administración de los contenedores |
| GitHub | Control de versiones y colaboración |

## Arquitectura del proyecto

El sistema está compuesto por dos servicios principales:

**Backend:** desarrollado con Node.js y Express. Procesa las solicitudes HTTP y permite registrar y consultar tareas.

**Database:** utiliza MySQL para almacenar la información de las tareas.

Ambos servicios se ejecutan en contenedores independientes y se comunican mediante una red interna administrada por Docker Compose.

## Funcionalidades implementadas

- Consultar las tareas registradas.
- Crear nuevas tareas.
- Almacenar tareas en MySQL.
- Recuperar información desde la base de datos.
- Ejecutar el backend y MySQL mediante Docker Compose.

## Estructura del proyecto

```text
TaskManager/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── database/
│   └── init.sql
│
├── evidencias/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Requisitos

- Docker Desktop.
- Git.
- Visual Studio Code (recomendado).

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/Davidtfer/TaskManager.git
```

2. Entrar en la carpeta:

```bash
cd TaskManager
```

3. Construir e iniciar los servicios:

```bash
docker compose up -d --build
```

4. Verificar los contenedores:

```bash
docker ps
```

5. Consultar las tareas desde el navegador:

```text
http://localhost:3000/tasks
```

## Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| GET | / | Consultar estado del backend |
| GET | /tasks | Consultar todas las tareas |
| POST | /tasks | Registrar una nueva tarea |

### Ejemplo de creación de una tarea

Solicitud POST a `/tasks`:

```json
{
  "title": "Estudiar integración de software",
  "description": "Completar la entrega de la semana 3"
}
```

## Estado del proyecto

El proyecto cuenta con un backend funcional, una base de datos MySQL y dos servicios desplegados mediante Docker Compose. Se han realizado pruebas de creación y consulta de tareas para verificar la comunicación entre los contenedores.

## Autor

David Trujillo

Proyecto académico de Integración de Software.

Politécnico Grancolombiano.
