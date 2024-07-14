function TopicPage(){
    return(
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#webdesign">Web Design</a>
                <a href="#frontEndDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
            </nav>
            <article id="webdesign">
                <h3>Web Servers</h3>
                <p>
                    <strong>The Designated Homepage</strong> is the root directory, or the default file that is returned when the GET request is received for the URL. If the resource ends
                    with a / it will default to the root directory file (the home page). This can either be an <strong>index.html, default.html, index.js, or index.php.</strong>
                    It is the base file that all websites start on, allowing to create a path to different web pages on a website.
                </p>

                <p>
                    When viewing information on the <strong>Web Dev/Inspector,</strong> under the <strong>Network tab,</strong> one of the first things I notice is the difference between the <strong>local file</strong>
                    and the <strong>web sever</strong>. A few of the differences is the amount of files that are being loaded on the webpage, the <strong>status code,</strong> and the <strong>request method</strong>. On the local computer,
                    it's only trying to load the HTML, the CSS, and JavaScript, and the <strong>index.html</strong> has a <strong>request method</strong> of Get with <strong>status code</strong> of 200. This means the
                    request to receive the information was successful, and the server had the needed information.<br /><br />

                    While, on the web server there is a <strong>favicon.ico</strong> image being loaded, as well as a <strong>content.js</strong>. When taking  a look at
                    the <strong>request method</strong> and <strong>status code</strong> for the <strong>index.html</strong> file, it has the same information as the local file. Another difference I noticed
                    is there being remote IP address on the web server, while there is none for the Local file. In the <strong>response header</strong> for the Local file there is only content type and last-modified,
                    but in the web server is a little more information, such as Etag, last modified, content-type, and content-encoding (which is gzip). Lastly, in the request header, in the local file
                    there is only Sec-Ch-Ua..(etc), while on the web server there is Accept, Accept-Encoding, Cache-Control, and Cookie.
                </p>
                <p>
                    The <strong>favicon.ico</strong> is 200 because the file is found in the Disk Cache, and the status code from the response is ok. The <strong>main.css</strong> and <strong>main.js</strong> files are still 400 because those have not been created yet
                    and are still bad requests on the client side.
                </p>
                <p>The URL to my webpage is https://web.engr.oregonstate.edu/~spivaka/. The Scheme is https, the subdomain is web.engr, the domain is oregonstate.edu, and the path to the resource is /~spivaka/</p>
            </article>
            <article id="frontEndDesign">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> is creating a website that is accessible and easy for all users, where every webpage has a theme for the related content.
                    Each webpage has great structure, from the layout of information, to the typography chosen for the text. They also includes a lot of attractive images and user-friendly <strng>GUIs (Graphical User Interface).</strng>
                    <br />The combination of GUIs, good typography, structure, and color is what gives websites life. It is more enjoyable to use a website with these features because it creates a more seamless
                    experience and allows for a better flow with easier-to find details that a user might be looking for. When thinking of <strong>frontend Design</strong>, it is helpful to ask questions using the <strong>FIVE Es:</strong>
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>How well does the webpage layout help the user complete their task? Does it satisfy the reason the user came to the webpage?</dd>
                    <dt>Efficient</dt>
                    <dd>How quickly can the user find the information they are looking for? What is the least amount of steps needed for the user to complete their tasks?</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>How intuitive the website is to use the first time, and is the user able to understand the layout quickly?</dd>
                    <dt>Error-Free</dt>
                    <dd>What accessibility and availability have there been in the past with past users, and what can be done to fit it?</dd>
                    <dt>Enjoyable</dt>
                    <dd>How well did the webpage fit the user's needs, and are they willing to come back again due to the overall great experience?</dd>
                </dl>
                <p>
                    The purpose of each <strong> page layout tag</strong> is to help create structure for the above-mentioned concepts that create a great website design.
                    The <strong>header</strong> is the overhead banner that lets the user know what website they're currently using, as it stays the same from page to page. The header can either be a title, name, slogan, etc.
                    The <strong>nav bar</strong> allows the user to travel to different pages on the website, which normally include the homepage, an about page, and any additional pages needed to provide information.
                    The <strong>main</strong> tag is where most of the webpage's layout tags sit, like its sections or articles. The header sits outside the main tag because it is not generally part of the rest of the information on the page.
                    The <strong>section</strong> tag groups content together that is loosely related, but doesn't quite stand on its own. Usually, a &lt;h2&gt; starts a section and carries the rest. Imagine a newspaper with different sections, like news, arts, real estate, etc.
                    The <strong>article</strong> tag is like the section tag, but for more specific relationship. From the previous example with the newspaper, in the arts section, there would be <em>articles</em> on different painters. This tag would typically have a &lt;h3&gt; to start and a smaller headline.
                    And finally, the <strong>footer</strong> section is at the bottom, outside the main tag, and includes critical information, such as contact links and copyright symbols.
                </p>
                <p>
                    Anchors can be used for various purposes. They are either a element &lt;a href=""&gt;, or an attribute within an element, designated using a #. They allow the user to travel to different websites, locations within a webpage,
                    or simply page-to-page within a website. There are different types of anchors, and they can have either an <strong>absolute path</strong> or a <strong>relative path</strong>. A absolute path is a full URL that
                    can map to an outside source, such as another website, dictionary, map, etc... A Relative path is used for directing files within the <em>directory</em>. They allow the website to move in and our of different folders
                    on the backend of the website to get certain file information, from a json script or a image in another folder. Using ./ can take the computer out of a folder and start a new path down into another one. The number of dots, or periods,
                    will specificy the number of folders to back out of to get to a specific folder, so it may create a new path to a different folder.
                </p>
                <ol>
                    <li>
                        <strong>External anchors</strong> are links to different websites that, and when clicked, can either take the user to a specific page or to a direct spot on that page.
                    </li>
                    <li>
                        An <strong>Internal anchor</strong> will take the user directly to a spot on the same webpage, so they don't have to keep scrolling up and down to different spots on the same page. They're usually in the form of an ID using a #.
                    </li>
                    <li>
                        <strong>Page-to-page</strong> is simple enough; it's used to travel to different pages on the same website. These types of anchors use an &lt;a&gt;&lt;/a&gt;, typically in the Nav bar.
                    </li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    There are six ways to optimize images on a webpage to create a more enjoyable experience. For example, concise named photos help to improve SEO optimization, and smaller file sizes
                    lower load time.
                    <br />

                    When creating a <strong>Descriptive file name</strong>, it must be short and explainatory to help with keywords for webcrawlers to find it on search engines.
                    <strong>Small file sizes</strong> allow for faster load times on the webpage, from Serve high resolution images to only high resolution devices. This can be done with either srcset=""
                    and sizes="" attributes. When optimizing an image, it can either be done with a lossy or lossless method. Lossy images are used reduce file size, while Lossless loses no data.
                    It is good to have <strong>Exact dimensions</strong> with images to allow the best quality and to for it to fit within the webpage.
                    Having the <strong>correct file format</strong> for images is important too. Online photos are best used with a JPG. Line-art images like logos and icons are usually .GIF, and sometimes 8-bit PNG.
                    And to have a graphic with true transparency, a 24-bit .PNG is needed. <strong>Reduced resolution</strong> is essential because different monitors can render between 72 to 300+ pixels per inch (ppi).
                    The older default is 72 ppi, while the resolution standard available now are much higher. Due to moniters having ppi, it has become important to provide multiple images with different sizing.
                    And finally, <strong>Color mode</strong> are critical for different images. RBG is used for .PNG, .JPG, .SVG, and .WebP, and indexed for .GIF (and sometimes PNG).
                    <br />
                    <br />
                    <strong>Photos</strong> are best used with .JPG due to them typically having millions of colors, which can be too much to process for webservers. JPG allows  them to compress the colors
                    and file size while remaining rectangular.
                    <strong>Line art</strong> is best used with .GIF, which can have 8-bit transparency and/or animation with antialiasing. The common trend is to save a short video sequence as an animated GIF
                    in Index colored mode.

                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    A <strong>Favicon</strong> is the logo used to identify a webpage. It can either show up in <strong>search results, in the browser tab, smartphones, smartwatches, or large displays</strong>. They can either be saved as
                    a <strong>.GIF, .PNG, .SVG, and .ICO</strong> (which is usually for older format browsers), and each file can be modified to best fit different devices. The process begins by
                    creating separate files for each device, then the browser picks up the different files and saves them as bookmark anchors for search engines. They can also save
                    to a favorites list in a device screen.
                </p>
            </article>
            <article id="css">
                <h3>Cascading Style Sheets</h3>
                <p>
                    <strong>CSS (Cascading Style Sheets)</strong> is a language used with web development that brings a webpage to life! It allows the website create to add colors and different images, change font sizes, and create spacing between
                    different blocks of text and information! What is amazing about CSS is that it allows the website to update depending on the browser, and what size screen it is being displayed on. A website that is on a 
                    computer screen can look completely different from a website on a iPhone.
                </p>
            </article>
        </>
    );
}

export default TopicPage;