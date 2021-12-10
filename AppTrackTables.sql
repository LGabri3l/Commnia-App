CREATE TABLE Builder(
IdBuilder INT PRIMARY KEY IDENTITY(1,1),
AccountName VARCHAR (50),
ContactName VARCHAR(20),
Address VARCHAR(50),
ABN VARCHAR(10),
);

CREATE TABLE Project(
IdProject INT PRIMARY KEY IDENTITY(1,1),
Name VARCHAR(50),
Address VARCHAR(50),	
Town VARCHAR(50), 	
Council VARCHAR(50),	
State VARCHAR(50), 	
ApproximateValue INT,	
Construction VARCHAR(50), 
StartDate DATE,
ExpectedConstructionEndDate DATE,
IdBuilder INT FOREIGN KEY REFERENCES Builder(IdBuilder)
);

CREATE TABLE AppTrackUser(
IdUser INT PRIMARY KEY IDENTITY(1,1),
UserName VARCHAR(50),
UserPassword VARCHAR(50)
);

