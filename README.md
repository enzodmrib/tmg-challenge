# tmg-challenge

## scripts:
 - npm start (start the application)
 - npm run test (run unit tests)
 - npm run test:e2e (run integration tests, requires application to be running in a different terminal)

The system was designed mainly focusing on the testing requirements. Since the challenged demanded in memory storage and unit testing specifically, the structure followed was a routing layer, a controller layer and a service layer.

At the top level, in the app configuration, from the router attribution, a global error handler was created, to avoid repetition and mitigate possible untreated errors.

The routing layer is responsible for designating the controller functions to each endpoint, and add the request validation middleware. This middleware was implemented mainly using the Zod validation library and the procedure is to define the request schema on the routing layer and pass it on to the validation middleware, where the request body is parsed and compared to the schema referenced. If the object is invalid, a Validation error is thrown.

The controller layer is responsible for the instantiation of the service layer (meaning initializing the storage in memory, while also bringing the methods that are going to be used), and manipulating the requests and possible errors that are thrown by the lower levels.

Finally, the service layer is fairly simple, being a class that has one public property, being the data (stack or store), and the methods following the business rules.

Throughout the code, some method implementations were done using arrow functions to avoid actively binding functions to their contexts.

As for the tests, the libraries used were vitest and supertest, which go along pretty well.

## Advantages of this structure:
 - Allowing in memory storage (since the service is instantiated once at the controller layer, we can keep track of the data state)
 - Allowing unit testing (for service layer, specifically focusing on the business rules proposed), and integration testing.
 
## Disadvantages:
 - Code is not ideally detached, meaning refactoring and switching possible technologies would take more time and effort.
 - If multiple people were to work on this project, it probably would have some conflicts to resolve along the way, since endpoints and service methods all belong to the same files.
 
(to solve this in a bigger project i would implement SOLID principles, with repository pattern and use-case pattern)

After starting the application (using npm start), you can check the api documentation with swagger on http://localhost:8080/api-docs
## Endpoints:

Stack endpoints:
![image](https://github.com/user-attachments/assets/6d730e13-71cd-47b8-b97e-5e3e96e8ad79)
![image](https://github.com/user-attachments/assets/36447af5-9111-4ba9-a307-d23f29710a1c)

Store endpoints:
![image](https://github.com/user-attachments/assets/ebaaeb9b-d6b5-4873-ac97-f5b77ce43b09)
![image](https://github.com/user-attachments/assets/7f46751e-da43-44dd-a81c-9e7246b7ca60)
![image](https://github.com/user-attachments/assets/49e449da-4577-4d12-917e-d0dd6690a11c)



