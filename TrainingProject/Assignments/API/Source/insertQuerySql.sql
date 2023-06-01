--use BookMyShow
---locationCities

INSERT INTO LocationData (LocationId, LocationName, CountryId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'India', null, GETDATE(), 1, GETDATE(), 1),
(16, 'Mumbai', 1, GETDATE(), 1, GETDATE(), 1),
(2, 'Delhi', 1, GETDATE(), 1, GETDATE(), 1),
(3, 'Bangalore', 1, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai', 1, GETDATE(), 1, GETDATE(), 1),
(5, 'Kolkata', 1, GETDATE(), 1, GETDATE(), 1),
(6, 'Hyderabad', 1, GETDATE(), 1, GETDATE(), 1),
(7, 'Ahmedabad', 1, GETDATE(), 1, GETDATE(), 1),
(8, 'Pune', 1, GETDATE(), 1, GETDATE(), 1),
(9, 'Jaipur', 1, GETDATE(), 1, GETDATE(), 1),
(10, 'Lucknow', 1, GETDATE(), 1, GETDATE(), 1),
(11, 'Kochi', 1, GETDATE(), 1, GETDATE(), 1),
(12, 'Goa', 1, GETDATE(), 1, GETDATE(), 1),
(13, 'Srinagar', 1, GETDATE(), 1, GETDATE(), 1),
(14, 'Guwahati', 1, GETDATE(), 1, GETDATE(), 1),
(15, 'Amritsar', 1, GETDATE(), 1, GETDATE(), 1);


--Roles
INSERT INTO Roles values('Admin')


--user
INSERT INTO [User] (Username, ImageUrl, UserEmail, UserAddress, PhoneNumber, CreatedDate, CreatedId, LastLoginDate, LastModificationDate, LastModificationId, RoleId)
VALUES
('AdminUser', 'https://example.com/profile.jpg', 'AdminUser@example.com', '123 Main St, City, Country', '1234567890', GETDATE(), 1, GETDATE(), GETDATE(), 1, 1);

-- Inserting data into the AirportData table
INSERT INTO AirportData (AirportId, AirportName, AirportCode, AddressId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'Chhatrapati Shivaji Maharaj International Airport', 'BOM', 1, GETDATE(), 1, GETDATE(), 1),
(2, 'Indira Gandhi International Airport', 'DEL', 2, GETDATE(), 1, GETDATE(), 1),
(3, 'Kempegowda International Airport', 'BLR', 3, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai International Airport', 'MAA', 4, GETDATE(), 1, GETDATE(), 1),
(5, 'Netaji Subhas Chandra Bose International Airport', 'CCU', 5, GETDATE(), 1, GETDATE(), 1),
(6, 'Rajiv Gandhi International Airport', 'HYD', 6, GETDATE(), 1, GETDATE(), 1),
(7, 'Sardar Vallabhbhai Patel International Airport', 'AMD', 7, GETDATE(), 1, GETDATE(), 1),
(8, 'Pune International Airport', 'PNQ', 8, GETDATE(), 1, GETDATE(), 1),
(9, 'Jaipur International Airport', 'JAI', 9, GETDATE(), 1, GETDATE(), 1),
(10, 'Chaudhary Charan Singh International Airport', 'LKO', 10, GETDATE(), 1, GETDATE(), 1)