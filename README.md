## Flexmoney Assignment

-> I made an Yoga Enrollement Form with Details like email,name,batch,age.
-> User can register it by enrolling in it.
-> As there are batch with different timings, so user can change the Batch as well.

### How DB is Designed ?
Database: YogaClass
Collection: Participants
- _id (ObjectId, Primary Key)
- name (String)
- age (Number)
- email (String)

Collection: Payments
- _id (ObjectId, Primary Key)
- participantId (ObjectId, Foreign Key referencing Participants)
- paymentDate (Date)
- amount (Number)

## Tech Stack Used:
## ReactJS,NodeJS,ExpressJS,MongoDB.

 # Screenshots of the Application:-
  ### Starting Page<br />
 <img src="assets/Screenshot (370).png" width="1000" height="500"><br />


 ### User Added Page<br />
 <img src="assets/Screenshot (371).png" width="1000" height="500"><br />



 ### Modifying Batch Page<br />
 <img src="assets/Screenshot (368).png" width="1000" height="500"><br />

  ### MongoDB database Batch Page<br />
 <img src="assets/Screenshot (372).png" width="1000" height="500"><br />

