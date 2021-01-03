---
title: 'Security+ Missed Questions for Study'
date: '2020-01-01'
---
***
***Question 20***
***
>> During a security audit, you discovered that customer service employees have
been sending unencrypted confidential information to their personal email
accounts via email. What technology could you employ to detect these
occurrences in the future and send an alert to the appropriate security
personnel?

**Answers**:
* SSL (Incorrect)
* UTM (Incorrect)
* DLP (Correct)
* MDM

**Explanation:**
* Data loss prevention (DLP) software detects potential data breaches/data
ex-filtration transmissions and prevents them by monitoring, detecting and
blocking sensitive data while in-use, in-motion, and at-rest. This can be
configured to detect and alert on future occurences of this issue. Secure
Socket Layer (SSL) is a distraction in this question since the questions
asked about information being sent unencrypted. Using SSL, the connection
between the client and the email server could be enrypted, but the
information is still be sent to an employee's personal email account and
this equates to a loss of control over the confidential data by the company.
Mobile Device Management (MDM) software is used for the configuration and
securing of mobile devices like smartphones and tablets. Unified Threat
Management (UTM) is a device that combines the functions of a firewall,
anti-malware solution, and IDS into a single piece of hardware. Some UTM's
may the functionality of a DLP, but the answer of a DLP is a better answer
to this question.
---
***
***Question 21***
***
>> You have been asked to determine if one of your company’s web servers is
vulnerable to a recently discovered attack on an old version of SSH. Which
technique should you use to determine the current version of SSH running on
the web server?

**Answers**
* Vulnerability scan​
* Protocol analysis​
* Passive scan
* Banner grabbing (Correct)

**Explanation**
* Banner grabbing is conducted by actively connecting to the server using
telnet or netcat and collecting the response from the web server. This
banner usually contains the operating system being run by the server as well
as the version number of the service (SSH) being run. This is the fastest
and easiest way to determine the version of SSH being run on this web
server. While it is possible to use a vulnerability scanner, protocol
analyzer, or to conduct a passive scan to determine the version of SSH,
these are more time consuming and not fully accurate methods to determine
the version being run.
---
***
***Question 23***
***
>> During your lunch break, your phone begins to receive unsolicited messages.
What might this be an example of?

**Answers**
* Packet sniffing
* Bluesnarfing
* Bluejacking (Correct)
* Geotagging

**Explanation**
* Bluejacking is the sending of unsolicited messages over Bluetooth to
Bluetooth-enabled devices such as smartphones and tablets. Bluesnarfing, on
the other hand, involves taking data from a smartphone or tablet over
Bluetooth without permission. Bluetooth has a very limited range, so the
attacker is likely within 10 meters of the victimized device. Geotagging
involves embedded the geolocation coordinates into a piece of data (normally
a photo or video). Packet sniffing is a passive method of collecting network
traffic for follow-on analysis at a later time.
---
***
***Question 24***
***
>> Tim, a help desk technician, receives a call from a frantic executive who
states that their company issued smartphone was stolen during their lunch
meeting with a rival company’s executive. Tim quickly checks the MDM
administration tool and identifies that the user’s smartphone is still
communicating with the MDM and displays the location of the device on a map.
What should Tim do next to ensure the data on the stolen device remains
confidential and inaccessible to the thief??

**Answers**
* Reset the device's password
* Perform a remote wipe of the device (Correct)
* Remotely encrypt the device
* Identify the IP address of the smartphone
  
**Explanation**
* To ensure the data remains confidential and is not accessed by the thief,
Tim should perform a remote wipe of the device from the MDM. This will
ensure any and all corporate data is erased prior to anyone accessing it.
Additionally, Tim could reset the device's password, but if the thief is
able to guess or crack the password, then they would have access to the
data. Identifying the IP address of the smartphone is not a useful step in
protecting the data on the device. Additionally, devices should be encrypted
BEFORE they are lost or stolen, not after, therefore the option to remotely
encrypt the device was provided as a wrong answer and distraction.
---
***
***Question 31***

    You have recently been hired as a security analyst at Small Time
    Corporation. On your first day, your supervisor begins to explain the way
    their network is configured, showing you the physical and logical placement
    of each firewall, IDS sensor, host-based IPS installations, the networked
    spam filter, and the DMZ. What best describes how these various devices are
    incorporated into the network for the best level of security?
  answers:
    - ​
    - Network segmentation
    - (Incorrect)
    - ​
    - Defense in depth
    - (Correct)
    - ​
    - UTM security appliance
    - ​
    - Load balancers
  explanation: >-
    Explanation

    Defense in depth is the concept of layering various network appliances and
    configurations to create a more secure and defensible architecture. Small
    Time Corporation appears to be using various host-based and network-based
    devices to help ensure there are multiple layers of security in the network.
- text: >-
    Question 32: Incorrect

    Your company utilizes both a wired network throughout the building to
    provide network connectivity. You are concerned that a visitor might be able
    to plug their laptop into a CAT 5e wall jack in the lobby and access the
    corporate network. What technology should you utilize to prevent the user
    from gaining access to network resources if they are able to plug their
    laptop into the network?
  answers:
    - ​
    - UTM
    - ​
    - NAC
    - (Correct)
    - ​
    - DMZ
    - (Incorrect)
    - ​
    - VPN
  explanation: >-
    Explanation

    Network Access Control is an approach to computer security that attempts to
    unify endpoint security technology, user or system authentication and
    network security enforcement. NAC restricts the data that each particular
    user can access, as well as implementing anti-threat applications such as
    firewalls, antivirus software and spyware-detection programs. NAC also
    regulates and restricts the things individual subscribers or users can do
    once they are connected. If a user is unknown, the NAC can quarantine the
    device from the network upon connection.
- text: >-
    Question 36: Incorrect

    Jason has installed multiple virtual machines on a single physical server.
    He needs to ensure that the traffic is logically separated between each
    virtual machine. How can Jason best implement this requirement?
  answers:
    - ​
    - Configure a virtual switch on the physical server and create VLANs
    - (Correct)
    - ​
    - >-
      Conduct system partitioning on the physical server to ensure the virtual
      disk images are on different partitions
    - ​
    - Create a virtual router and disable the spanning tree protocol
    - (Incorrect)
    - ​
    - Install a virtual firewall and establish an access control list
  explanation: >-
    Explanation

    A virtual switch is a software application that allows communication between
    virtual machines. A virtual local area network (VLAN) is a hardware-imposed
    network segmentation created by switches. This solution will provide logical
    separation of each virtual machine through the use of VLANs on the virtual
    switch.
- text: >-
    Question 37: Incorrect

    Your organization wants to install a new accounting system and is
    considering moving to a cloud-based solution to reduce cost, reduce the
    information technology overhead costs, to improve reliability, and to
    improve availability. Your Chief Information Officer is supportive of this
    move since it will be more fiscally responsible, but the Chief Risk Officer
    is concerned with housing all of the company’s confidential financial data
    in a cloud provider’s network that might be shared with other companies.
    Since the Chief Information Officer is determined to move to the cloud, what
    type of cloud-based solution would you recommend to account for the Chief
    Risk Officer’s concerns?
  answers:
    - ​
    - PaaS in a community cloud
    - ​
    - SaaS in a private cloud
    - (Correct)
    - ​
    - PaaS in a hybrid cloud
    - (Incorrect)
    - ​
    - SaaS in a public cloud
  explanation: >-
    Explanation

    A SaaS (Software as a Service) solution best describes an accounting system
    or software that is being used as part of a cloud service. This meets the
    CIO's requirements. To mitigate the concerns of the Chief Risk Officer, you
    should use a private cloud solution. This type of solution ensures that the
    cloud provider does not comingle your data with the data of other customers
    and providers dedicated servers and resources for your company's use only.
- text: |-
    Question 43: Incorrect
    What type of access control provides the strongest level of protection?
  answers:
    - ​
    - RBAC
    - ​
    - MAC
    - (Correct)
    - ​
    - DAC
    - (Incorrect)
    - ​
    - ABAC
  explanation: >-
    Explanation

    Manadatory Access Control (MAC) requires all access to be predefied based on
    system classification, configuration, and authentication. MAC is commonly
    used in highly centralized environments and usually relies on a series of
    labels, such as classification levels of the data.
- text: >-
    Question 46: Incorrect

    Assuming that Company X trusts Company Y, and Company Y trusts Company Z,
    then we can assume Company X trusts Company Z, too. What concept of PKI does
    this represent?
  answers:
    - ​
    - Domain level trust
    - ​
    - Certificate authority trust
    - (Incorrect)
    - ​
    - Public key trust
    - ​
    - Transitive trust
    - (Correct)
  explanation: >-
    Explanation

    Transitive trust occurs when X trusts Y, and Y trusts Z, therefore X trusts
    Z. This is because the trust flows through the second party (Y in this
    example) to the third party (Z).
- text: >-
    Question 52: Incorrect

    Sean has been asked to write a new security policy to reduce the risk of
    employees working together to steal information from the corporate network.
    Which of the following policies should Sean write to counter this threat?
  answers:
    - ​
    - Policy that requires mandatory vacations
    - (Correct)
    - ​
    - Policy that requires least privilege
    - (Incorrect)
    - ​
    - Privacy policy
    - ​
    - Acceptable use policy
  explanation: >-
    Explanation

    A mandatory vacation policy requires that all users take time away from work
    to enjoy a break from the day to day rountines of their job. But, there is a
    major side benefit to mandatory vacations in regards to your company's
    security posture. By requiring mandatory vacations, it will require the
    company to have another employee fill in for the vacationing employee's
    normal roles and responsibilities. By doing this, the employee who is
    filling in might come across fraud, abuse, or theft that the vacation
    employee is a part of. The concept of least privilege may not stop this
    theft from occuring, since two employees could work together to steal
    information that each of them has access to as part of their job. Also,
    acceptable use simply outlines the types of activities that are allowed and
    not allowed, it won't prevent theft from occurring. A privacy policy
    discusses how information should be properly stored and secured, but this
    won't stop an employee from stealing information or detecting if information
    was stolen.
- text: >-
    Question 55: Incorrect

    You have been asked by the incident response team leader to perform a
    forensic examination on a workstation that is suspected to be infected with
    malware. You remember from your training that you must collect digital
    evidence in the proper order to protect it from being changed during your
    evidence collection efforts. Which of the following describes the correct
    sequence to collect the data from the workstation?
  answers:
    - ​
    - 'RAM, CPU cache, Swap, Hard drive'
    - (Incorrect)
    - ​
    - 'Hard drive, Swap, CPU Cache, RAM'
    - ​
    - 'CPU Cache, RAM, Swap, Hard drive'
    - (Correct)
    - ​
    - 'Swap, RAM, CPU Cache, Hard drive'
  explanation: >-
    Explanation

    The order of volatility states that you should collect the most volatile
    (least persistent) data first, and the least volatile (most persistent) data
    last. The most volatile data resides in the CPU Cache, since this small
    memory cache is overwritten quickly during computer operations. Next, you
    should collect the data in the system memory (RAM) since it will be erased
    if the workstation is shutdown or the power is lost. Third, you should
    collect the Swap file, which is a form of temporary memory located on the
    hard disk. These files are also overwritten frequently during operations.
    Finally, you should collect the data from the hard disk, as it is the least
    volatile and remains on the hard disk until a command is given to delete it.
    Data on a hard disk remains even when power is removed from the workstation.
- text: >-
    Question 56: Incorrect

    You have been hired as a consultant to Small Time Corp Incorporated to
    review their current disaster recovery plans. The CEO has requested that the
    plans ensure that the company can limit downtime in the event of a disaster,
    but due to staffing concerns he simply cannot approve the budget to
    implement or maintain a fully redundant offsite location to ensure a 99.999%
    availability. Based on that limitation, what should you recommend to the CEO
    of Small Time Corp?
  answers:
    - ​
    - >-
      Recommend that the company install a set of redundnat servers to another
      part of the company's office building
    - ​
    - >-
      Recommend that the company retain all hardware at their office building
      but ship their backups to an offsite facility for storage
    - (Incorrect)
    - ​
    - >-
      Recommend that the company retain their backups in their office building,
      but install redundant services in a colocated datacenter within a
      different company
    - ​
    - >-
      Recommend that the redundant hardware be maintained at the offsite
      location and configure it to be ready for the recovery of the company's
      backup data when needed
    - (Correct)
  explanation: >-
    Explanation

    A warm site provides some of the capabilities of a hot site, but it requires
    the customer to do more work to become operational. Warm sites provide
    computer systems and compatible media capabilities. If a warm site is used,
    administrators and other staff will need to install and configure systems to
    resume operations. For most organizations, a warm site could be a remote
    office, a leased facility, or another organization with which yours has a
    reciprocal agreement. By placing your redundant hardware at the offsite
    location and configuring it to be ready for recovery when needed, the
    company can have a higher level of availability than a cold site, but not
    have the full personnel costs involved with a hot site. A hot site would
    ensure that the offsite location has all the hardware, equipment, personnel,
    and data installed and ready to provide services at all times. Maintaining a
    hot site is much more expensive than a warm site. It is not recommended that
    your redundant servers are located within the same building, since a fire,
    flood, or other disaster could destroy your primary and redundant
    capabilities. Retaining the hardware at the office building but shipping the
    backups offsite is more in line with the description of a cold site. This
    would also not provide high levels of availability, since the systems would
    need to be setup, configured, and made ready for use.
- text: >-
    Question 63: Incorrect

    Sarah is working at a startup that is focused on making secure banking apps
    for smartphones. Her company needs to select an asymmetric encryption
    algorithm to encrypt the data being used by the app. Due to the need for
    high security of the banking data, the company needs to ensure that whatever
    encryption they use is consider strong, but also need to minimize the
    processing power required since it will be running on a mobile device with
    lower computing power. Which algorithm should Sarah choose in order to
    provide the same level of high encryption strength with a lower overall key
    length?
  answers:
    - ​
    - Diffie-Hellman
    - ​
    - RSA
    - (Incorrect)
    - ​
    - ECC
    - (Correct)
    - ​
    - Twofish
  explanation: >-
    Explanation

    Elliptic curve cryptography (ECC) is an approach to public-key cryptography
    based on the algebraic structure of elliptic curves over finite fields. One
    of the main benefits of ECC over non-ECC cryptography is an application can
    achieve the same level of security provided by non-ECC cryptography while
    using a shorter key length. For example, an ECC algorithm using a 256-bit
    key length is just as strong as a RSA or Diffie-Hellman algorithm using a
    3072-bit key length.
- text: >-
    Question 65: Incorrect

    Frank and John have started a secret club together. They want to ensure that
    when they send messages to each other, they are truly unbreakable. What
    encryption key would provide the STRONGEST and MOST secure encryption?
  answers:
    - ​
    - DES with a 56-bit key
    - ​
    - AES with a 256-bit key
    - (Incorrect)
    - ​
    - ECC with a 256-bit key
    - ​
    - Randomized one-time use pad
    - (Correct)
  explanation: >-
    Explanation

    The only truly unbreakable encryption is one that uses a one-time use pad.
    This ensures that every message is encrypted with a different shared key
    that only the two owners of the one-time use pad would know. This technique
    ensures that there is no pattern in the key for an attacker to guess or
    find. Even if one of the messages could be broken, all of the other messages
    would remain secure since they use different keys to encrypt them.
    Unfortunately, one-time use pads require two identical copies of the pad be
    produced and distributed securely before use. DES and AES both rely on a
    single shared secret key, making it vulnerable to attack. DES has already
    been broken, while AES remains unbroken (today). With enough time and
    computing power, though, and AES key could be discovered. RSA is also
    vulnerable to attack with enough time and computing power.
- text: >-
    Question 67: Incorrect

    In an effort to increase the security of their passwords, Ted’s company has
    added a salt and cryptographic hash to their passwords prior to storing
    them. To further increase security, they run this process many times before
    storing the passwords. What is this technique called?
  answers:
    - ​
    - Key stretching
    - (Correct)
    - ​
    - Rainbow table
    - ​
    - Salting
    - (Incorrect)
    - ​
    - Collision resistance
  explanation: >-
    Explanation

    In cryptography, key stretching techniques are used to make a possibly weak
    key, typically a password or passphrase, more secure against a brute-force
    attack by increasing the resources it takes to test each possible key. The
    question describes one such key stretching technique.
- text: >-
    Question 68: Incorrect

    You just received an email from Bob, your investment banker, stating that he
    completed the wire transfer of $10,000 to your bank account in Vietnam. The
    problem is, you don’t have a bank account in Vietnam! You immediately call
    Bob to ask what is happening. Bob explains that he received an email from
    you requesting the transfer. You insist you never sent that email to Bob
    initiating the transfer. What aspect of PKI is used to BEST ensure that a
    sender actually sent a particular email message?
  answers:
    - ​
    - CRL
    - ​
    - Trust models
    - (Incorrect)
    - ​
    - Recovery agents
    - ​
    - Non-repudiation
    - (Correct)
  explanation: >-
    Explanation

    Non-repudiation occurs when a sender cannot claim they didn’t send an email
    when they did. To achieve non-repudiation, a digital signature should be
    attached to each email sent. This digital signature is comprised of a
    digital hash of the email’s contents, and then encrypting that digital hash
    using the sender’s private key. The receiver can then unencrypt the digital
    hash using the sender’s public key to verify the integrity of the message.
- text: >-
    Question 69: Incorrect


    (Sample Simulation – On the real exam for this type of question, you would
    have to rearrange the steps into the proper order by dragging and dropping
    them into place.)


    What is the correct order of the Incident Response process?
  answers:
    - ​
    - >-
      Identification, Containment, Eradication, Preparation, Recovery, and
      Lessons Learned
    - (Incorrect)
    - ​
    - >-
      Preparation, Identification, Containment, Eradication, Recovery, and
      Lessons Learned
    - (Correct)
    - ​
    - >-
      Containment, Eradication, Identification, Lessons Learned, Preparation,
      and Recovery
    - ​
    - >-
      Lessons Learned, Recovery, Preparation, Identification, Containment, and
      Eradication
  explanation: >-
    Explanation

    The proper order of the Incident Response process is Preparation,
    Identification, Containment, Eradication, Recovery, and Lessons Learned.
- text: |+
    Question 70: Incorrect

    Which of the following best describes the attack being illustrated?

    Larger image


  answers:
    - ​
    - Ping of Death
    - (Incorrect)
    - ​
    - XMAS Tree Attack
    - ​
    - Man in the Middle
    - ​
    - Smurf
    - (Correct)
  explanation: >-
    Explanation

    This illustrates a smurf attack. In this attack, a single ping with a
    spoofed source address is sent to the broadcast address of a network. This
    causes every device within the network to receive the single ping which
    appears to come from the device with the spoofed source address. Each
    network device then responds to the spoofed address, causing the victim
    (whos address was spoofed) to be overwhelmed with the responses to the
    initial ping.
- text: >-
    Question 71: Incorrect


    (Sample Simulation – On the real exam for this type of question, you would
    have access to the log files to determine which server on a network might
    have been affected, and then choose the appropriate actions.)


    A cybersecurity analyst has determined that an attack has occurred against
    your company’s network. Fortunately, your company uses a good system of
    logging with a centralized SYSLOG server, so all the logs are available,
    were collected, and have been stored properly. According to the
    cybersecurity analyst, the logs indicate that the database server was the
    only company server on the network that appears to have been attacked. The
    network is a critical production network for your organization, therefore
    you have been asked to choose the LEAST disruptive actions on the network
    while performing the appropriate incident response actions. Which actions do
    you recommend to as part of the response efforts?
  answers:
    - ​
    - >-
      Capture network traffic using a sniffer, schedule a period of downtime to
      image and remediate the affected server, and maintain the chain of custody
    - (Correct)
    - ​
    - >-
      Isolate the affected server from the network immediately, format the
      database server, reinstall from a known good backup
    - (Incorrect)
    - ​
    - >-
      Immediately remove the database server from the network, create an image
      of its hard disk, maintain the chain of custody
    - ​
    - >-
      Conduct a system restore of the database server, image the hard drive, and
      maintain the chain of custody
  explanation: >-
    Explanation

    Since the database server is part of a critical production network, it is
    important to work with the business to time the period of remediation to
    minimize productivity losses. You can immediately begin to capture network
    traffic since this won't affect the database server or the network (least
    intrusive) while scheduling a period of downtime in which to take a forensic
    image of the database server's hard drive. All network captures and the hard
    drive should be maintained under the chain of custody in case it is needed
    for criminal prosecution or civil action after remediation. The server
    should be remediated and brought back online once the image has been created
    of its hard drive.
