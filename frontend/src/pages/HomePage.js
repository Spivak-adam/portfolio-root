import { Link } from 'react-router-dom';
import portrait from '../images/Adam-Spivak-Portrait.jpg'

function HomePage() {
    return (
        <>
            <h2>Adam Spivak's Web Development Portfolio</h2>
            <article>
                <h3>About me:</h3>
                <img src={portrait} className="self-portrait" alt="Adam Spivak Portrait" />
                <p>
                    &emsp; Hello, my name is Adam Spivak, and I'm currently a computer science major with minors
                    in business and organizational leadership. I've gained practical experience through my internship,
                    working with technologies like Angular and jQuery. I've also completed coursework in full-stack
                    MERN development, Python, Assembly Intel86x, and technical writing. My diverse background has equipped
                    me with a strong foundation in both Technical skills and business comprehension. <br /><br />

                    &emsp;I'm particularly interested in data analysis and aspire to grow into a software architect role.
                    I’m excited to continue learning and contributing to innovative projects that combine
                    technology and business strategies. Check out my <strong><Link to="/ExperiencePage">experience</Link></strong> page to see a list of projects and work history,
                    and see my <strong><Link to="/GalleryPage">gallery</Link></strong> page to see screenshots of my work.
                    Feel free to reach out to me through my <strong><Link to="/ContactPage">contact</Link></strong> page, and I will get back to you asap!

                </p>
            </article>
            <article>
                <h3>About the website:</h3>
                <p>
                    This portfolio incorporates many Web-Development technologies, including the MERN Stack (Mongoose, Express, React, and .NodeJS), to create
                    a dynamic and interactive design. Each page demonstrates these different pieces of technology. For example, the experience page demonstrates
                    CRUD (Create, Remove, Update, Delete) by using REST api and Mongoose to make HTTP requests from the NoSQL MongoDB server to display and modify a table with a
                    list of my experiences. (GALLERY, ORDER, STAFF, CONTACT) <br /><br />
                </p>
                <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>
                        &emsp;HTML stands for HyperText Markup Language. It is a front-end web-design language used to create structure within a static webpage document.
                        Instead of having long pieces of text on a page that is not formatted or easy to read, HTML enables the ability to separate the document into
                        blocks of information. It has different element tags for parts of the page, and each has attributes that can modify the functionality
                        or design of the page. In the element's tag, the attribute is usually in line. One attribute, "style," enables for the design of the element using CSS.
                        The CSS can be in the tag or linked to an external document. When the CSS is in an external document, the element can connected to styling
                        using a Class or ID. Class is for styling more than one element tag the same way, and ID is for specifically one element. <br />

                        &emsp;When creating a document, there are two separate sections, the &lt;head&gt; and &lt;body&gt;. The &lt;head&gt; section
                        stores all the metadata with information for SEO (search engine optimization), language, and icons for photos on search engines. This section
                        also connects to different files for CSS and JavaScript. The &lt;body&gt; section creates the layout of the page, using structural tags
                        such as &lt;main&gt;, &lt;article&gt;, and &lt;section&gt;. After filling out both of these sections, putting them together will create a working webpage.
                    </dd>

                    <dt><strong>CSS</strong></dt>
                    <dd>
                        &emsp;CSS stands for Cascading Style Sheets. While HTML has elements with attributes that allow for design, CSS is what designs the document.
                        Cascading is like a hierarchy, where the information at the top level takes the lowest priority. Linked external stylesheets (top level, lowest priority)
                        get overruled by Embedded/Internal stylesheets, which then gets overruled by inline style definition (lowest level, highest priority). If there is no style
                        at the lowest level, the next highest level takes place and takes priority design. Using CSS tags to reference elements, classes, or IDs allows for the modification
                        of almost anything in that tag, from the text color, text font, and background color, to the space around and inside the element.
                    </dd>

                    <dt><strong>Javascript</strong></dt>
                    <dd>
                        &emsp;JavaScript (JS) an object oriented programming language for writing client-side code for web applications. However, it is now widely used for server-side programming. It is a
                        diverse tool that can adapted for any use. It allows for dynamic changes to the webpage based on events (i.e., clicking a button) to create more interaction for the user without
                        having to reload the page. Furthermore, it can be embedded in the &lt;head&gt; or &lt;body&gt; section of a webpage document, the element tag, or imported from an external document
                        like CSS. It can also be used to create Node.js applications using server-side code to handle things HTTP requests and perform asynchronous programming.
                    </dd>

                    <dt><strong>Node</strong></dt>
                    <dd>
                        &emsp;Node.js (or more commonly known as Node) is a program that runs JavaScript programs similar to how browsers run JavaScript. It uses a JavaScript engine called V8 that was
                        developed by Google, and uses JavaScript for developing server-side and networking applications. It provides a rich library of various JavaScript modules which can simplify the development of webpages.
                        Node can be run on MacOS, Microsoft Windows, and Linux. To use it, install Node.js on your local hard drive and run "npm install" using the terminal on the project your working on.
                        From there you can install further packages required for your project.
                    </dd>

                    <dt><strong>Express</strong></dt>
                    <dd>
                        &emsp;Express is a popular Node framework, providing an Application Programming Interface (API)s of various common tasks that web applications need to use.
                        Using express enables the ability to get, post, and delete data, and define ports and routes that data will take. It can also create static files as templates to dynamically
                        build responses to incorporate that data. Lastly, it can use middleware to handle requests made within the routes the data takes, like sending a response to the console
                        depending on if the HTTP request was handled successfully or not.<br />

                        &emsp;When working with Express, there is the <i>app</i> API that can be used to handle HTTP requests and responses to get and put information on the webpage.
                        To use this method, a 'public' folder for static files must be created first as a root directory, where these static files can be served and routed. To create this public folder,
                        use the expression <strong>app.use(express.static('public'));</strong>. Once the public directory has been created, we must create a route, or endpoint, from which the information will be pulled from
                        put into. After these two have been created the <i>app</i> API methods can be used for HTTP requests and responses, which pulls in data as a JSON object.<br/>
                        The general form for this method is <strong>app.method(/endpoint path, handler function).</strong> Here are two examples:<br />
                        <pre>
                            <code>
                            {'app.get("/", (req, res) => {'}<br/>
                            &emsp;&emsp;{'res.send("Hello World!");'}<br/>
                            {'});'}
                            </code>
                        </pre><pre>
                            <code>
                            {'app.post("/", (req, res) => {'}<br/>
                            &emsp;&emsp;{'res.send(req.body);'}<br/>
                            {'});'}
                            </code>
                        </pre>
                        <ul>
                            <li>
                                <strong>app.method:</strong> The first method here is <strong>GET</strong>, which is used with the handler function <strong>res</strong> to send information to the server, where <strong>req</strong> 
                                 is a query object in the URL. The second method here is <strong>POST</strong>, where the information is still taken from the req but is sent to the web page instead of the server.
                            </li>
                            <li>
                                <strong>/endpoint path:</strong> Resource paths are routes that set how an application will map an HTTP request to resources. Endpoints refer to the combination of a resource 
                                path with an HTTP method, where GET and POST will have different endpoints with the same resource path. Here the resource path "/" typically refers to the home page of an application.
                            </li>
                            <li>
                                <strong>handler function:</strong> The two main handler functions <strong>req</strong>, and <strong>res</strong> handle how the data from the webpage or server is used. Using req to
                                handle the HTTP request pulls in the data as a JSON object to extrapolate its needed data. And res usage is dependent on the app.method. If using GET, res will send the
                                data to the server, and using POST will send the data to the web browser.
                            </li>
                        </ul>
                    </dd>

                    <dt><strong>Asynchronous porgramming</strong></dt>
                    <dd>
                        &emsp;Asynchronous programming is used to build large-scale, performant web apps. Written in JavaScript, it can be used to write both client-side and server-side code. Instead of loading
                        a webpage piece by piece, such as sending independent HTTP requests for each image, Asynchronous programming ensures everything works properly before loading the page.
                        When trying to load a page using asynchronous programming, it uses something called promises. They are JavaScript objects that represent the result of an asynchronous operation. They
                        have four states: pending, fulfilled or rejected, and then settled. When pending, the HTTP request does not have a result. When returned, the promise can be fulfilled or rejected, depending on
                        if there are any errors. Once it has the status back, it is considered settled. When writing asynchronous functions, they use keywords such as async, await, and fetch. In the function declaration,
                        the keyword async must be used to declare it as an asynchronous function, and await is used to wait for the promise to return. The fetch keyword uses HTTP requests to get data, and the await
                        keyword goes in front of it to wait until the fetch operation has completed. 
                    </dd>

                    <dt><strong>DOM</strong></dt>
                    <dd>
                        &emsp;The Document Object Model (DOM) is an interactive visual representation of a webpage structure. It is normally represented as a tree with children, starting at the document at the top,
                        the HTML tag as its child, and the head and body as the HTML's children. There is a parent-child relationship moving up and down the tree of the DOM, each spot on the tree known as a node.
                        You can access different nodes of the DOM tree using functions such as <strong>document.getElementByID()</strong> or <strong>document.getAttribute()</strong>. Using this functionality allows for dynamic updates of a
                        website by accessing and interacting with different parts of a webpage.
                    </dd>

                    <dt><strong>Single Page Applications (SPA)</strong></dt>
                    <dd>
                        &emsp;Single Page Applications (SPA) are websites with one webpage, but use a form of dynamic web design to update the website using the DOM tree to make it feel like you're accesing different
                        webpages. Instead of having different webpages with possibly different HTML, CSS, or JavaScript, SPAs only load the page once for better optimization. What's great about them is they can
                        still fetch, update, create and delete information.
                    </dd>

                    <dt><strong>React Frame work</strong></dt>
                    <dd>
                        &emsp;As stated previously, SPAs use a form of dynamic web design to modify the DOM tree. This web design technique is called React. It is a beautiful piece of technology that allows for more
                        modular design, where can create separate components that include HTML or some functionality and import them into the main webpage file. Similar to Node, React has to be imported
                        using the local terminal. When imported it creates three main directories node-module, public, and src. Node-module, like in Node.js apps, contains all the required node modules the app depends
                        on. The public folder, like Express, contains and serves the static content. It contains the index.html file which displays when the user enters the site. Looking at the HTML file, in the
                        body element there is one &lt;div&gt; with the id="root" where all the components get imported into from the index.js file. In the src directory, the two most important files are index.js and App.js.
                        App.js imports all the components, and index.js then imports the App.js file as its own component to be routed to the root div. To navigate to different "pages" React has a build-in function
                        called &gt;BrowserRouter&lt; and &lt;Routes&gt;. When defining a route, creates a path and takes a parameter of the imported component you want to connect to. And instead of using &gt;a&lt; tags to link to
                        different pages, it uses a new tag called &lt;Link&gt;. This &lt;Link&gt; takes the same path as the defined route, so when the Navigation buttons are clicked on it knows what component to render.
                    </dd>

                    <dt><strong>Mongoose</strong></dt>
                    <dd>
                        &emsp;Mongoose is a JavaScript library that provides a syntactic layer between the data in the database's collection of documents and the objects in a Node app. It allows for easier communication
                        with the MongoDB server. It is an object-document mapper (ODM) that maps between classes and objects in JavaScript code and the document stored in MongoDB. Furthermore, it gives you the ability to create
                        a schema, which is a document in MongoDB. Once these documents are created on the backend code, they can be sent to the MongoDB server and into the right collection.
                    </dd>

                    <dt><strong>MongoDB</strong></dt>
                    <dd>
                        &emsp;MongoDB is a NoSQL database (or document DBMS) that stores information as JSON objects. Data is stored in a document as a JSON object, and similar documents get added to a collection.
                        It can be interacted with through the MongoDB servers using Mongoose and HTTP requests to add, modify, and delete information. To connect to the MongoDB server, you can connect it through this link: <strong>mongodb+srv://auser:apassword@cluster0.xmi4kg3.mongodb.net/users_db</strong>. 
                        Where auser is the username of the owner of the database, apassword is the password to allow the connection, cluster0.xmi4kg3.mongodb.net is the host running MongoDB, and /users_db is the connecting to the specific database.
                    </dd>

                    <dt><strong>REST</strong></dt>
                    <dd>
                        &emsp;REST stands for Representational State Transfer. REST APIs are widely used in architectural styles for implementing web services. It allows for HTTP requests to servers to perform
                        CRUD operations. This server should remain stateless, meaning when routing to the server, the next request should never remember the previous request. 
                    </dd>

                    <dt><strong>CRUD</strong></dt>
                    <dd>
                        &emsp;CRUD stands for Create, Read, Update, Delete. It is a mode of operation used to interact with the MongoDB server to modify its existing content. Create uses the POST method, Read uses the GET method,
                        Update uses the PUT method when you want to update one piece of information in a document, and Delete uses the DELETE method.
                    </dd>
                </dl>
            </article>
        </>
    );
}

export default HomePage;