# DATABASE MIGRATIONS

## PostgreSQL

- **Users Table:**

  ```sql
  CREATE TABLE Users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      name VARCHAR(255),
      surname VARCHAR(255),
      age INTEGER,
      country VARCHAR(255),
      avatar TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Goals Table:**

  ```sql
  CREATE TABLE Goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(255),
    color VARCHAR(50),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **Progress Table:**
  ```sql
  CREATE TABLE Progress (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
      goal_id INTEGER REFERENCES Goals(id) ON DELETE CASCADE,
      status VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

## MongoDB

MongoDB does not require predefined migrations like SQL databases. Ensure your MongoDB collections match the defined schema in your application code.
