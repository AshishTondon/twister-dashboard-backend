set transaction read write; 

CREATE TABLE employees (
  employee_id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(20) DEFAULT NULL,
  last_name varchar(25) NOT NULL,
  email varchar(100) NOT NULL,
  phone_number varchar(20) DEFAULT NULL,
  hire_date date NOT NULL,
  job_id int NOT NULL,
  salary decimal(8,3) NOT NULL,
  manager_id int DEFAULT NULL,
  department_id int DEFAULT NULL
);