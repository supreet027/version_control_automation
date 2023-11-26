create database qr_web;
use qr_web;
DROP TABLE IF EXISTS qr_web.Table2;
-- Create Table2
CREATE TABLE qr_web.Table1 (
  hospital VARCHAR(255) DEFAULT '1001',
  service VARCHAR(255) DEFAULT 'Consult',
  mobile_no VARCHAR(20),
  token_id INT AUTO_INCREMENT,
  PRIMARY KEY (hospital, service, mobile_no),
  UNIQUE (token_id)
);
    CREATE TABLE qr_web.Table2 (
    username VARCHAR(255),
    password VARCHAR(255) CHECK (Password REGEXP '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$')
);


CREATE TABLE qr_web.Table3(
hospital VARCHAR(255) DEFAULT '1001',
  service VARCHAR(255) DEFAULT 'Consult',
  mobile_no VARCHAR(20),
  token_id INT AUTO_INCREMENT,
  PRIMARY KEY (hospital, service, mobile_no),
  UNIQUE (token_id)
);

INSERT INTO Table2(`username`, `password`) VALUES (	'admin', 'admin1234');



Insert into table1 (`hospital`, `service`, `mobile_no`, `token_id`) 
value ('1001', 'consult', '1134587890', '0');
Insert into table1 (`hospital`, `service`, `mobile_no`, `token_id`) 
value ('1001', 'consult', '1234567891', '0');

Insert into qr_web.Table1 (`hospital`, `service`, `mobile_no`, `token_id`) 
value ('', '', '1294567893','0');

Insert into table1 (`hospital`, `service`, `mobile_no`, `token_id`) 
value ('1001', 'consult', '1234567856','0');
Insert into table1 (`hospital`, `service`, `mobile_no`, `token_id`) 
value ('1001', 'consult', '1234522622','0');

-- to increase the value of token in table
ALTER TABLE qr_web.Table1
MODIFY token_id INT NOT NULL AUTO_INCREMENT;

DELETE FROM qr_web.Table1 WHERE token_id = 16;
update qr_web.Table1 Set action = 1 WHERE token_id=30 ;

SELECT * FROM qr_web.Table1;
SELECT *  FROM qr_web.Table2;


ALTER TABLE qr_web.Table1 ADD COLUMN end_time TIMESTAMP DEFAULT NULL;
ALTER TABLE qr_web.table1 DROP COLUMN end_time;
ALTER TABLE qr_web.Table1 DROP COLUMN timestamp;

ALTER TABLE qr_web.Table1 ADD COLUMN action INT DEFAULT 0;



drop database `qr_web`;

TRUNCATE TABLE qr_web.Table2;


SHOW GRANTS FOR 'root'@'localhost';
GRANT SELECT, INSERT ON qr_web.* TO 'root'@'localhost';
