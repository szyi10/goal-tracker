# DATABASE SCHEMA

## PostgreSQL (primary database)

### `Users` Table

- `id` SERIAL PRIMARY KEY
- `username` VARCHAR(255) NOT NULL
- `password` VARCHAR(255) NOT NULL
- `email` VARCHAR(255) NOT NULL
- `name` VARCHAR(255)
- `surname` VARCHAR(255)
- `age` INTEGER
- `country` VARCHAR(255)
- `avatar` TEXT
- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

### `Goals` Table

- `id` SERIAL PRIMARY KEY
- `user_id` INTEGER REFERENCES Users(id) ON DELETE CASCADE
- `title` VARCHAR(255) NOT NULL
- `description` TEXT
- `icon` VARCHAR(255)
- `color` VARCHAR(50)
- `start_date` DATE
- `end_date` DATE
- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

### `Progress` Table

- `id` SERIAL PRIMARY KEY
- `user_id` INTEGER REFERENCES Users(id) ON DELETE CASCADE
- `goal_id` INTEGER REFERENCES Goals(id) ON DELETE CASCADE
- `status` VARCHAR(50)
- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

## MongoDB (secondary database)

### Kolekcja `Achievements`

- `user_id` INTEGER
- `goal_id` INTEGER
- `achievement` VARCHAR(255)
- `description` TEXT
- `date` DATE
