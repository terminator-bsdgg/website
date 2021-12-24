const permissionUser = 0;
  const permissionModerator = 1;
  const permissionAdministrator = 2;
  const openTermin = "OPEN";
  const reservedTermin ="RESERVED"
  var fullScreenModal = document.getElementById("fullScreenModal");
  var data = {
    //angemeldeter Benutzer
    userId: "Administrator", //SQL varchar(50) Not Null
    userPermission: permissionAdministrator, //SQL int Not Null default 0
    calendarTable: [
      //Termine
      {
        userId: "Administrator", //Not Null
        roomId: "Raum 1", //Not Null
        timePeriodFrom: "11.11.21 08:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 09:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: reservedTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "Administrator", //Not Null
        roomId: "Raum 1", //Not Null
        timePeriodFrom: "11.11.21 10:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 11:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: openTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "einModerator", //Not Null
        roomId: "Raum 1", //Not Null
        timePeriodFrom: "11.11.21 06:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 07:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: openTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "einModerator", //Not Null
        roomId: "Raum 2", //Not Null
        timePeriodFrom: "11.11.21 06:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 07:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: reservedTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "einModerator", //Not Null
        roomId: "Raum 2", //Not Null
        timePeriodFrom: "11.11.21 08:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 09:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: openTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "einBenutzer", //Not Null
        roomId: "Raum 3", //Not Null
        timePeriodFrom: "11.11.21 08:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 09:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: openTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
      {
        userId: "einBenutzer", //Not Null
        roomId: "Raum 1", //Not Null
        timePeriodFrom: "11.11.21 08:30", //SQL TIME Format Mot Mull
        timePeriodTo: "11.11.21 09:30", //SQL TIME Format Not Null
        reference: "", //SQL TEXT Not Null
        contactMail: "", //SQL varchar(50)
        terminStatus: reservedTermin, //SQL varchar(20) Not Null default: 'OPEN'
      },
    ],
    //Räume
    roomTable: [
    {
      roomId: "Raum 1", //SQL varchar(20) Not Null
      ipAdress: "", //SQL varchar(20) Not Null
      deviceId: "1", //SQL varchar(20) Not Null
      lastRead: "", //SQL TIME Not Null
    },
    {
      roomId: "Raum 2", //SQL varchar(20) Not Null
      ipAdress: "", //SQL varchar(20) Not Null
      deviceId: "2", //SQL varchar(20) Not Null
      lastRead: "", //SQL TIME Not Null
    },
    {
      roomId: "Raum 3", //SQL varchar(20) Not Null
      ipAdress: "", //SQL varchar(20) Not Null
      deviceId: "3", //SQL varchar(20) Not Null
      lastRead: "", //SQL TIME Not Null
    },
   ],
   //Administration
   administrationTable: [
     {
      userId: "Administrator", //SQL varchar(50) Not Null
      userPermission: permissionAdministrator, //SQL int Not Null default 0
     },
     {
      userId: "zweiterModerator", //SQL varchar(50) Not Null
      userPermission: permissionModerator , //SQL int Not Null default 0 
     },
     {
      userId: "einModerator", //SQL varchar(50) Not Null
      userPermission: permissionModerator , //SQL int Not Null default 0
     },
     
     {
      userId: "einBenutzer", //SQL varchar(50) Not Null
      userPermission: permissionUser, //SQL int Not Null default 0
     },
     {
      userId: "zweiterBenutzer", //SQL varchar(50) Not Null
      userPermission: permissionUser, //SQL int Not Null default 0
     },
   ],
  };