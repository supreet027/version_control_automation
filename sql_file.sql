use qr_web;

DELETE FROM table1;
DELETE FROM qr_web.Table1;
DROP TABLE IF EXISTS qr_web.Table1;

SELECT * FROM qr_web.Table1;

CREATE TABLE qr_web.Table1 (
  hospital VARCHAR(255) DEFAULT '1001',
  service VARCHAR(255) DEFAULT 'Consult',
  mobile_no VARCHAR(20),
  token_id INT AUTO_INCREMENT,
  PRIMARY KEY (hospital, service, mobile_no),
  UNIQUE (token_id)
);
ALTER TABLE qr_web.Table1
MODIFY token_id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE qr_web.Table1 ADD COLUMN end_time TIMESTAMP DEFAULT NULL;
ALTER TABLE qr_web.Table1 ADD COLUMN action INT DEFAULT 0;

 




SELECT * FROM qr_web.Table2;
