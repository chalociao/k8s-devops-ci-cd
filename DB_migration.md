# Postgres DB migration

## Method 1
### Archive old data
* Archive all 5 PostgreSQL v10 DBs using `pg_dump` and store in object storage on OTC.

### Extract Transform and Load (ETL) the data
* Extract
   * Identify and extract only essential tables/filtered rows.
   * Use WHERE clauses to reduce volume.

* Transform
   * Normalize the data.
   * Map old schema to new (e.g., rename columns, change types etc).
   * Deduplicate records.

* Load
   * Insert transformed data in batches by using staging tables initially with `pg_restore`, later merging into production tables.

### Deploy solution using Terraform (provisoning of DBs) and Airflow (DAGs to orchestrate ETL steps)

## Method 2
### Enable replication
* Enable replication on v10 Postgres DBs using `pglogical`.
* Create publications on source DBs.
* Create subscriptions on target DBs.

### Archive snapshots
* Use `pg_basebackup` or `pg_dumpall` for DB snapshots.
* Store snapshots in OTC object storage.

### Data consolidation
* Merge the replicated data into target DBs using staging schemas.
* Normalize, deduplicate the data.
* Validate data integrity, for ex. by comparing row counts before and after migration.
