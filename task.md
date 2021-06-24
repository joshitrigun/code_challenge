Level 1: Create a user REST API server
● Create an express.js REST API with this route table to act as a standalone server with own
port
○ id (GET) Returns universally unique identifier without delay (expected < 50ms)
○ user (GET) Returns user details (expected response time ~300 ms)
○ user (POST) Returns success. Hypothetically, saving to a database (expected to fail
50%)
● Write unit tests for all endpoints (Jest is preferred)

Level 2: Create a client to consume the user endpoints
● Create a second express.js web app to consume the REST API above
○ Home web page should
■ Be a view template
■ Display user details including the identity
■ Content source is the user API
■ HTML and content is always displayed regardless of API failures
○ Every page load should create a new user and save it to the database. If the
database saves then reload.

Level 3: Create a REST API server using Python
● Use your favorite REST API framework with this route table to act as a standalone server
with own port
○ tone (GET) This endpoint has a goal to detect the tone of the user biography
(randomly return one of these three values: humorous, ironic, or cynical)
● Update the Node.js route user (GET) to enhance the user details with the tone property
● Use Docker so Node.js and Python environment is enclosed in the container and does not
require tooling to be installed on the Finn laptop when reviewing this assignment
