# dEmergency:

#### Project by Team nonce_ence at DotSlash Hackathon at SVNIT.

A decentralized SOS triggering service for medical emergencies,which will ensure fair allocation of the nearest hospital having availability ,to the person in need , in minimum time with a transaparency through blockchain.

<h1 align="center">
<br>
<img src="https://github.com/Sharma-Hrishabh/dEmergency_dotslash/blob/master/imgs/ss.png" />
</h1>  

## Idea Description:
The main idea of the project is to provide immediate treatment in case of Medical Emergency by allocating him a hospital which is nearest to him ,by checking avaialbility data stored on blockchain(Ethereum).

## How will it's gonna work?
Our dEmergency system can be divided into following ends:-

#### User/Client End :
This consists a simple UI with a single button,which a person will press in the case of emergency.
As soon as user clicks the button,his current location coordiantes will be taken and his name and contact details are taken ,and the nearest hospital which has availability will be alloted to him.
This will trigger two events ,one will carry information if the alloted hospital to the user,
and other will inform the hospital about the patient.

#### Admin End :
Admin End will consist of an admin who is the owner of the smart contract and has the authority to add good and licensed hospitals to the contract.<br>
During imposition of the idea,the admin authority (like government) will try to impose the idea that each hospital will be represented by a ethereum address,and<br>
During the process of adding a hospital , fields like the address(ethereum address) of the hospital ,its longitude,latitide,contact no and dynamic data like 
1.Hospital Availability <br>
2.Hospital Capacity <br>
and many real world practical information will be taken and those data will be saved on the smart contract.

#### Backend or Ethereum End :

The contract end will contain structs of Patient and Hospital,and their different mappings to access them as per use.<br>



<h1 align="center">
<br>
<img src="https://github.com/Sharma-Hrishabh/dEmergency_dotslash/blob/master/imgs/workflow.jpg" />
<br>
</h1>  

#### Dependencies and Tools:
Ethereum-Blockchain,Node JS,React JS,Metamask,Truffle Suite including express box,Ganache,Rinkeby Test-network,Python for implementation
of Voronoi Algorithm to find the closest hospital nearby the user.

We have used a famous algorithm for finding the nearest hospital from the point of emergency. It's Voronoi Diagrams.
- In mathematics, a Voronoi diagram is a partitioning of a plane into regions based on distance to points in a specific subset of the plane. That set of points (called seeds, sites, or generators) is specified beforehand, and for each seed there is a corresponding region consisting of all points closer to that seed than to any other. These regions are called Voronoi cells. The Voronoi diagram of a set of points is dual to its Delaunay triangulation.

<h1 align="center">
<br>
<img src="https://github.com/Sharma-Hrishabh/dEmergency_dotslash/blob/master/imgs/Voronoi.png" />
</h1>

### Contribute

Want to contribute? Great! Just make an issue and we'll respond or better just make a PR

## Contributors
- [Hrishabh Sharma](https://github.com/Sharma-Hrishabh) 
- [Shritesh](https://github.com/Shritesh99)
- [Anubhav Chaturvedi](https://github.com/aniforverizon)

License
----

MIT
