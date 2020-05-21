(gc .\web_store.sql) -replace 'SET time_zone = "\+00:00";', '' | Out-File .\web_store.sql
(gc .\web_store.sql) -replace ' DEFINER=`xkalibur`@`%`', '' | Out-File .\web_store.sql
(gc .\web_store.sql) -replace 'int\(11\)', 'INT' | Out-File .\web_store.sql
(gc .\web_store.sql) -replace 'tinyint\(4\)', 'TINYINT' | Out-File .\web_store.sql