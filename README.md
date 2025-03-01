# AWS Associate Solutions Architect Notes

# What do I need for doing these course(s):
- AWS account Free tier
- Domain name(optional)
- A Laptop with internet connection

### AWS Solutions Architect-Introduction
[AWS SAA-C03 Example Guide](http://awstrainingandcertification.s3.Amazonaws.com/production/AWS_certified_solutions_architect_associate_blueprint.pdf)

<a name ="toc"></a>
### Table of Contents
* [Concepts and Components](#concepts_introduction)
* [IAM](#i_am)

<a name ="concepts_introduction"></a>
# Concepts and Components:

1.   **AWS Global Infrastructure**:

    1. Regions: A place where AWS resources exists a geographical area, there are 15 regions (as of 2015).  
       Each region consists of multiple availability zones, currently 49 in total(as of 2017).  
       An Availability Zone(AZ) is simply a data center.

    2. Edge location: This is a CDN(Content-Delivery Network) endpoint. Edge locations are used by CloudFront   
       to cache files near the user where they access them.

    3. CDN: A content delivery network (CDN) is a system of distributed servers that deliver webpages,  
       and other web content to a user based on the geographic locations of the user,  
       the origin of the webpage and a content delivery server.

     There are many more edge locations than there are regions. Currently 52 edge locations around the world

2.   **Networking**:

    1. Route 53: Amazon’s DNS service, basically allows you to host your domain name with Amazon.   
       53 is the DNS port. When you open up DNS world you do this on port 53

    2. Direct connect: Allows you to connect directly to where your Virtual Private Cloud(VPC) is located  
       using connection links to Amazon data center into your VPC, and you don't need internet to access it

    3. Virtual Private Cloud: A virtual data center as a collection of AWS resources, such as EC2 instances,   
       EBS instances, and Load Balancers

    4. CloudFront: Part of the CDN, consisting of edge locations to cache your assets, like videos, large media  
       files etc.

3.   **Compute Elements**:

    1. EC2: Known as Elastic Cloud Compute, allowing one to provision instances inside your VPC, these are  
       just virtual machines in the cloud that run on AWS

    2. EC2 Container Service: highly scalable, high performance container management service, supporting Docker  
       containers, allowing you to run applications on a managed cluster of EC2 instances, eliminating the need  
       to install, operate and scale your own cluster management infrastructure

    3. Elastic Beanstalk: An easy to use service for developing and scaling web apps developed in   
       Java, Dot Net etc., we can simply upload the code and EB will automatically handle the deployment from   
       capacity provisioning, load balancing, autoscaling, app health and monitoring.

    4. Lambda: Is Serverless. Upload your code to respond to events.

    5. Lightsail: A completely brand new service introduced in 2016. Allows anyone who does not understand AWS   
       to deploy a site in a few seconds

4.   **Storage**:
    1. S3(Simple Storage Service): S3 is a file-based storage or object based storage.  
       Allows us to store files in the cloud of sizes ranging from 1 byte to 5 terabytes

    2. Glacier: Is an archiving service. Allows us to archive all our data in the Amazon cloud,  
       not immediately accessible but take 3-5 hours to restore a file from Glacier,hence used for long-term storage

    3. EFS(Elastic File service): File based storage and you can share it, you can install databases, applications.

    4. Storage gateway: A service that connects on-premise software appliance with cloud based storage   
       to provide seamless and secure integration between organizations on premise IT equipment and AWS storage infrastructure.

5.   **Databases**:

    1. RDS(Relational Database Services): Consists of elements such as SQLServer by MS, Oracle, PostgreSQL, MySQL,   
       and Amazon’s own database engine known as Aurora completely MySQL compatible db but designed to run specifically   
       on the AWS platform.

    2. DynamoDB: For NoSQL

    3. RedShift: A fast, fully-managed petabyte scaled datawarehousing solution,  
       that makes it simple and cost-effective to efficiently analyze your data using your existing BI tools.   
       It is designed from the infrastructure layer upwards to maximize performance and minimize cost.

    4. Elastic Cache: Allows/offers an in-memory caching service for the AWS platform.

6.   **Migration**
1. Snowball: This is a data transport solution that uses secure appliances to transfer large amounts of data,  
   into and out of AWS. It addresses common challenges with large-scale data transfers such as high network costs,   
   long transfer times, and security concerns.

       2. DMS(Database Migration services): This allows migration of on-premise databases to AWS cloud  
         
       3. SMS(Server Migration Service): does same work as the DMS but targets virtual machines,  
           to replicate vms to aws cloud  

7.  **Analytics**:

    1. Athena: SQL queries on S3.

    2. Kinesis:
        - Is a fully-managed service for real-time processing of streaming data at massive scale.
        - Can continuously change and store terabytes of data per hour from several sources such as  
          website clickstreams, social media, location tracking event.
        - With Kinesis client library ACL, we can build Amazon Kinesis apps,  
          and use streaming data to power real time dashboards, generate alerts, implement dynamic pricing and  
          advertising or more
        - We can emit data from Kinesis to other AWS services such as S3, redShift, Elastic MapReduce, and lambda

    3. ElasticMapReduce(EMR):
        - A web service that makes it easy to quickly and cost-effectively process vast amounts of data.
        - Uses Hadoop, an open source framework to distribute your data and process across a resizeable cluster of   
          Amazon EC2 instances.
        - It can also run other distributed framework such as Spark and Presto.
        - EMR is used in a variety of applications including log analysis, web-indexing, data warehousing,   
          machine learning, financial analysis, scientific simulation, and Bioinformatics,   
          customers launch millions of Amazon’s EMR clusters each year
        - Allows you root access(i.e. login via SSH)

    4. Cloud Search / Elastic Search:
        - Search engine for your website or your application,
        - Cloud search is fully managed service provided by AWS, Elastic search uses open source framework

    5. Data Pipeline: Allows to move data from one place to another

    6. Quick Sight: used for creating visualizations, dashboards for BI/Analytics

8.   **Security and Identity**:

    1. IAM(Identity Access Management):
        - Enables you to securely control access to AWS services and resources for your users
        - We can create and manage AWS users and groups and use permissions to allow and  
          deny their access to AWS resources

    2. Inspector: An agent to install on vms to inspect and does security reporting on whats going on

    3. Certificate Manager: Gives free SSL certificates for your domain names.

    4. Directory Service: A way of using active directory which you use with Microsoft with AWS.

    5. WAF(Web application Firewalls): Application level protection to your website .

9.   **Application Services**:

    1. Step Functions: A way of visualizing what's going on inside your application.

    2. API Gateway: Acts as a door to create, publish, monitor, maintain, and secure API at scale using AWS.

    3. AppStream: Streaming desktop applications to your users.

    4. SWF(Simple Work Flow Service): Helps developers to build, run, and scale background jobs that have parallel   
       or sequential steps.

    6. Elastic Transcoder:
        - A media transcoding service in the cloud.
        - Designed to be highly-scalable, easy to use in a cost-effective way for developers and businesses to  
          convert or transcode media files from their source formats to version that will play on devices like  
          smartphones, tablets etc.

10. **Deployment and Management**:

    1. CloudWatch:
        - A monitoring service for AWS Cloud resources and the apps you run on AWS
        - Used for collecting and tracking metrics, collect and monitor log files, and set alarms
        - It can monitor AWS resources, such as EC2 instances, DynamoDB tables, and RDS DB instances,  
          as well as custom metrics generated by your apps and services, and log any files your app generates
        - We can use it to gain system-wide visibility into resource utilization, app performance,  
          and operational health.

    2. CloudTrail:
        - A logging, and auditing service, a web service that records API call for your account   
          and deliver log files to you.
        - We can get history of AWS API calls for your account, including calls made by AWS management console,  
          SDKs, Command line tools, and high level AWS services such as AWS cloud formation

    3. Cloud Formation:
        - Gives developers, and sys admins an easy way to create and manage a collection of related AWS resources,  
          provisioning and updating them in an orderly and predictable fashion.

    4. OpsWorks: Automating deployments using chef.

    5. Config Manager: proactively monitor changes to your environment.

    6. Service Catalog:
        - Allows you as an enterprise to build out what it is that you authorize within your organization.

    7. Trusted Advisor: tips on cost optimization, performance optimization, security fixes etc.

11.  **Developer Tools**:
    1. CodeCommit: GitHub's way of storing your code in the cloud.
    2. CodeBuild: way of compiling code.
    3. CodeDeploy: deploying code to your Ec2 instances.
    4. CodePipeline: keeping track of different versions of your code.

12.  **Mobile Services**:
    1. Mobile Hub: Add, configure features for your mobile apps. It is its own console for mobile apps.
    2. Cognito: Makes easy for singup and sign into your apps.
    3. Device Farm: Improve quality of ios, aos, fireos, by quickly, and securely testing on 100 smartphones.
    4. Mobile analytics: allows to simply and cost effectively analyze app usage data.
    5. Pinpoint: Google analytics for your mobile apps.

13.  **Business Productivity**:
    1. WorkDocs: Securely storing work documents in the cloud.
    2. WorkMail: Exchange for AWS, sending, receiving emails.

14.  **Internet Of Things**:  
     Keeping track of thousands, millions or billions of devices out there

15.  **Desktop & AppStreaming**:
    1. WorkSpaces: Basically a VDI. Desktop in the cloud.
    2. AppStream 2.0: Streaming desktop apps to your users.

16.  **Artificial Intelligence**:
    1. Alexa: Voice service in the cloud.
    2. Lex: No longer need echo to communicate.
    3. Polly: Text to voice service.
    4. Machine Learning:
    5. Rekognition

17.  **Messaging**:
    1. SNS(Simple Notification Service):
        - A fast, flexible, fully-managed push messaging service, makes it simple and cost-effective to push  
          notifications to all mobile devices including Apple, Google, FireOS, and Windows devices,  
          and Android devices as well
    2. SQS(Simple Queue Service):
        - A fast reliable, scalable and fully-managed messaging queueing service.
        - SQS makes it simple and cost-effective to decouple the components of a cloud application.
        - We can use SQS to transmit any volume of data at any level of throughput, without losing messages or   
          other services to be available.
    3. SES(Simple Email Service):
        - A cost-effective outbound only email sending service.
        - We can send transactional emails,marketing messages etc, and get to pay for what we use.
        - Along with high-deliverability SES provides, easy, real-time access to your sending statistics,   
          and built-in notifications for bounces, complaints, and deliveries to help you find tune your   
          cloud-based email sending strategy

After AWS resources are deployed we can update or modify in a controlled manner,  
and predictable way in effect applying version control to your AWS infrastructure.  
**Amazon Web Services offer 3 different levels of support, namely Enterprise Business, and Developer**  
[Back to Table of Contents](#toc)
     
     