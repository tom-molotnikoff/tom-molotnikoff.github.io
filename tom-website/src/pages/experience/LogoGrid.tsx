import { useEffect, useState } from "react";
import LogoPopover from "./LogoPopover";

export type Logo = {
  name: string;
  file: string;
  description: string;
};

function LogoGrid() {
  const logos: Logo[] = [
    {
      name: "Active Directory",
      file: "active_directory.png",
      description:
        "Used for authentication and directory services in enterprise environments. I've used this to manage user access and permissions in software testing projects. I've written scripts to fill LDAP servers with test data and junk to mimic real-world scenarios.",
    },
    {
      name: "Ansible",
      file: "ansible.png",
      description:
        "Automated configuration management and deployment for distributed systems. This is particularly useful for provisioning cloud-based infrastructure reliably and consistently, I've used it to set up containerised analytics platforms using Docker, Apache Spark, Hive and Ceph.",
    },
    {
      name: "Apache Hadoop",
      file: "apache_hadoop.png",
      description:
        "Big data storage and processing. I've seen a whole range of these, from Cloudera's new Private Cloud Base back to Hortonworks 2.6.5. I've built, broken, fixed and broken them again and again.",
    },
    {
      name: "Apache Hive",
      file: "apache_hive.png",
      description:
        "Data warehouse software facilitating reading, writing, and managing large datasets. It's a pain to work with, but there's some joy in the madness. I've worked with this extensively, I've always got the codebase cloned on my machine.",
    },
    {
      name: "Apache Iceberg",
      file: "apache_iceberg.png",
      description:
        "High-performance table format for large analytic datasets. It's a newer technology that I've been exploring recently, it's cool to see something fixing the historical issues that Hive has seen. I've configured Databricks to play nicely with Iceberg tables, I've set up REST catalogs, and I've hacked together Hive catalogs.",
    },
    {
      name: "AWS",
      file: "aws_logo.png",
      description:
        "Comprehensive cloud computing platform offering a wide range of services. I mostly stick to the S3, SQS, Glue, EC2 and EMR services, but I have played with AWS Amplify a little.",
    },
    {
      name: "AWS S3",
      file: "aws_s3.png",
      description:
        "Scalable object storage service for data backup, archiving, and analytics. In testing migration software, it is frequently the source or destination for data. I've hooked S3 into Hadoop clusters using the S3a implementation.",
    },
    {
      name: "Azure",
      file: "azure.png",
      description:
        "Cloud computing service created by Microsoft for building, testing, deploying, and managing applications. I primarily use Azure as the cloud platform to host my Virtual Machines, Databricks Environments and Azure Data Lake Storage Accounts.",
    },
    {
      name: "Ceph",
      file: "ceph.png",
      description:
        "Open-source software-defined storage platform providing object, block, and file storage. I'm a big fan of Ceph, mainly the AWS-API-compatibility and the smooth containerised deployment with Cephadm. I've mostly used the object storage (RADOSGW) as a data store for Iceberg tables, with bucket notifications pushed to Kafka.",
    },
    {
      name: "Cloudera",
      file: "cloudera.png",
      description:
        "Enterprise data platform for machine learning and analytics. I've only used Cloudera's Private Cloud Base and their Cloudera Distribution of Hadoop (CDH). I've built and configured these clusters to no end though.",
    },
    {
      name: "Databricks",
      file: "databricks.png",
      description:
        "Unified analytics platform for big data and AI, built on Apache Spark. Databricks is a target platform for Cirata's Data Migration software, including the conversion of Hive tables to Delta Lake tables. I've configured Unity Catalog and dived deep into the Delta Lake storage format to identify issues in migration software.",
    },
    {
      name: "Delta Lake",
      file: "delta_lake.png",
      description:
        "Storage layer that brings reliability to data lakes with ACID transactions and scalable metadata handling. I've had to really get into the weeds with this in order to identify issues in the conversion process from Hive to Delta Lake tables. It's backed by Parquet and similar to Iceberg (but slightly less scalable).",
    },
    {
      name: "Docker",
      file: "docker.png",
      description:
        "Platform for developing, shipping, and running applications in containers. In my work, I've used Docker to containerise a bunch of different Apache services, including Hadoop, Hive, Spark and Kafka. I've also defined Docker containers to serve as build nodes on Jenkins and locally, to ensure that what works for me works for everyone.",
    },
    {
      name: "Golang",
      file: "golang.png",
      description:
        "Statically typed, compiled programming language designed for simplicity and performance. Go is a recent addition for me, it is the backbone of my completely essential and not at all over-engineered home temperature monitoring system: https://github.com/tom-molotnikoff/home-temperature-monitoring.",
    },
    {
      name: "Google Cloud",
      file: "google_cloud.png",
      description:
        "Suite of cloud computing services, similar to AWS and Azure. I've used Google Cloud as a platform to host Virtual Machines, Dataproc clusters and Google Cloud Storage buckets.",
    },
    {
      name: "Google Dataproc",
      file: "google_dataproc.png",
      description:
        "Managed Spark and Hadoop service. Google's solution for automating Hadoop deployments. I've built and configured quite a few of these. Using Dataproc, I built a highly available pair of Spark/Hadoop clusters using Load Balancers and Instance Groups - Dataproc is already highly available, but it was fun.",
    },
    {
      name: "Java",
      file: "java.png",
      description:
        "High-level, class-based, object-oriented programming language. Java is everywhere, and I've used it for everything from writing Hive and HDFS data generation to building Spring applications. I've written test automation in Java using JUnit.",
    },
    {
      name: "Kafka",
      file: "kafka.png",
      description:
        "Distributed event streaming platform capable of handling trillions of events a day. I've containerised Kafka and connected it up to Ceph for Bucket Notifications. I've also connected it to IBM Spectrum Scale for their Clustered Watch functionality. I've Kerberised it too (as everything should be).",
    },
    {
      name: "Linux",
      file: "linux.png",
      description:
        "Not sure it needs a description, so I'll just list the distributions I've used: Ubuntu, CentOS, RHEL, Rocky Linux, Debian and Nix. I'm more than happy to *bash* together a little script too.",
    },
    {
      name: "MinIO",
      file: "minio.png",
      description:
        "High-performance, distributed object storage system compatible with Amazon S3. Mainly, this serves as a lightweight and free alternative to AWS S3 in internal testing. The S3 compatibiltiy makes the integration seamless.",
    },
    {
      name: "MySQL",
      file: "mysql.png",
      description:
        "Open-source relational database management system. I've had to set these up as the backend for various applications and Metastores (Hive, Polaris, etc). All my home temperature readings are stored in a containerised MySQL database.",
    },
    {
      name: "PostgreSQL",
      file: "postgresql.png",
      description:
        "Advanced open-source relational database with a strong emphasis on extensibility and standards compliance. Same deal as MySQL really, I've set it up as a Hive Metastore backend and for various applications. I usually pick MySQL though, sorry PostgreSQL.",
    },
    {
      name: "Python",
      file: "python.png",
      description:
        "High-level, interpreted programming language known for its readability and versatility. It's not my favourite language, but I can't deny the sheer volume of libraries available. I've used it to write applications to work with Apache Spark, and I've set up Flask APIs.",
    },
    {
      name: "React",
      file: "react.png",
      description:
        "JavaScript library for building user interfaces, particularly single-page applications. This website is written in React!",
    },
    {
      name: "Snowflake",
      file: "snowflake.png",
      description:
        "Cloud-based data warehousing platform that provides data storage, processing, and analytic solutions. In a similar vein to Databricks, it's a target platform for Cirata's Data Migration software. I've been following and exploring Snowflake functionality for years.",
    },
    {
      name: "Spectrum Scale",
      file: "spectrum_scale.png",
      description:
        "High-performance clustered file system for managing large-scale data. When I worked on this, it was still called GPFS, but IBM can't stick to a name. I've set up and configured Spectrum Scale clusters, and I've connected them to Kafka for Clustered Watch functionality.",
    },
    {
      name: "Spring",
      file: "spring.png",
      description:
        "Comprehensive framework for enterprise Java development. I've written some Spring applications, mainly using Spring Boot. I also implemented a customised Spring OAuth Server to use for super-customisable OAuth testing.",
    },
    {
      name: "Terraform",
      file: "terraform.png",
      description:
        "Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely and efficiently. I've used Terraform to define and deploy cloud infrastructure on Azure. It is by far my favourite way to deploy infrastructure.",
    },
    {
      name: "TypeScript",
      file: "typescript.png",
      description:
        "Superset of JavaScript that adds static typing and other features to enhance development. This website is written in TypeScript! As is the dashboard on my home temperature monitoring system.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const INTERVAL_MS_LOGO_APPEAR = 10;
  useEffect(() => {
    if (visibleCount < logos.length) {
      const timeout = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, INTERVAL_MS_LOGO_APPEAR);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, logos.length]);

  return (
    <div className="rounded-2xl shadow-lg p-3 w-full max-w-6xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 py-8 ">
        {logos.map((logo, idx) => (
          <LogoPopover
            key={logo.name}
            logo={logo}
            idx={idx}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            visibleCount={visibleCount}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoGrid;
